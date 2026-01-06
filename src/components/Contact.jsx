import { Link } from "react-router-dom"
function Contact(){
    return(
        <>
        <div className="head">
        <Link to="/">Main</Link> 
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>   
        <br></br></div> 
        <div className="maincontact">
        <h1>This is Contact page</h1>
        </div>
        <div className="contactdetails">
            <div className="contactimage">
                <img src="photo1.jpg" alt="Contact"/>
            </div>
            <div className="mydetails">
                
               <h2>Name: Kislay Kumar</h2> 
               <h2>Designation: Student</h2>
                <h2>Id: 2500032706</h2>
                <h2>Program: B.tech</h2>
                <h2>Email:Kislay6575@gmail.com</h2>
                <h2>Phone: +91 9508660078</h2>
                <h2>Address: Patna,Bihar,India</h2> 
            </div>
        </div>
        </>
    )
}
export default Contact