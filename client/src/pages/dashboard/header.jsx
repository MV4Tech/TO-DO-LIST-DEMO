import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ResolvedTaskModal from "./resolvedHeaderTaskModal.jsx";
import '../../styles/dashboard.css';
import TaskModal from './taskModal.jsx'
import QuoteModal from "./quoteModal.jsx";





const Header = () => {
    const navigate = useNavigate();

    
   

  return (
    <>    
        <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />


      <header className="masthead">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5">
              <h1 className="mb-4">
                Best To Do List in Town! Start now for free!
              </h1>
              <h2 className="m-0">
              "Welcome to Your Productivity Hub! <br></br>🚀 Get ready to conquer your day with our intuitive To-Do List.
              <br></br> Your journey to increased efficiency and accomplishment starts here.<br></br> Let's turn your tasks into triumphs! 
              <br></br> 🌟 #ProductivityMatters #GetThingsDone"
                
              </h2>
            </div>
            <div className="col-lg-5 ">            
              <div className="py-5 px-4 masthead-cards">
                <div className="d-flex">
                <TaskModal/>             
                  <a onClick={() => navigate("/profile")} style={{ cursor: 'pointer' }}  className="w-50 pl-3 pb-4 p-2">
                    <div className="card border-0 border-bottom-blue shadow-lg shadow-hover">
                      <div className="card-body text-center">
                        <div className="text-center">
                        <i className="fa fa-4x fa-user my-2"></i>
                        </div>
                        Profile
                      </div>
                    </div>
                  </a>
                </div>
                <div className="d-flex">
                  <QuoteModal/>

                  <ResolvedTaskModal/>
                  
                </div>
                <div className="shape"></div>
              </div>
            </div>
          </div>
        </div>
        <svg
          style={{ pointerEvents: "none" }}
          className="wave"
          width="100%"
          height="50px"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 75"
        >
          <defs>
            <style>
              {`
                .a {
                  fill: none;
                }

                .b {
                  clip-path: url(#a);
                }

                .c,
                .d {
                  fill: #f9f9fc;
                }

                .d {
                  opacity: 0.5;
                  isolation: isolate;
                }
              `}
            </style>
            <clipPath id="a">
              <rect className="a" width="1920" height="75"></rect>
            </clipPath>
          </defs>
          <title>wave</title>
          <g className="b">
            <path
              className="c"
              d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"
            ></path>
          </g>
        </svg>
      </header>
    </>
  );
};

export default Header;
