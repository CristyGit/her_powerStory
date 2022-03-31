import React, { useRef }  from "react";
import emailjs from 'emailjs-com';

const ContactHer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            form.current,
            process.env.REACT_APP_USER_ID)
            .then(
            (result) => {
                console.log(result.text);
                alert("SUCCESS!");
            },
            (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            }
            );
    };

    return (
        <div className="container">
            <form className="container-contact" ref={form} onSubmit={sendEmail} id={form}>
                <div className="row header-center">
                    <h1 className="text-color-primary">Contact Us</h1>
                </div>
                <div className="row header-center">
                    <h4>We'd love to hear from you!</h4>
                </div>
                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input id="name" type="name" name="name" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input id="email" type="email" name="email" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea id="message" name="message" required ></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <button className="button button-primary button-wide-mobile button-sm" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactHer;