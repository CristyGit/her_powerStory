import React from "react";

function ContactHer() {
    return (
        <div className="container-contact">
            <div className="row header-center">
                <h1 className="text-color-primary">Contact Us</h1>
            </div>
            <div className="row header-center">
                <h4>We'd love to hear from you!</h4>
            </div>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required />
                        <label>Name</label> 
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input wide">
                        <input type="text" required />
                        <label>Email</label> 
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="button button-primary button-wide-mobile button-sm">Send Message</div>
                </div>
            </div>
        </div>
    );
}

export default ContactHer;