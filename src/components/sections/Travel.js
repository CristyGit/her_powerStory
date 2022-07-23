import React from "react";
import { FcBinoculars } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import Button from "../elements/Button";
import SectionHeader from "./partials/SectionHeader";

function Travel() {

  return (
      <div>
        <div className="bgimg-1 w3-display-container" id="home">
          <div style={{padding: "48px", float: "right", paddingTop: "200px", paddingRight: "150px", display: "inline-grid"}}>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="" >
                  Adventure Seeker <FcBinoculars />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="" >
                  Ultimate Planner <FcPlanner />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="" >
                  HerWorld Map <FcGlobe />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="">
                  Travel Hacks <FcSalesPerformance />
              </Button>
              <Button className="reveal-from-bottom" tag="a" color="white" style={{margin: "10px"}} wideMobile href="">
                  Resources <FcPhoneAndroid />
              </Button>
          </div>
        </div>
      </div>
  );
}

export default Travel;