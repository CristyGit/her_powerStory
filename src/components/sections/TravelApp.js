import React from "react";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

function TravelApp() {
    const sectionHeader = {
        title: 'The Journey',
        paragraph: 'This app allows travelers to keep track of their traveling and experiences. It also helps you plan for future travels.'
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

export default TravelApp;