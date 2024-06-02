import React, { useState } from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import "./HomeProjects.css"
import { portfolioItem } from "../../api/PortfolioItems"

const HomeProjects = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState({
    index: 0,
    opended: false,
  })

  return (
    <section className="project-section">
      <div className="container project-section-wrapper">
        <div className="project-section-heading-wrapper">
          <hr
            style={{
              width: "100px",
              border: "2.5px solid #845f42",
              borderRadius: "15px",
              opacity: "unset",
            }}
          />
          <h2 className="project-section-heading">Our Projects</h2>
          <p className="project-section-para">
            Take a look at our latest high-end luxurious designs!
            <br /> We manage your project from start to finish.
          </p>
        </div>
        <div className="row project-section-items-wrapper">
          {portfolioItem.slice(0, 3).map((project, index) => (
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-4 project-section-item"
              key={project._id}
            >
              <AnimationOnScroll
                animateIn="animate__zoomIn"
                animateOnce
                delay={3}
              >
                <>
                  <img
                    src={project.projectImage[0]}
                    alt={project.name}
                    className="project-section-image content-image"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                    }}
                    onClick={() => setIsOpen({ index: index, opended: true })}
                  />
                  {isOpen.opended && isOpen.index === index && (
                    <Lightbox
                      imageTitle={project.name}
                      mainSrc={project.projectImage[photoIndex]}
                      nextSrc={
                        project.projectImage[
                          (photoIndex + 1) % project.projectImage.length
                        ]
                      }
                      prevSrc={
                        project.projectImage[
                          (photoIndex + project.projectImage.length - 1) %
                            project.projectImage.length
                        ]
                      }
                      onCloseRequest={() => {
                        setIsOpen({ index: -1, opended: false })
                        setPhotoIndex(0)
                      }}
                      onMovePrevRequest={() =>
                        setPhotoIndex(
                          (photoIndex + project.projectImage.length - 1) %
                            project.projectImage.length
                        )
                      }
                      onMoveNextRequest={() =>
                        setPhotoIndex(
                          (photoIndex + 1) % project.projectImage.length
                        )
                      }
                    />
                  )}
                  <h4 className="project-section-item-heading">
                    {project.name}
                  </h4>
                  <span className="project-section-item-descp">
                    {project.location}
                  </span>
                </>
              </AnimationOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProjects
