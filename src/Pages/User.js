import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FaUserPlus } from "react-icons/fa";

import {
  GET_ALL_ROLES,
  GET_ALL_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER_BY_ID,
} from "../Core/constant/Constant.js";
import { deleteData, getData, postData } from '../Core/Services/Service.js';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { VALIDATION_REQUIRED } from "../Core/constant/Constant.js";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { AgGridReact } from "ag-grid-react";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30];
  const [userData, setUserData] = useState({
    userId: 0,
    emailId: "",
    password: "",
    role: 0,
    createdDate: "",
    isActive: false,
    userLogo: "",
    technicalStack: "",
    fullName: "",
  });

  const getUsers = () => {
    getData(GET_ALL_USERS).then((result) => {
      const usersWithSerialNumbers = addUserSerialNumbers(result);
      setUserList(usersWithSerialNumbers);
    });
  };

  const addUserSerialNumbers = (users) => {
    return users.map((user, index) => {
      return { ...user, Srno: index + 1 }; // Adding Srno property with index + 1
    });
  };

  const getRoles = () => {
    getData(GET_ALL_ROLES).then((result) => {
      setRolesList(result);
    });
  };

  const resetUserData = () => {
    setUserData({
      userId: 0,
      emailId: "",
      password: "",
      role: 0,
      createdDate: "",
      isActive: false,
      userLogo: "",
      technicalStack: "",
      fullName: "",
    });
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    resetUserData();
  };
  const resetModal = () => {
    resetUserData();
    setIsFormSubmitted(false);
  };
  
  const updateFormValue = (event, key) => {
    setUserData((prevobj) => ({ ...prevobj, [key]: event.target.value }));
  };

  const updateCheckboxValue = (event, key) => {
    setUserData((prevObj) => ({ ...prevObj, [key]: event.target.checked }));
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  const CustomButtonComponent = (props) => {
    return (
      <>
        <Button
          variant="primary"
          className="btn-sm m-1"
          onClick={() => onEdit(props.data)}
        >
          <FaEdit />
        </Button>
        <Button
          variant="danger"
          className="btn-sm"
          onClick={() => onDelete(props.data)}
        >
          <FaTrash />
        </Button>
      </>
    );
  };

  const onEdit = (user) => {
    setUserData(user);
    openModal();
  };

  const onDelete = (user) => {
    deleteData(DELETE_USER_BY_ID, user.userId).then((result) => {
      if (result !== undefined) {
        if (result.result) {
          alert("User deleted successfully");
        } else {
          alert(result.message);
        }
      }
      getUsers();
    });
  };

  const addUser = () => {
    setIsFormSubmitted(true);
    if (
      userData.fullName !== "" &&
      userData.emailId !== "" &&
      userData.createdDate !== "" &&
      userData.password !== "" &&
      userData.technicalStack !== "" &&
      userData.userLogo !== ""
    ) {
      postData(CREATE_USER, userData).then((result) => {
        if (result.result) {
          alert("User created successfully");
          getUsers();
          resetUserData();
          closeModal();
          setIsFormSubmitted(false);
        } else {
          alert(result.message);
        }
      });
    }
  };

  const editUser = () => {
    setIsFormSubmitted(true);
    if (
      userData.fullName !== "" &&
      userData.emailId !== "" &&
      userData.createdDate !== "" &&
      userData.password !== "" &&
      userData.technicalStack !== "" &&
      userData.userLogo !== ""
    ) {
      postData(UPDATE_USER, userData).then((result) => {
        if (result.result) {
          alert("User updated successfully");
          getUsers();
          resetUserData();
          closeModal();
          setIsFormSubmitted(false);
        } else {
          alert(result.message);
        }
      });
    }
  };

  const [colDefs, setColDefs] = useState([
    { headerName: "Sr. No", field: "Srno" }, // Adding Sr. No column
    { headerName: "Full Name", field: "fullName" },
    { headerName: "Email", field: "emailId" },
    { headerName: "Role", field: "roleName" },
    { headerName: "Technical Stack", field: "technicalStack" },
    { headerName: "Is Active", field: "isActive" },
    { headerName: "Action", cellRenderer: CustomButtonComponent },
  ]);

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>User List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="card bg-light my-2 mx-4">
            <div className="card-header bg-light">
              <div className="row mt-3">
                <div className="col-9">
                  <h4>User List</h4>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary" onClick={openModal}>
                    <FaUserPlus className="mr-1" /> Add User
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div
                className="ag-theme-quartz"
                style={{ height: 500, width: "100%" }}
              >
                <AgGridReact
                  rowData={userList}
                  columnDefs={colDefs}
                  pagination={pagination}
                  paginationPageSize={paginationPageSize}
                  paginationPageSizeSelector={paginationPageSizeSelector}
                  domLayout="autoHeight"
                  suppressHorizontalScroll={true}
                  
                />
              </div>
            </div>
          </div>
        </div>

        {/* Add User Modal */}

        <Modal show={modalIsOpen} onHide={closeModal}>
          <Modal.Header closeButton className="bg-light">
            <Modal.Title>
              {userData.userId === 0 ? "Add User" : "Update User"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "fullName");
                      }}
                      value={userData.fullName}
                    />
                    {isFormSubmitted && userData.fullName === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Email:</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "emailId");
                      }}
                      value={userData.emailId}
                    />
                    {isFormSubmitted && userData.emailId === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Password:</label>
                    <input
                      type="text"
                      placeholder="Enter Password"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "password");
                      }}
                      value={userData.password}
                    />
                    {isFormSubmitted && userData.password === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Role:</label>
                    <select
                      className="form-select"
                      value={userData.role}
                      onChange={(event) => updateFormValue(event, "role")}
                    >
                      <option>Select Role</option>
                      {rolesList.map((role, index) => {
                        return (
                          <option key={index} value={role.roleId}>
                            {role.role}
                          </option>
                        );
                      })}
                    </select>
                    {isFormSubmitted && userData.role === 0 && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Create Date:</label>
                    <input
                      type="date"
                      placeholder="Enter Email"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "createdDate");
                      }}
                      value={userData.createdDate.split("T")[0]}
                    />
                    {isFormSubmitted && userData.createdDate === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Technical Stack:</label>
                    <input
                      type="text"
                      placeholder="Enter Technical Stack"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "technicalStack");
                      }}
                      value={userData.technicalStack}
                    />
                    {isFormSubmitted && userData.technicalStack === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label>User Logo:</label>
                    <input
                      type="text"
                      placeholder="Enter User Logo"
                      className="form-control"
                      onChange={(event) => {
                        updateFormValue(event, "userLogo");
                      }}
                      value={userData.userLogo}
                    />
                    {isFormSubmitted && userData.userLogo === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label>Is Active:</label>
                    <br></br>
                    <input
                      type="checkbox"
                      placeholder="Enter Is Active"
                      className=""
                      onChange={(event) => {
                        updateCheckboxValue(event, "isActive");
                      }}
                      checked={userData.isActive}
                    />
                    {isFormSubmitted && userData.isActive === "" && (
                      <div className="text-danger">{VALIDATION_REQUIRED}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {userData.userId === 0 ? (
              <>
                <Button variant="danger" onClick={resetModal}>
                  Reset
                </Button>
                <Button variant="primary" onClick={addUser}>
                  Add
                </Button>
              </>
            ) : (
              <>
                <Button variant="danger" onClick={closeModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={editUser}>
                  Update
                </Button>
              </>
            )}
</Modal.Footer>

        </Modal>
      </div>
    </div>
  );
};

export default User;
