import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        legalName: '',
        arrestingNames: '',
        address: '',
        phoneNumber: '',
        dob: '',
        pendingCharges: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here
        emailjs.sendForm('service_r2dqyri', 'template_kucmlrw', e.target,{
            publicKey: '7RtmhZ6uhMQT8l8TU',
          }).then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
            },
            function (err) {
              console.log('FAILED...', err);
            },
          );

        // Reset form data
        setFormData({
            legalName: '',
            arrestingNames: '',
            email: '',
            phone: '',
            dob: '',
            pendingCharges: '',
            contactMethod: '',
            additionalInfo: ''
        });
    };
    return (
        <div className='p-5 w-50'>
            {/* refactor for to use bootstrap instead of react-bootstrap   */}
            <h1>Contact</h1>
            <p>email: wipeoutrecordsxp@gmail.com</p>
            <p>Fill out the form below and I will get back to you as soon as possible.</p>
            <p>Or you can call me at 555-555-5555</p>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="legalName"
                    name = "legalName"
                    placeholder="Enter legal name"
                    value={formData.legalName}
                    onChange={handleChange} />
                    <label htmlFor="legalName" className='text-danger'>Legal Name:</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="arrestingNames"
                    name="arrestingNames"
                    placeholder="Enter legal name"
                    value={formData.arrestingNames}
                    onChange={handleChange} />
                    <label htmlFor="arrestingNames" className='text-danger'>Arresting Name:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange} />
                    <label htmlFor="email" className='text-danger'>Email:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input className="form-control"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleChange} />
                    <label htmlFor="phone" className="form-label text-danger">Phone:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input className="form-control"
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="Enter Date of Birth"
                        value={formData.dob}
                        onChange={handleChange} />
                    <label htmlFor="dob" className="form-label text-danger">Date of birth:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input className="form-control"
                        type="text"
                        id="pendingCharges"
                        name="pendingCharges"
                        placeholder="Pending Charges"
                        value={formData.pendingCharges}
                        onChange={handleChange} />
                    <label htmlFor="pendingCharges" className="form-label text-danger">Pending Charges:</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactMethod" className='text-danger text-danger'>Preferred Contact Method:</label>
                    <select className="form-select"
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" rows="3"
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}>
                    </textarea>
                    <label htmlFor="additionalInfo" className='text-danger text-danger'>Anything i will need to know as I do my search?</label>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
