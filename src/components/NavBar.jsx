import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import {FaArrowLeft} from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Login from './Login';
import App from '../App';

function NavBar({ onLoginClick, onOtherComponentClick }) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleLoginClick = () => {
      setShowLoginForm(true);
    };
  
    const closeLoginForm = () => {
      setShowLoginForm(false);
    };
  
  return (
    <Navbar className="">
        <div className='after'>
            <div id='icon'>
                <FaArrowLeft color='white'/>
            </div>
            <div id='btn'>
                <button style={{width: "100px", padding: "10px", background: "transparent", border: "1px solid white", borderRadius: "10px", color: "white"}} onClick={onLoginClick}>Join Group</button>
            </div>
        </div>
      <Container id='navbar'>
        <Navbar.Brand href="#home">
            <img src='https://muzaffarhaque.github.io/agt-A/images/logo.svg' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className='container' style={{marginLeft: "20%"}}>
            <input  placeholder='Search for your favorite groups in ATG' style={{width: "50%"}}/>
        </div>
        <Navbar.Collapse className="justify-content-end" style={{width: "30%", marginLeft: "50%", position: "absolute"}}>
          <Navbar.Text color='black' >
            <b>Create account.<span style={{color: "blue"}}>It's free!</span></b>
            <Dropdown  style={{marginLeft: "105%", marginTop: "-15%"}} className='custom-dropdown'>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={onLoginClick}>Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={onOtherComponentClick}>Sign In</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;