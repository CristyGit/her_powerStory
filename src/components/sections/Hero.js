import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import ReactPlayer from "react-player"
import YoutubeEmbed from "./YoutubeEmbed";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const answers = [
                    ["Darling, you are a", "Queen"],
                    ["Hello", "Beautiful"],
                    ["What doesn't kill you makes you", "Stronger"],
                    ["I feel like a", "Woman"],
                    ["Think like a", "Fighter"],
                    ["She is a", "Leader"],
                    ["Do your thing, be", "Successful"],
                    ["Nobody like you,", "Wiser"],
                  ];
  var random1 = Math.floor((Math.random() * (answers.length)));
  var random2 = Math.floor((Math.random() * (answers.length)));
  const randomTextAnswer1 = answers[random1][0];
  const randomTextAnswer2 = answers[random2][1];

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h2 style={{color: "pink", background: "white"}}>This Website is currently under construction </h2>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              {randomTextAnswer1} <span className="text-color-primary">{randomTextAnswer2}</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" style={{paddingBottom: "20px"}} data-reveal-delay="400">
                <span className="text-color-primary">Her Power Story</span> wishes to empower women to tell their own stories, find themselves, take control, and strive for their goals.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/Login">
                    Let's Go!
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/HerCodingStory/her_powerStory">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <YoutubeEmbed embedId="wM82hE6oimw" />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;