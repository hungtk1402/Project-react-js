import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            setIsSubmitted(true);
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div>
            {isSubmitted ? (
                <div className="alert alert-success" role="alert">
                    Message has been sent successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                className="form-control contactInput"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark btn-send">
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
