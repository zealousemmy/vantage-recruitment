import React from "react";
import { HiTemplate } from "react-icons/hi";
import { TemplatesContainer } from "./style";
const templatesArray = [
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
  {
    headingText: "Terms of Service",
    templateNo: "14 Templates",
  },
];
const TemplateComp = () => {
  return (
    <TemplatesContainer>
      <h2>template</h2>
      <p>Choose and customise templates that best suit your needs at a go</p>
      <div className="flex">
        {templatesArray.map((templates, key) => (
          <div className="template" key={key}>
            <HiTemplate className="icon" />
            <h2>{templates.headingText}</h2>
            <p>{templates.templateNo}</p>
          </div>
        ))}
      </div>
    </TemplatesContainer>
  );
};

export default TemplateComp;
