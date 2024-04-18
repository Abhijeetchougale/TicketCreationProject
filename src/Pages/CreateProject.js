import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { VALIDATION_REQUIRED } from '../Core/Constant/Constant';
import { getData, postData, updateData, deleteData } from '../Core/Services/Service';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import Button from 'react-bootstrap/Button';
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";




const CreateProject = () => {
    const getURL_END = 'GetAllProject';
    const endPOST_URL = 'CreateProject';
    const endUPDATE_URL = 'UpdateProject';
    const endDELETE_URL = 'DeleteProjectById?id=+';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [getAllProjectList, setGetAllProjectList] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [createProductList, setCreateProductList] = useState(
        {
            "projectId": 0,
            "shortName": "",
            "fullName": "",
            "startDate": "",
            "leadBy": 0,
            "teamSize": 0,
            "expectedEndDate": "",
            "technologyStack": "",
            "createdDate": "",
            "createdBy": 0,
            "projectLogo": ""
        }
    )
    useEffect(() => {
        getAllProject();
    }, [])
    const assignProductInfo = (event, key) => {
        setCreateProductList(prevObj => ({ ...prevObj, [key]: event.target.value }));
    }
    const handleApiError = (error) => {
        console.error('API error:', error);
        alert('An error occurred. Please try again.');
    };

    const handleApiResult = (result) => {
        if (result.result) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    };
    //Get Project List
    const getAllProject = () => {
        getData(getURL_END)
            .then((result) => setGetAllProjectList(result))
            .catch(handleApiError);

    }
    // Create Project
    const addCreateProject = () => {
        debugger
        setIsFormSubmitted(true);
        if (createProductList.fullName != '' && createProductList.shortName != '' && createProductList.startDate != '' && createProductList.leadBy != '' && createProductList.teamSize != '' && createProductList.expectedEndDate != '' && createProductList.technologyStack != '' && createProductList.createdDate != '' && createProductList.createdBy != '' && createProductList.projectLogo != '') {
            postData(endPOST_URL, createProductList)
                .then(handleApiResult)
                .catch(handleApiError);
            getAllProject();


        }

    }
    // Edit Project Info
    const onEdit = (project) => {
        setCreateProductList(project)
        setShow(true)
    }
    // Update Project Info
    const onUpdateProject = () => {
        updateData(endUPDATE_URL, createProductList)
            .then(handleApiResult)
            .catch(handleApiError)

        getAllProject();
        setShow(false);
    }
    // DELETE RECOARD
    const onDelete = (projectId) => {
        setIsFormSubmitted(true)
        deleteData(endDELETE_URL, projectId)
            .then(handleApiResult)
            .catch(handleApiError);
        getAllProject();
    }
    // Reset
    const OnReset = () => {
        setCreateProductList(

            {
                "projectId": 0,
                "shortName": "",
                "fullName": "",
                "startDate": "",
                "leadBy": 0,
                "teamSize": 0,
                "expectedEndDate": "",
                "technologyStack": "",
                "createdDate": "",
                "createdBy": 0,
                "projectLogo": ""
            }

        )
    }
    const CustomButtonComponent = (props) => {
        return (
            <React.Fragment>
                <Button variant="primary" className='btn-sm m-1' onClick={() => { onEdit(props.data) }}><FaEdit /> Edit</Button>
                <Button variant="danger" className='btn-sm' onClick={() => { onDelete(props.data) }}><FaTrash /> Delete</Button>

            </React.Fragment>
        );
    };
    const [colDefs, setColDefs] = useState([

        { field: "fullName" },
        { field: "startDate" },
        { field: "expectedEndDate" },
        { field: "technologyStack" },
        { field: "Action", cellRenderer: CustomButtonComponent },
    ]);
    const pagination = true;
    const paginationPageSize = 5;
    const paginationPageSizeSelector = [5, 7, 10];


    return (
        <div>
            <div className="container-fluid">
                <div className='row mt-3'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className='card bg-light'>
                            <div className='card-header bg-info'>
                                <div className="row mt-2">
                                    <div className="col-10 ">
                                        <h4 >Project List</h4>
                                    </div>
                                    <div className="col-2">
                                        <React.Fragment>
                                            <Button variant="success" className='btn-md m-1 text-right' onClick={handleShow}><FaPlus /> Add</Button>
                                        </React.Fragment>
                                        {/* <button className='btn btn-success' onClick={handleShow} >Add</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div
                                    className="ag-theme-quartz" style={{ height: 400 }}  >
                                    <AgGridReact
                                        rowData={getAllProjectList}
                                        columnDefs={colDefs}
                                        pagination={pagination}
                                        paginationPageSize={paginationPageSize}
                                        paginationPageSizeSelector={paginationPageSizeSelector}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='col-md-12'>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton className='bg-light'>
                            <Modal.Title>Create Project Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div >
                                <div >
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className="col-md-12">
                                                {/* {JSON.stringify(createProductList)} */}
                                                <label>Full Name</label>
                                                <input type="text" value={createProductList.fullName} className='form-control' onChange={(event) => { assignProductInfo(event, 'fullName') }} />
                                                {
                                                    isFormSubmitted && createProductList.fullName === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className="col-md-6">
                                                <label>Short Name</label>
                                                <input type="text" value={createProductList.shortName} className='form-control' onChange={(event) => { assignProductInfo(event, 'shortName') }} />
                                                {
                                                    isFormSubmitted && createProductList.shortName === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Start  Date</label>
                                                <input type="date" value={createProductList.startDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'startDate') }} />
                                                {
                                                    isFormSubmitted && createProductList.startDate === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                        </div>
                                        <div className='row my-2'>
                                            <div className='col-md-6'>
                                                <label>Lead By</label>
                                                <input type="number" value={createProductList.leadBy} className='form-control' onChange={(event) => { assignProductInfo(event, 'leadBy') }} />
                                                {
                                                    isFormSubmitted && createProductList.leadBy === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Team Size</label>
                                                <input type="number" value={createProductList.teamSize} className='form-control' onChange={(event) => { assignProductInfo(event, 'teamSize') }} />
                                                {
                                                    isFormSubmitted && createProductList.teamSize === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Expected End Date</label>
                                                <input type="date" value={createProductList.expectedEndDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'expectedEndDate') }} />
                                                {
                                                    isFormSubmitted && createProductList.expectedEndDate === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Technology Stack</label>
                                                <input type="text" value={createProductList.technologyStack} className='form-control' onChange={(event) => { assignProductInfo(event, 'technologyStack') }} />
                                                {
                                                    isFormSubmitted && createProductList.technologyStack === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                        </div>
                                        <div className='row my-2'>

                                            <div className='col-md-6'>
                                                <label>Created Date</label>
                                                <input type="date" value={createProductList.createdDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'createdDate') }} />
                                                {
                                                    isFormSubmitted && createProductList.createdDate === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Created By</label>
                                                <input type="number" value={createProductList.createdBy} className='form-control' onChange={(event) => { assignProductInfo(event, 'createdBy') }} />
                                                {
                                                    isFormSubmitted && createProductList.createdBy === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className='col-md-12'>
                                                <label>Project Logo</label>
                                                <input type="text" value={createProductList.projectLogo} className='form-control' onChange={(event) => { assignProductInfo(event, 'projectLogo') }} />
                                                {
                                                    isFormSubmitted && createProductList.projectLogo === '' && (<div className="text-danger">{VALIDATION_REQUIRED}</div>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            {
                                createProductList.projectId == 0 && <Button variant="success" className='btn-md' onClick={addCreateProject}><FaPlus />Add</Button>
                            }
                            {
                                createProductList.projectId != 0 && <button className='btn btn-sm btn-warning' onClick={onUpdateProject}>Update</button>
                            }

                            <Button variant="secondary" className='btn-md' onClick={OnReset}>Reset</Button>


                        </Modal.Footer>

                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default CreateProject;