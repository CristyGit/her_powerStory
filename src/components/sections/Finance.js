import React from "react";
import { FcBinoculars } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import Button from "../elements/Button";
import SectionHeader from "./partials/SectionHeader";

function Finance() {
    const sectionHeader = {
        title: 'Personal Finances',
        paragraph: 'One of the biggest changes I made in my life to make me feel more confident was to take control of my financials.' +
            'I used to not care about money at all and live paycheck to paycheck not knowing how to invest or to put my money to work for me. ' +
            'I learned so much from online resources and books that I gave me the confident to become more independent.'
    };

  return (
      <div>
        <div className="bgimg-2 w3-display-container w3-grayscale-min" id="home">
          <div style={{padding: "48px", float: "left", paddingTop: "200px", paddingLeft: "150px", display: "inline-grid"}}>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="">
                  Finance Literacy <FcSalesPerformance />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="" >
                  Side Hustles <FcBinoculars />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="" >
                  Investing <FcBullish />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="dark" style={{margin: "10px"}} wideMobile href="">
                  Finance App <FcPhoneAndroid />
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
                            Her Money Story
                        </h4>
                        <p className="m-0 text-sm">
                            HMS covers financials topics such as budgeting, investing, side hustles and other helpful resources to help you take control over your money.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
  );
}

export default Finance;