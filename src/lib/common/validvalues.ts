export interface IValidValues {
  value: string;
  label: string;
}

export const NOTIFICATION_STATUS: IValidValues[] = [
  { value: "success", label: "Success" },
  { value: "failure", label: "Failure" },
];

export const NOTIFICATION_MEDIUM: IValidValues[] = [
  { value: "sms", label: "Sms" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "Whatsapp" },
];
export const AUDIT_TYPE: IValidValues[] = [
  { value: "student", label: "Student" },
  { value: "batch", label: "Batch" },
  { value: "config", label: "Configuration" },
  { value: "usermgmt", label: "User Management" },
  { value: "rolemgmt", label: "Role Management" },
  { value: "quesbank", label: "Question Bank" },
  { value: "quespaper", label: "Question Paper" },
];
export const ERROR_LOG_LEVEL: IValidValues[] = [
  { value: "warn", label: "Warn" },
  { value: "error", label: "Error" },
];
export const QUESTION_TYPE: IValidValues[] = [
  { value: "MCQ1", label: "Single Option" },
  { value: "MCQM", label: "Multiple Options" },
];
export const QUESTION_COMPLEXITY: IValidValues[] = [
  { value: "EASY", label: "Easy" },
  { value: "MEDIUM", label: "Medium" },
  { value: "TOUGH", label: "Tough" },
];
// export const USER_STATUS: IValidValues[] = [
//   { value: true, label: "Active" },
//   { value: false, label: "InActive" },
// ];

export const PROFILE_IMAGE = {
  size: 1048576, //in bytes//
  format: ["jpg", "jpeg", "png"],
};
export const getLabelByValue = (validValue: IValidValues[], value: string) => {
  const item = validValue.find(
    (item) => item.value.toUpperCase() === value?.toUpperCase()
  );
  return item ? item.label : "";
};
