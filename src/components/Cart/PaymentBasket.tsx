import React, {CSSProperties} from "react";
import {Form, useFormik} from "formik";
import * as Yup from "yup";
import InputField from "./InputFields";
import { Link } from "react-router-dom";

type PostSchemaType = Record<keyof Form, Yup.AnySchema>

interface Form {
    firstName: string
    lastName: string
    address: string
    city: string
    zip: string
    phoneNumber: string
    email: string
}

interface Props {
    defaultForm?: Form;
    onSubmit: (form: Form) => void;
}

const ContactForm = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'To Short')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'To short')
        .required('Required'),
    address: Yup.string()
        .min(2, 'To Short')
        .required('Required'),
    city: Yup.string()
        .min(2, 'To Short')
        .required('Required'),
    zip: Yup.number()
        .min(2, 'To Short')
        .required('Required'),
    phoneNumber: Yup.number()
        .min(2, 'To Short')
        .required('Required'),
    email: Yup.string()
        .min(2, 'To Short')
        .required('Required'),
});

export default function PaymentBasket(props: Props) {
    const {errors, touched, handleSubmit, handleChange, handleBlur} =
        useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                zip: '',
                phoneNumber: '',
                email: '',
            },
            validationSchema: ContactForm,
            onSubmit: (form, {resetForm}) => {
                props.onSubmit(form);
                resetForm();
            }
            })

    return (
        <div>

                <p style={cartStyle}>Your contact information</p>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                className="contactInputField"
                                label="name"
                                placeholder="Name"
                                name="name"
                                onChange={handleChange}
                                id="firstName"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.firstName && errors.firstName}
                            />
                            <InputField
                                className="contactInputField"
                                label="lastname"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                id="lastName"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.lastName && errors.lastName}
                            />
                            <InputField
                                className="contactInputField"
                                label="address"
                                placeholder="Address"
                                name="address"
                                onChange={handleChange}
                                id="address"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.address && errors.address}
                            />
                            <InputField
                                className="contactInputField"
                                label="city"
                                placeholder="City"
                                name="city"
                                onChange={handleChange}
                                id="city"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.city && errors.city}
                            />
                            <InputField
                                className="contactInputField"
                                label="zip"
                                placeholder="Zip code"
                                name="zip"
                                onChange={handleChange}
                                id="zip"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.zip && errors.zip}
                            />
                            <InputField
                                className="contactInputField"
                                label="phoneNumber"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                onChange={handleChange}
                                id="phoneNumber"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.phoneNumber && errors.phoneNumber}
                            />
                            <InputField
                                className="contactInputField"
                                label="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                id="email"
                                type="text"
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                            />
                            <button className="saveBtn" type="submit">Save</button>

                        </form>


                    <p style={cartStyle}>Choice payment</p>
                    <p style={cartStyle}>Choice shipping</p>

        </div>
    )
}

    const cartStyle: CSSProperties = {
        fontSize: "2rem",
        marginLeft: "2rem"

    }