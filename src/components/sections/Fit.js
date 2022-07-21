import React from "react";
import { FcBinoculars } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import Button from "../elements/Button";
import SectionHeader from "./partials/SectionHeader";

function Fit() {
    const sectionHeader = {
        title: 'Health is Life',
        paragraph: 'Working out dgdfgfg'
    };

  return (
      <div>
        <div className="bgimg-3 w3-display-container w3-grayscale-min" id="home">
          <div style={{padding: "48px", float: "right", paddingTop: "200px", paddingRight: "150px", display: "inline-grid"}}>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="" >
                  Working Out Routine <FcBinoculars />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="">
                  Pilates <FcSalesPerformance />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="" >
                  Resources <FcBinoculars />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="">
                  Fitness App <FcPhoneAndroid />
              </Button>
          </div>
        </div>
        <div className="container center-content" style={{marginTop: "50px", display: "flex"}}>
          <SectionHeader data={sectionHeader} className="center-content reveal-from-top" style={{paddingTop:"50px"}}/>

          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                          <a href="https://www.instagram.com/her_moneystory/" target="_blank" rel="noopener noreferrer"><img src="images/hms.jpg" alt="@her_moneystory" style={{borderRadius: "50%", width: "100px"}} /></a>
                      </div>
                  </div>
                  <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                          Her Fit Story
                      </h4>
                      <p className="m-0 text-sm">
                          HFS covers financials topics such as budgeting, investing, side hustles and other helpful resources to help you take control over your money.</p>
                  </div>
              </div>
          </div>
      </div>

      </div>
  );
}

export default Fit;