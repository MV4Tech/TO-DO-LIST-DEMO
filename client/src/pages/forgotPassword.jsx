import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import LoginNavbar from './loginNavbar';

const ForgotPassword = () => {
  return (
	<>
	<LoginNavbar/>
<div className="container h-100" style={{marginTop:"5rem"}}>
    		<div className="row h-100">
                
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

					

						<div style={{background: '#f5f5f5'}} className="card">
							<div className="card-body">
							<div className="text-center mt-4">
                        <h3><i class="fa fa-lock fa-4x"></i></h3>
							<h1 className="h2">Reset password</h1>
							<p className="lead">
								Enter your email to reset your password.
							</p>
						</div>
								<div className="m-sm-4" >
									<form>
										<div className="form-group">
											<label>Email</label>
											<input style={{backgroundColor: "#ffffff"}} className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"/>
										</div>
										<div className="text-center mt-3">
											 <button type="submit" className="btn btn-lg btn-primary mt-3">Reset password</button> 
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</>
  )
}

export default ForgotPassword