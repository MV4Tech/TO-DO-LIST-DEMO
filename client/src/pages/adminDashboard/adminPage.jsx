import React from 'react'
import Footer from "../dashboard/footer.jsx";
import AdminDashboardNavbar from './adminDashboardSettingsNavbar';
import AdminTableBody from './adminTableBody';

const AdminPage = () => {
  return (
    <>
    <AdminDashboardNavbar/>
    <div>
          <h2 className="display-3 text-center fw-bold" style={{ paddingTop: '30vh', paddingBottom: '1vh', color: 'black', fontSize: '44px'}}>
            Admin
          </h2>
        </div>
    <AdminTableBody/>

  <Footer/>
    
    </>
    
  )
}

export default AdminPage