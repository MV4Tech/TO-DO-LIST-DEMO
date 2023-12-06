import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Review = () => {
  return (
    <MDBContainer className="py-5" style={{border: '1px solid #ddd',marginTop: '5rem',borderRadius: '10px', background: '#f5f5f5'}}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center mb-5">
          <h2 className="mb-4 mt-5"  style={{ fontSize: '78px' }}>Testimonials</h2>
          <h6 className="mt-3 align-center align-center _mg-b-lg" style={{ fontSize: '20px',color: '#BA68C8' }}>
          "Discover the impact of our to-do list app through the eyes of our users. Hear firsthand experiences from individuals like John, who found a productivity boost, Lisa, a small business owner streamlining tasks, and Emily, a busy parent regaining control of family schedules. Their testimonials showcase the diverse ways our app transforms daily routines and empowers users to achieve more."
          </h6>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center mt-4">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Emily Smantha</h5>
          <h6 style={{fontSize: '20px',color: '#BA68C8'}} className="mb-3">Parent</h6>
          <h6 className="mt-3 align-center align-center _mg-b-lg" style={{ fontSize: '18px' }}>
            <MDBIcon fa icon="quote-left" className="pe-2" />
             Being a parent is a full-time job, and staying organized is key to managing the chaos. This to-do list app has been a lifesaver for me. I can create shared lists with my partner for grocery shopping, school events, and household chores.
          </h6>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fa
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 style={{fontSize: '20px',color: '#BA68C8'}} className=" mb-3">Buisness Owner</h6>
          <h6 className="mt-3 align-center align-center _mg-b-lg" style={{ fontSize: '18px' }}>
            <MDBIcon fa icon="quote-left" className="pe-2" />
            "As a small business owner juggling multiple responsibilities, finding the right productivity tool is crucial. 
          </h6>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">John Smith</h5>
          <h6 style={{fontSize: '20px',color: '#BA68C8'}} className="mb-3">Web Developer</h6>
          <h6 className="mt-3 align-center align-center _mg-b-lg" style={{ fontSize: '18px' }}>
            <MDBIcon fa icon="quote-left" className="pe-2" />
            "I've tried numerous to-do list apps, but none compare to the simplicity and effectiveness
             of this one. It's become my go-to tool for managing tasks both at work and home. The intuitive interface and quick task entry have significantly boosted my productivity.
          </h6>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fa icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Review
