import React from 'react'
import './header.css'
import { MdPeople } from "react-icons/md";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <a href="#">All Posts(32)</a>
            <div className='underline'></div>
            <a href="#" className='disabled-link' >Article</a>
            <a href="#" className='disabled-link'>Event</a>
            <a href="#" className='disabled-link'>Education</a>
            <a href="#" className='disabled-link'>Job</a>
        </nav>
        <div className='r-side'>
            <Dropdown style={{background: "#EDEEF0"}}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light"  style={{backgroundColor: "#EDEEF0", borderRadius: "8px"}}>
                Write a Post
            </Dropdown.Toggle>

            <Dropdown.Menu variant='light'>
            <Dropdown.Item href="#/action-1" active>
                Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button className='primary'>+<MdPeople /> Join Group</Button>
      </div>
    </header>
  )
}

export default Header