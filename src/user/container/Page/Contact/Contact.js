import React from 'react';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';

function Contact(props) {
  let userSchema = object({
    name: string().required(),
    email: string().required().email(),
    message: string().required().min(5),
    subject: string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
    },
    validationSchema: userSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const { handleChange, handleSubmit, handleBlur, values, touched, errors } = formik
  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">Home</a>
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Contact Start */}
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              <div id="success" />
              <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input type="text"
                    className="form-control"
                    name='name'
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p className="help-block text-danger" />
                </div>
                <span style={{ color: 'red', marginBottom: '5px' }} >
                    {errors.name && touched.name && errors.name}
                  </span>
                <div className="control-group">
                  <input type="email"
                    className="form-control"
                    name='email'
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className="help-block text-danger" />
                </div>
                <span style={{ color: 'red', marginBottom: '5px' }} >
                    {errors.email && touched.email && errors.email}
                  </span>
                <div className="control-group">
                  <input type="text"
                    className="form-control"
                    name='subject'
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />
                  <p className="help-block text-danger"/>
                </div>
                <span style={{ color: 'red', marginBottom: '5px' }} >
                    {errors.subject && touched.subject && errors.subject}
                  </span>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    name='message'
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  <p className="help-block text-danger" />
                </div>
                <span style={{ color: 'red', marginBottom: '5px' }} >
                    {errors.message && touched.message && errors.message}
                  </span>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe style={{ width: '100%', height: 250 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
              <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>

  );
}

export default Contact;