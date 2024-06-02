import React, { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { AnimationOnScroll } from "react-animation-on-scroll"

import CounterImage from "../../assets/images/counter_image.png"
import "./Counter.css"

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  return (
    <div className="text-light counter-container">
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <div className="row counter-wrapper">
              <div className="col">
                <div className="counter-1 counter">
                  <CountUp start={viewPortEntered ? null : 0} end={100}>
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true)
                          }
                        }}
                        delayedCall
                      >
                        <div>
                          <span className="count-text" ref={countUpRef} />
                        </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className="counter-text">
                  <h5>Finished Projects</h5>
                  <span>Projects we have completed successfully.</span>
                </div>
              </div>
              <div className="col">
                <div className="counter-2 counter">
                  <CountUp start={viewPortEntered ? null : 0} end={100}>
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true)
                          }
                        }}
                        delayedCall
                      >
                        <div>
                          <span className="count-text" ref={countUpRef} />
                        </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className="counter-text">
                  <h5>Happy Customers</h5>
                  <span>
                    All the valuable clients that have chosen our services
                  </span>
                </div>
              </div>
              <div className="col">
                <div className="counter-3 counter">
                  <CountUp start={viewPortEntered ? null : 0} end={315}>
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true)
                          }
                        }}
                        delayedCall
                      >
                        <div>
                          <span className="count-text" ref={countUpRef} />
                        </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className="counter-text">
                  <h5>Working Hours</h5>
                  <span>Time dedicated to our projects</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col counter-image"
            style={{
              paddingLeft: "30px",
            }}
          >
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce>
              <img src={CounterImage} alt="counter" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
