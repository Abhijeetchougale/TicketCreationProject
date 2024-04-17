import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button, Modal, Form } from 'react-bootstrap';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
const Issue = () => {
    const [rowData, setRowData] = useState([]);
    const [newIssue, setNewIssue] = useState({
        "issueId": 0,
        "issueType": 0,
        "createdDate": new Date().toString(),
        "projectId": 0,
        "statusId": 0,
        "assignedTo": 0,
        "summary": "",
        "description": "",
        "reporter": 0,
        "timeSpan": "",
        "parentId": 0,
        "priority": "",
        "storyPoint": 0,
        "issueGuid": ""
    }
    );
    const [showModal, setShowModal] = useState(false);
    const [validationerror, setvalidationerror] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewIssue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const cellRendererFramework = (props) => {
        return (
            <React.Fragment>
                <button className='btn btn-sm btn-success' onClick={() => handleEdit(props.data)} ><FontAwesomeIcon icon={faEdit} /></button>
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(props.data)} ><FontAwesomeIcon icon={faTrash} /></button>
            </React.Fragment>
        );
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    const fetchIssues = () => {
        axios.get('https://onlinetestapi.gerasim.in/api/Glitch/GetAllIssues')
            .then(response => {
                setRowData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching issues:', error);
            });
    };

    const handleCreate = () => {
        if(!setvalidationerror)
        axios.post('https://onlinetestapi.gerasim.in/api/Glitch/CreateIssue', newIssue)
            .then(response => {
                alert('Issue created successfully:', response.data);
                fetchIssues();
                setShowModal(false);
                clearForm();
            })
            .catch(error => {
                console.error('Error creating issue:', error);
            });
            
    };


    const handleEdit = (issueData) => {
        setNewIssue(issueData);
        setShowModal(true);
        fetchIssues();
    }

    const handleDelete = (issue) => {
        axios.get(`https://onlinetestapi.gerasim.in/api/Glitch/DeleteIssueById?id=${issue.issueId}`)
            .then(response => {
                alert('Issue deleted successfully:', response.data);
                fetchIssues();
            })
            .catch(error => {
                console.error('Error deleting issue:', error);
            });
    };

    const handleUpdate = () => {
        axios.post('https://onlinetestapi.gerasim.in/api/Glitch/UpdateIssue', newIssue)
            .then(response => {
                alert('Issue created successfully:', response.data);
                fetchIssues();
                clearForm();
            })
            .catch(error => {
                console.error('Error creating issue:', error);
            });
    };

    const clearForm = () => {
        setNewIssue({
            issueType: 0,
            createdDate: new Date().toISOString(),
            projectId: 0,
            statusId: 0,
            assignedTo: 0,
            summary: '',
            description: '',
            reporter: 0,
            timeSpan: '',
            parentId: 0,
            priority: '',
            storyPoint: 0,
            issueGuid: ''
        });
    };

   
    const columnDefs = [
        
        { headerName: 'Issue Name', field: 'issueTypeName' },
        { headerName: 'Created Date', field: 'createdDate' },     
        { headerName: 'Summary', field: 'summary' },
        { headerName: 'Description', field: 'description' },       
        { headerName: 'Time Span', field: 'timeSpan' },
        { headerName: 'Priority', field: 'priority' },
        { headerName: 'Issue Guid', field: 'issueGuid' },
        { headerName: 'Actions', cellRenderer: cellRendererFramework }
    ];

    return (
        <div>
           
            <div className='d-flex justify-content-between'>
            <h2 className='text-center'>Create New Issue</h2>
                <Button variant="primary" onClick={() => setShowModal(true)}>Create New</Button>
            </div>
            <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                    // const paginationPageSizeSelector = {[200, 500, 1000]}

                    onGridReady={(params) => params.api.sizeColumnsToFit()}
                />
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            newIssue.issueId == 0 && <h4>Add Issue Type</h4>
                        }
                        {
                            newIssue.issueId != 0 && <h4>Update Issue Type</h4>
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="issueType">
                            <Form.Label>Issue Type</Form.Label>
                            <Form.Control type="number" name="IssueType" value={newIssue.issueType} onChange={handleInputChange} />
                            {
                               validationerror && newIssue.issueType ==''&& <label className='danger'>This Is Required</label>
                            }
                        </Form.Group>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control type="text" name="Summary" value={newIssue.summary} onChange={handleInputChange} />
                            {
                               validationerror && newIssue.summary ==''&& <label className='danger'>This Is Required</label>
                            }
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="Description" value={newIssue.description} onChange={handleInputChange} />
                            {
                               validationerror && newIssue.description ==''&& <label className='danger'>This Is Required</label>
                            }
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {
                        newIssue.issueId === 0 &&
                        <Button variant='success' onClick={handleCreate}>Add</Button>


                    }
                    {
                        newIssue.issueId !== 0 &&
                        <Button variant='success' onClick={handleUpdate}>Update</Button>

                    }
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Issue;

// { headerName: 'Issue ID', field: 'issueId' },
   // { headerName: 'Project ID', field: 'projectId' },
        // { headerName: 'Status ID', field: 'statusId' },
        // { headerName: 'Assigned To', field: 'assignedTo' },
         // { headerName: 'Reporter', field: 'reporter' },
             // { headerName: 'Parent ID', field: 'parentId' },
                     // { headerName: 'Story Point', field: 'storyPoint' },
