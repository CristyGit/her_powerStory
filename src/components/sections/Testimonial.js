import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Women Quotes',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  }
  //
  // const [quotes, setQuotes] = useState([]);
  // const [loading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   setQuotes([])
  //   //setIsLoading(false)
  //   fetch('https://type.fit/api/quotes')
  //       .then(function (response) {
  //         if (response.ok)
  //           return response.json()
  //         throw response
  //       })
  //       .then((data) => {
  //         setQuotes(data)
  //         //setIsLoading(true)
  //       })
  //       .catch((error) => {
  //         console.log(error.message)
  //         setError(error)
  //       })
  //       .finally(() => {
  //         //setIsLoading(true)
  //       });
  // }, []);
  //
  // if (error) return "Error!"

  var quotes = [
      ["Amanda Gorman","Hear me as a woman./Have me as your sister./On purpled battlefield breaking day,/So I might say our victory is just beginning,/See me as change,/Say I am movement,/That I am the year,/and I am the era/of the women."],
      ["Malala Yousafzai","I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back."],
      ["Megan Thee Stallion","Wouldn’t it be nice if Black girls weren’t inundated with negative, sexist comments about Black women? If they were told instead of the many important things that we’ve achieved? ... Black women, too often in the shadows of such accomplishments, actually powered the civil rights movement."]
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      {quotes[0][1]}
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">{quotes[0][0]}</span>
                  </div>
                </div>
              </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    {quotes[1][1]}
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">{quotes[1][0]}</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    {quotes[2][1]}
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">{quotes[2][0]}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;