import React from "react";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

function FitApp() {
    const sectionHeader = {
        title: 'Her Power',
        paragraph: 'dgfdgd'
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

export default FitApp;