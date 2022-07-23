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
const FeaturesTilesSample = ({
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
    title: 'Travel Hacks',
    paragraph: 'Below there is a list of all the apps that HPS offers to build confidence, self-worth, and work on your mindset.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container has-top-divider" style={{paddingTop: "50px"}}>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            
          <div className="tiles-item reveal-from-bottom" style={{backgroundColor: "#d7415b"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/knowher.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Travel Hacking
                    </h4>
                  <p className="m-0 text-sm">
                    KnowHer allows you to get to know yourself better by asking important questions. Define yourself and learn what do you like to do for self love.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor: "pink"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/familyTree.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Paid Opportunities
                    </h4>
                  <p className="m-0 text-sm">
                    Family tree creator app allows you to revisit your family history by allowing family members to add videos, notes, and pictures about their life stories.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor: "#d7415b"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/goaltracker.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Travel Store
                    </h4>
                  <p className="m-0 text-sm">
                    Goal planner and tracker that helps you keep the motivation going. Setting goals help trigger new behaviors like keeping focus ans momentum in life.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesSample.propTypes = propTypes;
FeaturesTilesSample.defaultProps = defaultProps;

export default FeaturesTilesSample;