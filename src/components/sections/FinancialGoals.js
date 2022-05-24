import React from "react";
import SectionHeader from "./partials/SectionHeader";

function FinancialGoals() {
    const sectionHeader = {
        title: 'Financial Goals',
        paragraph: 'One of my biggest goal is to achieve FIRE (Financial Independence Retire Early). These consist of 10 steps and at the current moment I am at step 5.'
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

export default FinancialGoals;