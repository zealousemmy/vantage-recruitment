import React from "react";
import { FormContainer } from "./style";
import { GrAdd } from "react-icons/gr";
const CustomForm = ({ formTitle, formFields, close, add, btnText }) => {
  return (
    <FormContainer>
      <div className="overall">
        <div className="topTitle">
          <h1>{formTitle}</h1>
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
        <div className="attach">
          <input type="file" id="file" className="fileSelect" />
          <label for="file">
            <GrAdd />
          </label>
        </div>
        <button className="addEmployeeBtn" onClick={add}>
          {btnText}
        </button>
      </div>
    </FormContainer>
  );
};

export default CustomForm;
