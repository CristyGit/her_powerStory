import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const url = `https://herpowerstory.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
    }

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const CustomForm = ({
    status, 
    message, 
    onValidated, 
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props }) => {
        let email;
        const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

        const outerClasses = classNames(
            'cta section center-content-mobile reveal-from-bottom',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
            );
        
        const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split'
        );
  
        return (
            <div>
                <section
                    {...props}
                    className={outerClasses}
                    >
                    <div className="container">
                        <div
                        className={innerClasses}
                        >
                        <div className="cta-slogan">
                            <h3 className="m-0">
                            Want to stay up-to-date with HPS updates?
                            </h3>
                        </div>
                        {status === "sending" && <h6 style={{ color: "white", margin: "0px 10px 10px 0px"}}>sending...</h6>}
                        {status === "error" && (
                        <h6
                            style={{ color: "#9CA9B3", margin: "0px 10px 10px 0px" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                        )}
                        {status === "success" && (
                        <h6
                            style={{ color: "black", margin: "0px 10px 10px 0px" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                        )}
                        <div className="cta-action">
                            <input className="cta form-input" id="newsletter" type="email" ref={node => (email = node)} labelHidden hasIcon="right" placeholder="Your best email"/>
                            <button className="button button-primary button-wide-mobile button-sm" style={{float: "right", margin: "10px 0px 10px 10px"}} onClick={submit}>
                                Submit
                            </button>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
};

const MailchimpForm = props => {

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    // <div>
                    //     <SimpleForm onSubmitted={formData => subscribe(formData)} />
                    //     {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    //     {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    //     {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    // </div>
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

CustomForm.propTypes = propTypes;
CustomForm.defaultProps = defaultProps;

export default MailchimpForm;
