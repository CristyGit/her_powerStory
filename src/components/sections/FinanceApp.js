import React from "react";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

function FinanceApp() {
    const sectionHeader = {
        title: 'HerMoney',
        paragraph: 'This app allows you to keep your financials in check by providing sheets, information and resources.'
    };

    return (
        <div className="container center-content has-top-divider reveal-from-right" style={{marginTop: "100px"}}>
            <h2 style={{color: "pink", background: "white", display: "inline-block"}}>This App is currently under construction </h2>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Image
                src={require('./../../assets/images/ia.png')}
                alt="Features split 01"
                width={528}
                height={396} />
        </div>
    );
}

export default FinanceApp;