import React, { Fragment } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import { Button, Form, FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';

const FormComponent = (props) => {

        return (
            <Fragment>
                <MyEnhancedForm user={{ email: '', firstName: '', lastName: '', password: '' }} />
            </Fragment>
        )
}

export default FormComponent


const MyForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
    } = props;
    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup>
                <Label size='sm' mr="auto" className="text-info" for="firstName">First Name</Label>
                <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    error={touched.firstName && errors.firstName}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={errors.firstName && touched.firstName}
                    valid={!errors.firstName && touched.firstName}
                />
                <div className='feedbackWrapper'>
                    <FormFeedback valid size="sm" >Looks good!</FormFeedback>
                    <FormFeedback size="sm" className='text-danger'>{errors.firstName}</FormFeedback>
                </div>
                {/* {!errors.firstName && touched.firstName && <FormFeedback valid size="sm" >Looks good!</FormFeedback>} */}
                {/* {errors.firstName && touched.firstName && <FormFeedback size="sm" className='text-danger'>{errors.firstName}</FormFeedback>} */}
            </FormGroup>
            <FormGroup>
                <Label size="sm" className="text-info" for="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    error={touched.lastName && errors.lastName}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={errors.lastName && touched.lastName}
                    valid={!errors.lastName && touched.lastName}
                />
                <div className='feedbackWrapper'>
                    <FormFeedback valid size="sm" >Looks good!</FormFeedback>
                    <FormFeedback size="sm" className='text-danger'>{errors.lastName}</FormFeedback>
                </div>
                {/* {errors.lastName && touched.lastName && <FormFeedback size="sm" className='text-danger'>{errors.lastName}</FormFeedback>}
                {!errors.lastName && touched.lastName && <FormFeedback valid size="sm" >Looks good!</FormFeedback>} */}
            </FormGroup>
            <FormGroup>
                <Label size="sm" className="text-info" for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    error={touched.email && errors.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={errors.email && touched.email ? true : false}
                    valid={!errors.email && touched.email}
                />
                 <div className='feedbackWrapper'>
                    <FormFeedback valid size="sm" >Looks good!</FormFeedback>
                    <FormFeedback size="sm" className='text-danger'>{errors.email}</FormFeedback>
                </div>
                {/* {!errors.email && touched.email && <FormFeedback valid size="sm" >Looks good!</FormFeedback>}
                {errors.email && touched.email && <FormFeedback size="sm" className='text-danger'>{errors.email}</FormFeedback>} */}
            </FormGroup>
            <FormGroup>
                <Label size="sm" className="text-info" for="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    error={touched.password && errors.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={errors.password && touched.password}
                    valid={!errors.password && touched.password}
                />
                 <div className='feedbackWrapper'>
                    <FormFeedback valid size="sm" >Looks good!</FormFeedback>
                    <FormFeedback size="sm" className='text-danger'>{errors.password}</FormFeedback>
                </div>
                {/* {!errors.password && touched.password && <FormFeedback valid size="sm" >Looks good!</FormFeedback>}
                {errors.password && touched.password && <FormFeedback size="sm" className='text-danger'>{errors.password}</FormFeedback>} */}
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col sm='4'>
                    <Button block
                        color='secondary'
                        type="button"
                        onClick={handleReset}
                        // disabled={!dirty || isSubmitting}
                        disabled={!dirty || isSubmitting ? true : false}
                        >Reset</Button>
                    </Col>
                    <Col sm='4'>
                        <Button block color="primary" type="submit" 
                        disabled={!errors.firstName && touched.firstName && 
                            !errors.lastName && touched.lastName && 
                            !errors.email && touched.email && 
                            !errors.password && touched.password ? false : true}
                        >
                            Submit</Button>
                    </Col>
                   
                </Row> 
            </FormGroup>
        </Form>

    );
};

const MyEnhancedForm = withFormik({
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Name must be longer than 2")
            .max(12, "Name must be shorter than 12")
            .required('First name is required.'),
        lastName: Yup.string()
            .min(2, "Name must be longer than 2")
            .required('Last name is required.'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        password: Yup.string()
            .min(6, "Password bust be longer than 6")
            .required("Please, enter your password")
    }),

    mapPropsToValues: ({ user }) => ({
        ...user,
    }),
    handleSubmit: (payload, { setSubmitting, submitCount }) => {
        console.log(payload);
        console.log(submitCount)
        setSubmitting(false);
    },
    displayName: 'MyCustomForm',
})(MyForm);
