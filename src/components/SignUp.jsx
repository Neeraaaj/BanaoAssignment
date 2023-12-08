
import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

import { Button } from 'react-bootstrap';
function SignUp({ onClose }) {
  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="container2">
        <div class="contact-box">
        <div className='warn'>
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            <IoMdCloseCircleOutline onClick={onClose}/>
            </p>
        </div>
        <div class="left">
            <h2 style={{marginLeft: "-75%", marginTop: "10%"}}>Sign Up</h2>
            <div className='f-l-name' style={{display: "flex", gap: "10px"}}>
                <input type='text' class="field" placeholder='First Name'  />
                <input type='text' class="field" placeholder='Last Name' />
            </div>
            <input type="text" class="field" placeholder="Email" />
            <input type="text" class="field" placeholder="Password" />
            <button className="primary">Send</button>
            <div className='facebook' style={{display: "flex", width: "100%", padding: "5px", border: "1px solid grey", justifyContent: "center", margin: "5px"}}>
                <img src='https://muzaffarhaque.github.io/agt-A/images/face-book.png' style={{width: "15px", height: "15px", marginTop: "2%"}}/>
                <p>Sign up with Facebook</p>
            </div>
            <div className='facebook' style={{display: "flex", width: "100%", padding: "5px", border: "1px solid grey", justifyContent: "center", marginLeft: "2%"}}>
                <img src='https://muzaffarhaque.github.io/agt-A/images/Google.png' style={{width: "15px", height: "15px", marginTop: "2%"}}/>
                <p>Sign up with Google</p>
            </div>
            <p style={{margin: "10px"}}>Forgot Password?</p>
        </div>
        <div class="right">
            <p>Already have a account? <span
            style={{color: "blue"}}>Sign in here!</span></p>
        </div>
        </div>
  </div>
  );
}

export default SignUp;
