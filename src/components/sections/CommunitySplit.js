import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const CommunitySplit = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                       }) => {

  const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );

  const innerClasses = classNames(
      'features-tiles-inner section-inner pt-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
      'tiles-wrap center-content',
      pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Connect with members',
    paragraph: 'Below there is a list of all the community channels we have to connect with other powerful women.'
  };

  return (
      <section
          {...props}
          className={outerClasses}
      >
        <div className="container" style={{marginTop: "100px"}}>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <a href="https://www.facebook.com/groups/934693543870816/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={require('./../../assets/images/facebook.png')}
                            alt="Features tile icon 03"
                            width={200}
                            height={200} />
                      </a>
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Facebook
                    </h4>
                  </div>
                </div>
              </div>

              {/*<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">*/}
              {/*  <div className="tiles-item-inner">*/}
              {/*    <div className="features-tiles-item-header">*/}
              {/*      <div className="features-tiles-item-image mb-16">*/}
              {/*        <Image*/}
              {/*            src={require('./../../assets/images/youtube.png')}*/}
              {/*            alt="Features tile icon 01"*/}
              {/*            width={200}*/}
              {/*            height={200} />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="features-tiles-item-content">*/}
              {/*      <h4 className="mt-0 mb-8">*/}
              {/*        Youtube*/}
              {/*      </h4>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <a href="https://discord.gg/dCM2zaWc" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={require('./../../assets/images/discord.png')}
                            alt="Features tile icon 02"
                            width={200}
                            height={200} />
                      </a>
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Discord
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
}

CommunitySplit.propTypes = propTypes;
CommunitySplit.defaultProps = defaultProps;

export default CommunitySplit;