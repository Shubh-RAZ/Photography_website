import React, { Component , useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  var [boolshow,setbool] = useState(false)
var clickedham = () => {
    setbool(!boolshow)
}
  return (
    <div className="App">
      <div className="content-whole">
      
      <div className={boolshow ? "animate-ham" :"hamburger-whole"} onClick={clickedham}>
                    <div className="line ln1"></div>
                    <div className="line ln2"></div>
                    <div className="line ln3"></div>
                </div>
        <div className="nav-class"><Navbar boolshownav={boolshow} ></Navbar></div>
      <div className="background-img  "><img src="./photo2.jpg"></img></div>
      <div className="icon-quote row">
        <div className="icon-box col-lg-5">
          <img src="https://i.pinimg.com/originals/4d/13/f4/4d13f4527637c6685b1210f626548e00.gif"></img>
        </div>
        <div className="quote-box col-lg-7">
          <div className="quote-1 qt-mg">
            <div className="quote-1-heading">Why Choose us ?</div>
            <div className="quote-1-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
          </div>
          <div className="quote-2 qt-mg">
            <div className="quote-2-heading">Whats unique in our team ?</div>
            <div className="quote-2-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</div>
          </div>
        </div>
      </div>
      <div className="services-box row">
        <div className="col-ser col-lg-4">
          <div className="service">
			  <img src="fash.jpg"></img>
			  <div className="box_1"></div>
		  <div className="box_4"></div>
            <div className="service-cont-box">
			<div className="service-cont">Lorem Ipsum </div>
            </div>
          
          </div>
        </div>
        <div className="col-ser col-lg-4">
          <div className="service">
		  <img src="fash3.jpg"></img>
		  <div className="box_1"></div>
		  <div className="box_4"></div>
            <div className="service-cont-box">
              <div className="service-cont">Lorem Ipsum </div>
            </div>
          
          </div>
        </div>
        <div className="col-ser col-lg-4">
          <div className="service">
		  <img src="fash4.jpg"></img>
		  <div className="box_1"></div>
		  <div className="box_4"></div>
            <div className="service-cont-box">
			<div className="service-cont">Lorem Ipsum </div>
            </div>
          
          </div>
        </div>
       
      </div>
	  
 
		
  </div>
  <div className="footer-photo">
        <div className="foot-cont">
          <div className="follow-us">
            <div className="icons"><i class="fa fa-github" aria-hidden="true"></i></div>
            <div className="icons"><i class="fa fa-facebook" aria-hidden="true"></i></div>
            <div className="icons"><i class="fa fa-twitter" aria-hidden="true"></i></div>
            <div className="icons"><i class="fa fa-instagram" aria-hidden="true"></i></div>
          </div>
          <div className="foot-tag">
            This Project is created using React and Bootstrap As per the clients requirement changes in Layout can be done.
          </div>
        </div>
        </div >
    </div>
  );
}

export default App;
