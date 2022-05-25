import React from "react";
import SectionHeader from "./partials/SectionHeader";

function FitnessGoals() {
    const sectionHeader = {
        title: 'Fitness Goals',
        paragraph: 'Osdfdsfsdf'
    };

    return (
        <div className="container center-content has-top-divider reveal-from-left" style={{marginTop: "100px"}}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className="progress-bg">
                <div className="progress-bar">
                    <h3 className="Reached">5&nbsp; </h3>
                </div>
                <h3 className="goal">Current Goal: 10</h3>
            </div>
        </div>
    );
}

export default FitnessGoals;