import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import LoginNavbar from './loginNavbar';
import userService from '../services/user-service';
import AdminNavbarLogin from './adminNavbarLogin';

const AdminForgotPassword = () => {
	const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.sendChangePasswordQuery(email);
      setMessage(response.data);
	  setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <AdminNavbarLogin/>
      <div className="container h-100" style={{ marginTop: '5rem', marginBottom: '1rem' }}>
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div style={{ background: '#f5f5f5' }} className="card">
                <div className="card-body">
                  <div className="text-center mt-4">
                    <h3>
                      <i className="fa fa-lock fa-4x"></i>
                    </h3>
                    <h1 className="h2">Reset password</h1>
                    <p className="lead">Enter your email to reset your password.</p>
                  </div>
                  <div className="m-sm-0">
                    <form onSubmit={handleFormSubmit}>
					<div className="form-floating mb-3">
                        <input type="email"  required
                         name="email" value={email} onChange={(e) => handleChange(e)}
                        className="form-control bg-white fg-black text-dark" id="floatingInput" placeholder="name@example.com"/>
                        <label  htmlFor="floatingInput">Email</label>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                         </div>  
                      <div className="text-center mt-4 mb-5">
                        <button type="submit" className="btn btn-lg btn-primary mt-3">
                          Reset password
                        </button>
                      </div>
                    </form>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForgotPassword;
