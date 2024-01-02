import React from "react";
import { Formik } from "formik";
import "./PatientDetails.css";
import { PatientDetailsValidations } from "./PatientDetailsValidations";

const PatientDetails = () => {
  const handleSubmit = (values) => {
    alert("Data Saved Successfully");
    console.log(values);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8 mb-4 mx-auto">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Patient Details</h5>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  dateOfBirth: "",
                  gender: "",
                  bloodGroup: "",
                  address: "",
                  phone: "",
                  patientHeight: "",
                  patientWeight: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={PatientDetailsValidations}
              >
                {(props) => {
                  const {
                    values,
                    isSubmitting,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    handleSubmit,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              className={
                                errors.firstName && touched.firstName
                                  ? "input-error form-control"
                                  : "form-control"
                              }
                            />
                            <label className="form-label" htmlFor="firstName">
                              First name<span className="red-asterisk">*</span>
                            </label>
                          </div>
                          {errors.firstName && touched.firstName && (
                            <div className="input-feedback">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              className={
                                errors.lastName && touched.lastName
                                  ? "input-error form-control"
                                  : "form-control"
                              }
                            />
                            <label className="form-label" htmlFor="lastName">
                              Last name<span className="red-asterisk">*</span>
                            </label>
                            {errors.lastName && touched.lastName && (
                              <div className="input-feedback">
                                {errors.lastName}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className={
                            errors.email && touched.email
                              ? "input-error form-control"
                              : "form-control"
                          }
                        />
                        <label className="form-label" htmlFor="email">
                          Email<span className="red-asterisk">*</span>
                        </label>
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </div>

                      {/* <!-- Birth Date input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={values.dateOfBirth}
                          onChange={handleChange}
                          className={
                            errors.dateOfBirth && touched.dateOfBirth
                              ? "input-error form-control"
                              : "form-control"
                          }
                        />
                        <label className="form-label" htmlFor="dateOfBirth">
                          Date of Birth<span className="red-asterisk">*</span>
                        </label>
                        {errors.dateOfBirth && touched.dateOfBirth && (
                          <div className="input-feedback">
                            {errors.dateOfBirth}
                          </div>
                        )}
                      </div>

                      {/* <!-- Phone Number input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="phone">
                          Phone
                        </label>
                      </div>
                      {/* <!-- Gender input --> */}
                      <div className="form-outline mb-4">
                        <select
                          type="text"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          className={
                            errors.gender && touched.gender
                              ? "input-error form-control"
                              : "form-control"
                          }
                        >
                          <option value="">---Select---</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <label className="form-label" htmlFor="gender">
                          Gender <span className="red-asterisk">*</span>
                        </label>
                        {errors.gender && touched.gender && (
                          <div className="input-feedback">{errors.gender}</div>
                        )}
                      </div>

                      {/* <--Blood Group input --> */}
                      <div className="form-outline mb-4">
                        <select
                          type="text"
                          name="bloodGroup"
                          value={values.bloodGroup}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">---Select---</option>
                          <option value="A+">A+</option>
                          <option value="B+">B+</option>
                          <option value="A-">A-</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="B+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                        <label className="form-label" htmlFor="gender">
                          Blood Group
                        </label>
                      </div>

                      {/* <!-- Address input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="address">
                          Address
                        </label>
                      </div>

                      {/* <!-- Patient Weight input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          name="patientWeight"
                          value={values.patientWeight}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="patientWeight">
                          Patient Weight
                        </label>
                      </div>

                      {/* <!-- Patient Height input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          name="patientHeight"
                          value={values.patientHeight}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="patientHeight">
                          Patient Height
                        </label>
                      </div>
                      <div>
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
