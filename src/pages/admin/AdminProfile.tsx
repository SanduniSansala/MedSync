
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DocterList from '../../components/DoctorList'


const AdminProfile:React.FC = () => {

    

  return (
    <div>
       <Header/>

       <div>
      `   <DocterList/>
       </div>
       <Footer/>
    </div>
  )
}

export default AdminProfile
