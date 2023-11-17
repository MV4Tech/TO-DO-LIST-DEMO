import React from 'react'
import Chasovnika from '../assets/images/login_pagee.png'
 

const RegisterForm = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                    <form className="">

                      
                        <div className="form-floating mb-3">
                             <input type="text" className="form-control bg-white text-dark" id="floatingUsername" placeholder="Username"/>
                             <label htmlFor="floatingUsername">Username</label>
                        </div>
                     

                      <div className="form-floating mb-3 mt-5">
                             <input type="password" className="form-control bg-white text-dark" id="floatingPassord" placeholder="Password"/>
                             <label htmlFor="floatingPassord">Password</label>
                        </div>

    
                      <div className="form-check d-flex justify-content-center mb-5">Don't have an account yet?&nbsp;
                      <a class="nav-link" className='text-underline'>Sign up here</a>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">Login</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src={Chasovnika}
                      className="img-fluid rounded mx-5" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm