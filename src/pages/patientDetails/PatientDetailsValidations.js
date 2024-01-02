import * as Yup from "yup";

export const PatientDetailsValidations = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  dateOfBirth: Yup.date().required("Date Of Birth is required"),
  gender:Yup.string().required("Gender is required"),
});
