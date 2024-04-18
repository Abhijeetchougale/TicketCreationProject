<<<<<<< HEAD
// import React, { useEffect, useState } from 'react';
// import { Modal } from 'react-bootstrap';
// import { VALIDATIONERROR } from '../Core/Constant/Constant';
// import { getData, postData, updateData, deleteData } from '../Core/Services/Service';
// import { PencilSquare, Trash } from 'react-bootstrap-icons';
=======
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { VALIDATIONERROR } from '../Core/Constant/Constant';
import { getData, postData, updateData, deleteData } from '../Core/Services/Service';
import { PencilSquare, Trash,Plus } from 'react-bootstrap-icons';
>>>>>>> 1b2b9c9eb8a74a4a81525fd084160e06eafcd9b2

// const CreateProject = () => {
//     const getURL_END = 'GetAllProject';
//     const endPOST_URL = 'CreateProject';
//     const endUPDATE_URL = 'UpdateProject';
//     const endDELETE_URL = 'DeleteProjectById?id=+';
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [getAllProjectList, setGetAllProjectList] = useState([]);
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//     const [createProductList, setCreateProductList] = useState(
//         {
//             "projectId": 0,
//             "shortName": "",
//             "fullName": "",
//             "startDate": "",
//             "leadBy": 0,
//             "teamSize": 0,
//             "expectedEndDate": "",
//             "technologyStack": "",
//             "createdDate": "",
//             "createdBy": 0,
//             "projectLogo": ""
//         }
//     )
//     useEffect(() => {
//         getAllProject();
//     }, [])
//     const assignProductInfo = (event, key) => {
//         setCreateProductList(prevObj => ({ ...prevObj, [key]: event.target.value }));
//     }
//     const handleApiError = (error) => {
//         console.error('API error:', error);
//         alert('An error occurred. Please try again.');
//     };

//     const handleApiResult = (result) => {
//         if (result.result) {
//             alert(result.message);

//         } else {
//             alert(result.message);
//         }
//     };
//     //Get Project List
//     const getAllProject = () => {
//         getData(getURL_END)
//             .then((result) => setGetAllProjectList(result))
//             .catch(handleApiError);

//     }
//     // Create Project
//     const addCreateProject = () => {
//         if (createProductList.fullName != '' && createProductList.shortName != '' && createProductList.startDate != '' && createProductList.leadBy != '' && createProductList.teamSize != '' && createProductList.expectedEndDate != '' && createProductList.technologyStack != '' && createProductList.createdDate != '' && createProductList.createdBy != '' && createProductList.projectLogo != '') {
//             postData(createProductList, endPOST_URL).then(handleApiResult)
//                 .catch(handleApiError);
//             setShow(false)
//             getAllProject();
//         }

//     }
//     // Edit Project Info
//     const onEdit = (project) => {
//         setCreateProductList(project)
//         setShow(true)
//     }
//     // Update Project Info
//     const onUpdateProject = () => {
//         updateData(endUPDATE_URL, createProductList)
//             .then(handleApiResult)
//             .catch(handleApiError)
//         setShow(false);
//         getAllProject();
//     }
//     // DELETE RECOARD
//     const onDeleteAdvance = (projectId) => {
//         setIsFormSubmitted(true)
//         deleteData(endDELETE_URL, projectId)
//             .then(handleApiResult)
//             .catch(handleApiError);
//         getAllProject();
//     }



<<<<<<< HEAD
//     return (
//         <div>
//             <div className="container-fluid">
//                 <div className='row mt-3'>
//                     <div className='col-md-1'></div>
//                     <div className='col-md-10'>
//                         <div className='card bg-light'>
//                             <div className='card-header bg-info'>
//                                 <div className="row mt-2">
//                                     <div className="col-md-10 text-center ">
//                                         <h4 >Project List</h4>
//                                     </div>
//                                     <div className="col-md-2">
//                                         <button className='btn btn-success' onClick={handleShow} >Add New</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='card-body'>
//                                 <table className='table table-bordered text-center'>
//                                     <thead>
//                                         <tr>
//                                             <th>Sr.No</th>
//                                             <th>Short Name</th>
//                                             <th>Full Name</th>
//                                             <th>Start Date</th>
//                                             <th>Team Size</th>
//                                             <th>Technology Stack</th>
//                                             <th>Created Date</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {
//                                             getAllProjectList.map((project, index) => {
//                                                 return (
//                                                     <tr>
//                                                         <td>{index + 1}</td>
//                                                         <td>{project.shortName}</td>
//                                                         <td>{project.fullName}</td>
//                                                         <td>{project.startDate}</td>
//                                                         <td>{project.teamSize}</td>
//                                                         <td>{project.technologyStack}</td>
//                                                         <td>{project.createdDate}</td>
//                                                         <td>
//                                                             <button className='btn btn-sm btn-success m-2' onClick={() => { onEdit(project) }}>
//                                                                 <PencilSquare/>
//                                                             </button>
//                                                             <button className='btn btn-sm btn-danger' onClick={() => { onDeleteAdvance(project.projectId) }}>
//                                                                 <Trash/>
//                                                             </button>
//                                                         </td>
//                                                     </tr>
//                                                 )
//                                             })
//                                         }
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
=======
    return (
        <div>
            <div className="container-fluid">
                <div className='row mt-3'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className='card bg-light'>
                            <div className='card-header bg-info'>
                                <div className="row mt-2">
                                    <div className="col-md-10 text-center ">
                                        <h4 >Project List</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <button className='btn btn-success' onClick={handleShow} ><Plus/></button>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered text-center'>
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Short Name</th>
                                            <th>Full Name</th>
                                            <th>Start Date</th>
                                            <th>Team Size</th>
                                            <th>Technology Stack</th>
                                            <th>Created Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getAllProjectList.map((project, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{project.shortName}</td>
                                                        <td>{project.fullName}</td>
                                                        <td>{project.startDate}</td>
                                                        <td>{project.teamSize}</td>
                                                        <td>{project.technologyStack}</td>
                                                        <td>{project.createdDate}</td>
                                                        <td>
                                                            <button className='btn btn-sm btn-success m-2' onClick={() => { onEdit(project) }}>
                                                                <PencilSquare/>
                                                            </button>
                                                            <button className='btn btn-sm btn-danger' onClick={() => { onDeleteAdvance(project.projectId) }}>
                                                                <Trash/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
>>>>>>> 1b2b9c9eb8a74a4a81525fd084160e06eafcd9b2

//                     </div>

//                 </div>
//                 <div className='col-md-12'>
//                     <Modal show={show} onHide={handleClose}>
//                         <Modal.Header closeButton className='bg-light'>
//                             <Modal.Title>Create Project Information</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <div >
//                                 <div >
//                                     <div className='card-body'>
//                                         <div className='row'>
//                                             <div className="col-md-12">
//                                                 {/* {JSON.stringify(createProductList)} */}
//                                                 <label>Full Name</label>
//                                                 <input type="text" value={createProductList.fullName} className='form-control' onChange={(event) => { assignProductInfo(event, 'fullName') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.fullName === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Short Name</label>
//                                                 <input type="text" value={createProductList.shortName} className='form-control' onChange={(event) => { assignProductInfo(event, 'shortName') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.shortName === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className='col-md-6'>
//                                                 <label>Start  Date</label>
//                                                 <input type="date" value={createProductList.startDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'startDate') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.startDate === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                         </div>
//                                         <div className='row my-2'>
//                                             <div className='col-md-6'>
//                                                 <label>Lead By</label>
//                                                 <input type="number" value={createProductList.leadBy} className='form-control' onChange={(event) => { assignProductInfo(event, 'leadBy') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.leadBy === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className='col-md-6'>
//                                                 <label>Team Size</label>
//                                                 <input type="number" value={createProductList.teamSize} className='form-control' onChange={(event) => { assignProductInfo(event, 'teamSize') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.teamSize === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className='col-md-6'>
//                                                 <label>Expected End Date</label>
//                                                 <input type="date" value={createProductList.expectedEndDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'expectedEndDate') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.expectedEndDate === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className='col-md-6'>
//                                                 <label>Technology Stack</label>
//                                                 <input type="text" value={createProductList.technologyStack} className='form-control' onChange={(event) => { assignProductInfo(event, 'technologyStack') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.technologyStack === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                         </div>
//                                         <div className='row my-2'>

//                                             <div className='col-md-6'>
//                                                 <label>Created Date</label>
//                                                 <input type="date" value={createProductList.createdDate} className='form-control' onChange={(event) => { assignProductInfo(event, 'createdDate') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.createdDate === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                             <div className='col-md-6'>
//                                                 <label>Created By</label>
//                                                 <input type="number" value={createProductList.createdBy} className='form-control' onChange={(event) => { assignProductInfo(event, 'createdBy') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.createdBy === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                         </div>
//                                         <div className="row my-2">
//                                             <div className='col-md-12'>
//                                                 <label>Project Logo</label>
//                                                 <input type="text" value={createProductList.projectLogo} className='form-control' onChange={(event) => { assignProductInfo(event, 'projectLogo') }} />
//                                                 {
//                                                     isFormSubmitted && createProductList.projectLogo === '' && <div className="text-danger">{VALIDATIONERROR}</div>
//                                                 }
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             {
//                                 createProductList.projectId == 0 && <button className='btn btn-sm btn-primary' onClick={addCreateProject}>Add</button>
//                             }
//                             {
//                                 createProductList.projectId != 0 && <button className='btn btn-sm btn-warning' onClick={onUpdateProject}>Update</button>
//                             }


//                             <button className='btn btn-sm btn-danger' onClick={() => setShow(false)}>Cancel</button>

//                         </Modal.Footer>

//                     </Modal>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateProject;