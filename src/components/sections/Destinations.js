import React, { useState }  from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import SectionHeader from "./partials/SectionHeader";

function Destinations() {
    const [content, setContent] = useState("");
    const sectionHeader = {
        title: 'Destination Goals',
        paragraph: 'These are the countries that I have being. My goal is to get to 30 countries (~15% of the world) before the age of 30. Right now I only have 3% (8 countries)'
    };

    return (
        <div className="container center-content has-top-divider reveal-from-left" style={{marginTop: "100px"}}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
            <div className="progress-bg">
                <div className="progress-bar">
                    <h3 className="Visited">3%&nbsp; </h3>
                </div>
                <h3 className="goal">Current Goal: 15%</h3>
            </div>
        </div>
    );
}

export default Destinations;