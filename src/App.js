import { useState } from 'react';
import './App.css';
import { FaBed } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaBus } from 'react-icons/fa';
import { BiSpa } from "react-icons/bi";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Aboutimg from "../src/img/about1.jpeg"
import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'
import room1 from './img/room1.jpeg'
import room2 from './img/room2.jpeg'
import room3 from './img/room3.jpeg'
import p1 from './img/p1.jpeg'
import p2 from './img/p2.jpeg'
import p3 from './img/p3.jpeg'
import contactİmg from "../src/img/contact.jpeg"











function App() {
 
  return (
    <div>
      <header className="main-header">
        <div className="navbar">
          <h1 className="brand">
            LOGO
            <span>Deluxe</span>Hotel
          </h1>

       
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#rooms'>Rooms</a></li>
            <li><a href='#contact'>Contact</a></li>

          </ul>
        </nav>
        </div>
        <div className="content">
          <h1>Welcome to Deluxe</h1>
          <p>Lorem ,ipsum dolor sit amet consectetur adipicing elit.Quis, voluptatibus.</p>
          <button className="btn btn-primary">Lead more..</button>
        </div>
      </header>
          
      <main>
        <div className="icons">
          <div className="icons-item">
            <p><i className="bg-primary"><FaBed></FaBed></i></p>
            <h3>7/24 Front Desk</h3>
            <p>Lorem,ipsum dolor sit amet constecteur adipicing elit.Eius,dolorem?</p>
          </div>
          <div className="icons-item">
            <p><i className="bg-primary"><FaUtensils></FaUtensils></i></p>
            <h3>Restaurant Bar</h3>
            <p>Lorem,ipsum dolor sit amet constecteur adipicing elit.Eius,dolorem?</p>
          </div>
          <div className="icons-item">
            <p><i className="bg-primary"><FaBus></FaBus></i></p>
            <h3>Transfer Services</h3>
            <p>Lorem,ipsum dolor sit amet constecteur adipicing elit.Eius,dolorem?</p>
          </div>
          <div className="icons-item">
            <p><i className="bg-primary"><BiSpa></BiSpa></i></p>
            <h3>Spa Suites</h3>
            <p>Lorem,ipsum dolor sit amet constecteur adipicing elit.Eius,dolorem?</p>
          </div>


        </div>
      </main>
      {/* about */}

      <div className="about">
       
      <div className="row1">
        <div className="column">
        <div className="column-1">
          <img src={Aboutimg}></img>
        </div>
        </div>
        <div className="column bg-primary">
          <div className="column-2">
          <h2>Lorem ipsum.</h2>
          <p>Lorem ,ipsum dolor sit amet consectetur adipicing elit.Quis, voluptatibus.</p>
          <button className="btn btn-outline-light">Lead more...</button>
        </div>
        </div>
        </div>
        
      </div>
      
      {/* galery */}

      <section  className="gallery">
        <header className="section-header">
          <h2>Lorim ipsum</h2>
          <p>Lorem ,ipsum dolor sit amet consectetur adipicing elit.Quis, voluptatibus.</p>
        </header>
        <div className="row1">
          <div className="column">
            <div className="div1"><img src={img1} alt=""></img></div>
            <div className="div2"><img src={img2} alt=""></img></div>
            <div className="div3"><img src={img3} alt=""></img></div>
            <div className="div4"><img src={img4} alt=""></img></div>
          </div>

          


          
        </div>
      </section>

        {/* rooms */}
        <section className="room">
          <header className="section-header">
            <h2>Rooms header</h2>
            <p>Lorem ,ipsum dolor sit amet consectetur adipicing elit.Quis, voluptatibus.</p>
          </header>
          <div className="flex-items">
                <div className="card">
                  <img src={room1}></img>
                  <div className="card-body">
                      <h2>Deluxee room</h2>
                      <p>Lorem,ipsum</p>
                  </div>
                </div>
                <div className="card">
                  <img src={room2}></img>
                  <div className="card-body">
                      <h2>Superior room</h2>
                      <p>Lorem,ipsum</p>
                  </div>
                </div>
                <div className="card">
                  <img src={room3}></img>
                  <div className="card-body">
                      <h2>Standart room</h2>
                      <p>Lorem,ipsum</p>
                  </div>
                </div>
          </div>
         
        </section>


        {/* teams */}
        <section className="teams">
          <header className="section-header">
            <h2>Teams</h2>
            <p>Lorem ,ipsum dolor sit amet consectetur adipicing elit.Quis, voluptatibus.</p>
          </header>
          <div className="flex-items">
            <div>
              <img src={p1}></img>
              <h2>Umut Bektaş</h2>
              <p>Software devoloper.</p>
            </div>
            <div>
              <img src={p2}></img>
              <h2>Jackie Chan</h2>
              <p>Software devoloper.</p>
            </div>
            <div>
              <img src={p3}></img>
              <h2>Angelina Jolie</h2>
              <p>Manager</p>
            </div>
          </div>
        </section>

        {/* Contact */}

        <section className="contact">
          <div className="flex-items">
            <div className="column">
              <div className="column-1">
                <img src={contactİmg}></img>
              </div>
            </div>
            <div className="column">
              <h2>Contact Us</h2>
              <form className="contact-form">
               
                <label>Name</label>
                <input placeholder="Enter your name"></input>
                
                <label>E-mail</label>
                <input placeholder="Enter your email"></input>
                <label>Phone</label>
                <input placeholder="Enter your phone"></input>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </section>

        {/* footer */}

        <footer>
          <div className="social">
            <a><i><FaFacebook/></i></a>
            <a><i><FaInstagram/></i></a>
            <a><i><FaTwitter/></i></a>
            <a><i><FaLinkedin/></i></a>
          </div>
        </footer>
     
   
    </div>
  );
}

export default App;
