import React from "react";
import { FcBinoculars } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import Button from "../elements/Button";
import SectionHeader from "./partials/SectionHeader";

function Travel() {
    const sectionHeader = {
        title: 'Passion for Travel',
        paragraph: 'I have a passion for traveling the world and I wanted to share that with others. I have two accounts ' +
            'that cover the topic. One is HJS which talks mostly about locations and unique experiences. Then I have HMS which talks about ' +
            'travel hacking and budgeting for traveling.'
    };

  return (
      <div>
        <div className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
          <div style={{padding: "48px", float: "right", paddingTop: "200px", paddingRight: "150px", display: "inline-grid"}}>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="" >
                  Adventure Seeker <FcBinoculars />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="">
                  Travel Money Hacks <FcSalesPerformance />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="">
                  Travel App <FcPhoneAndroid />
              </Button>
          </div>
        </div>
        <div className="container center-content" style={{marginTop: "50px", display: "flex"}}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-top" style={{paddingTop:"30px"}}/>
            <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                            <a href="https://www.instagram.com/her_journeystory/" target="_blank"><img src="images/hts.jpg" alt="@her_journeystory" style={{borderRadius: "50%", width: "100px"}} /></a>
                        </div>
                    </div>
                    <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">
                            Her Journey Story
                        </h4>
                        <p className="m-0 text-sm">
                            HJS features beautiful places and unique experiences for those people that love to travel and seek adventure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                            <a href="https://www.instagram.com/her_moneystory/" target="_blank"><img src="images/hms.jpg" alt="@her_moneystory" style={{borderRadius: "50%", width: "100px"}} /></a>
                        </div>
                    </div>
                    <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">
                            Her Money Story
                        </h4>
                        <p className="m-0 text-sm">
                            HMS covers financials topics such as travel budgeting, travel hacking, and paid travel opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
  );
}

export default Travel;