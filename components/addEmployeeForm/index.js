import React from "react";
import { FormContainer } from "./style";
const formFields = [
  {
    label: "Full Name",
    placeholder: "David Bookan",
  },
  {
    label: "Job Title",
    placeholder: "Supervisor",
  },
  {
    label: "Department",
    placeholder: "Customer Service",
  },
  {
    label: "Start Date",
    placeholder: "23/03/2020",
  },
  {
    label: "Status",
    placeholder: "Onboarded",
  },
];
const AddEmployeeForm = ({ close, add }) => {
  return (
    <FormContainer>
      <div className="overall">
        <div className="topTitle">
          <h1>Add Employee Details</h1>
          <button className="closeBtn" onClick={close}>
            X
          </button>
        </div>
        <div className="form">
          {formFields.map((fields, key) => (
            <div className="inputContainer" key={key}>
              <label>{fields.label}</label>
              <input placeholder={fields.placeholder} />
            </div>
          ))}
        </div>
        <button className="addEmployeeBtn" onClick={add}>
          Add New Employees
        </button>
      </div>
    </FormContainer>
  );
};

export default AddEmployeeForm;
