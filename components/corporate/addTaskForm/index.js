import React from "react";
import CustomForm from "../../customForm";
const taskFields = [
  {
    label: "Task tittle",
    placeholder: "Client Review",
  },
  {
    label: "Description",
    placeholder:
      "You are Required to review the accounts all newly onboarded clients, find attached documents for deliverables  ",
  },
  {
    label: "Assigned to",
    placeholder: "David Okeke, Fidel Odiachi, Naza Ify.",
  },
  {
    label: "Deadline",
    placeholder: "03/12/2022",
  },
  {
    label: "Priority",
    placeholder: "High",
  },
  {
    label: "Status",
    placeholder: "Assigned",
  },
];
const AddTaskForm = ({ close }) => {
  return (
    <CustomForm
      formTitle={"Add New Task"}
      formFields={taskFields}
      close={close}
      btnText={"Add new Task"}
    />
  );
};

export default AddTaskForm;
