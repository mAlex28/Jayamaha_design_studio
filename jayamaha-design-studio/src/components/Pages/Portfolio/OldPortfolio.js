// {portfolioItem.map((project, index) => (
//     <div
//       className="col-12 col-sm-12 col-md-12 col-lg-6 project-item-wrapper"
//       key={project._id}
//     >
//       <div className="project-item">
//         <AnimationOnScroll
//           animateIn="animate__zoomIn"
//           animateOnce
//           delay={3}
//         >
//           <>
//             <div className="row portfolio-image-slider d-flex justify-content-center">
//               <Slider
//                 ref={portfolioslider}
//                 {...settings}
//                 className="col-12"
//               >
//                 {project.projectImage.map((image) => (
//                   <div
//                     className="d-flex justify-content-center"
//                     onClick={() =>
//                       setIsOpen({ index: index, opended: true })
//                     }
//                   >
//                     <img
//                       src={image}
//                       alt="slider"
//                       className="img-responsive project-item-image"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//             {isOpen.opended && isOpen.index === index && (
//               <Lightbox
//                 imageTitle={project.name}
//                 mainSrc={project.projectImage[photoIndex]}
//                 nextSrc={
//                   project.projectImage[
//                   (photoIndex + 1) % project.projectImage.length
//                   ]
//                 }
//                 prevSrc={
//                   project.projectImage[
//                   (photoIndex +
//                     project.projectImage.length -
//                     1) %
//                   project.projectImage.length
//                   ]
//                 }
//                 onCloseRequest={() => {
//                   setIsOpen({ index: -1, opended: false })
//                   setPhotoIndex(0)
//                 }}
//                 onMovePrevRequest={() =>
//                   setPhotoIndex(
//                     (photoIndex +
//                       project.projectImage.length -
//                       1) %
//                     project.projectImage.length
//                   )
//                 }
//                 onMoveNextRequest={() =>
//                   setPhotoIndex(
//                     (photoIndex + 1) % project.projectImage.length
//                   )
//                 }
//               />
//             )}
//             <div className="project-item-header">
//               <h1>{project.name}</h1>
//               <span>{project.location}</span>
//               <hr
//                 style={{
//                   width: "150px",
//                   border: "1px solid #845f42",
//                   borderRadius: "15px",
//                   opacity: "unset",
//                 }}
//               />
//             </div>
//             <div className="project-item-description">
//               <ShowMoreText
//                 lines={4}
//                 more="Show more"
//                 less="Show less"
//                 width={0}
//                 className="content-css"
//                 anchorClass="my-anchor-css-class"
//                 expanded={false}
//                 truncatedEndingComponent={"..."}
//               >
//                 {project.description}
//               </ShowMoreText>
//             </div>
//           </>
//         </AnimationOnScroll>
//       </div>
//     </div>
//   ))}