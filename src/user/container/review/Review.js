import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import axios from "axios";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch, useSelector } from "react-redux";
import { addreview } from "../../../reduct/action/review.action";



function Review(props) {
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);


    let ReviewSchema = object({
        name: string().required(),
        email: string().email().required(),
        review: string().required(),
        rating: number().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            review: '',
            rating: ''
        },
        validationSchema: ReviewSchema,
        onSubmit: values => {
            const reviewDate = new Date();
            dispatch(addreview({ ...values, productId: id, reviewDateing: reviewDate }));
            formik.resetForm();
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = formik



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="message">Your Review *</label>
                    <Stack spacing={1}>
                        <Rating
                            defaultValue={0}
                            precision={0.5}
                            id="rating"
                            name="rating"
                            value={values.rating}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                errors.rating && touched.rating ? true : false
                            }
                            helperText={
                                errors.rating && touched.rating
                                    ? errors.rating
                                    : ""
                            }
                        />
                    </Stack>
                </div>
                <div className="form-group ">
                    <label htmlFor="name">Your Name *</label>
                    <TextField
                        type="text"
                        id="name"
                        name="name"
                        className="form-control border-0 me-4"
                        placeholder="Your Name *"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name && touched.name ? true : false}
                        helperText={
                            errors.name && touched.name ? errors.name : ""
                        }
                    />
                </div>
                <div className="form-group mt-5">
                    <label htmlFor="email">Your Email *</label>
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        className="form-control border-0 me-4"
                        placeholder="Yur email *"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email && touched.email ? true : false}
                        helperText={
                            errors.email && touched.email ? errors.email : ""
                        }
                    />
                </div>
                <div className="form-group mt-5">
                    <label htmlFor="email">Your review *</label>
                    <TextField
                        type="text"
                        id="review"
                        name="review"
                        className="form-control border-0"
                        cols={30}
                        rows={8}
                        placeholder="Your Review *"
                        spellCheck="false"
                        defaultValue={""}
                        value={values.review}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.review && touched.review ? true : false}
                        helperText={
                            errors.review && touched.review ? errors.review : ""
                        }
                    />
                </div>
                <div className="form-group mb-0 mt-5 ">
                    <input type="submit" defaultValue="Leave Your Review" className="btn btn-primary px-3" />
                </div>
            </form>

        </>
    );
}

export default Review;