import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IoEyeOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

function Card2({src, title, content, subContent, profilePic, username, color}) {
  return (
    <Row xs={1} md={2}>
        <Col>
          <Card className="card">
            <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title style={{fontWeight: "300"}}>{title}</Card.Title>
              <Card.Text style={{fontWeight: "800", width: "75%"}}>
                {content}
              </Card.Text>
              <img src='https://muzaffarhaque.github.io/agt-A/images/dots....png' style={{position: "absolute", right: "0", margin: "10px", marginTop: "-5%"}}/>
              <Card.Text>
                {subContent}
              </Card.Text>
              <div className='time-loc' style={{display: "flex", gap: "55px"}}>
                <p><MdCalendarToday />Fri, 12 Oct, 2018</p>
                <p><MdOutlineLocationOn />Ahmedabad, India</p>
              </div>
              <button style={{borderStyle: "dotted", color: `${color}`, width: "100%", background: "none", borderRadius: "8px", padding: "10px"}}>Visit Website</button>
            </Card.Body>
            <div className='footer'
                style={{display: "flex", justifyContent: "space-around", padding: "5px"}}
            >
                <img src={profilePic} style={{position: "absolute", left: "0", margin: "5px"}}  />
                <h5 style={{marginTop: "2%", fontWeight: "700"}} className='username'>{username}</h5>
                <p className='views' style={{marginTop: "2%"}}><IoEyeOutline />1.4k views</p>
                <FaShareAlt style={{background: "none", marginTop: "3%", marginLeft: "2%"}}/>
            </div>
          </Card>
        </Col>
    </Row>
  );
}

export default Card2;