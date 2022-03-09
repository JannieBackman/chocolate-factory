import React, {CSSProperties} from "react";
import {Form, useFormik} from "formik";
import * as Yup from "yup";
import InputField from "./InputFields";
import {Link} from "react-router-dom";
import ShippingOptions from "./ShippingOptions";
import OrderInformation from "./OrderInformation";
import { Button } from "react-bootstrap";


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
        .required('Missing name'),
    lastName: Yup.string()
        .min(2, 'To short')
        .required('Missing last name'),
    address: Yup.string()
        .min(2, 'To Short')
        .required('Missing address'),
    city: Yup.string()
        .min(2, 'To Short')
        .required('Missing city'),
    zip: Yup.number()
        .min(2, 'To Short')
        .required('Missing zip code'),
    phoneNumber: Yup.number()
        .min(2, 'To Short')
        .required('Missing phone number'),
    email: Yup.string()
        .min(2, 'To Short')
        .required('Missing email'),
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
        <div style={basketContainer}>
            <OrderInformation/>

            <p style={cartStyle}>Your contact information</p>

            <form onSubmit={handleSubmit}>
                <label className="inputLabel">Name</label>
                <InputField
                    className="contactInputField"
                    label="firstname"
                    name="firstName"
                    onChange={handleChange}
                    id="firstName"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.firstName && errors.firstName}
                />
                <label className="inputLabel">Last name</label>
                <InputField
                    className="contactInputField"
                    label="lastname"
                    name="lastName"
                    onChange={handleChange}
                    id="lastName"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.lastName && errors.lastName}
                />
                <label className="inputLabel">Address</label>
                <InputField
                    className="contactInputField"
                    label="address"
                    name="address"
                    onChange={handleChange}
                    id="address"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.address && errors.address}
                />
                <label className="inputLabel">City</label>
                <InputField
                    className="contactInputField"
                    label="city"
                    name="city"
                    onChange={handleChange}
                    id="city"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.city && errors.city}
                />
                <label className="inputLabel">Zip code</label>
                <InputField
                    className="contactInputField"
                    label="zip"
                    name="zip"
                    onChange={handleChange}
                    id="zip"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.zip && errors.zip}
                />
                <label className="inputLabel">Phone number</label>
                <InputField
                    className="contactInputField"
                    label="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    id="phoneNumber"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.phoneNumber && errors.phoneNumber}
                />
                <label className="inputLabel">Email</label>
                <InputField
                    className="contactInputField"
                    label="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                />
                <Button variant="dark" className="saveBtn" type="submit">Save</Button>

            </form>
            <p style={cartStyle}>Choice payment</p>
            <p style={cartStyle}>Shipping options</p>
            <ShippingOptions/>
            <Link to="/CheckOut">
            <button style={basketBtn}>Checkout</button>
            </Link>
        </div>
    )
};


const cartStyle: CSSProperties = {
    fontSize: "2rem",
    marginLeft: "2rem"

}

const basketBtn: CSSProperties = {
    height: "2rem",
    width: "6rem",
    margin: "0 0 1rem 2rem"
}

const basketContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

}







