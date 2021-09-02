
import { ImLinkedin, ImGithub, ImMail} from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap/'
import '../Styles/HomePage.css'
import React from 'react';
import { useState } from "react";
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';


function HomePage(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function sendEmail(e) {
        e.preventDefault();
        console.log(e)
        emailjs.sendForm('gmail', 'template_rlztnug', e.target, 'user_N1lP6J3jsE14VlvEdX2sH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Your message has been sent. You will receive an answer as soon as possible.")
          handleClose()
      }

    return(

        <div  id="HomePage">
            <div className="App-header">
                <h1  data-aos="zoom-in" data-aos-duration="1500" className="minombre">
                Juan Manuel Ruiz Fránquiz
                </h1>

                <table  data-aos="zoom-in" data-aos-duration="1500">
                    <tbody>
                        <tr>
                            <th><a href="https://www.linkedin.com/in/juan-manuel-ruiz-fr%C3%A1nquiz-b227a2218/" className="otherButton" target="blank"><ImLinkedin size="1.5em" /> </a></th>
                            <th><a href="https://github.com/JuanmaRuizF" className="otherButton" target="blank"><ImGithub size="1.5em"/> </a></th>
                            <th onClick={handleShow} className="emailButton"> <ImMail size="1.5em"/> </th>
                        </tr>
                    </tbody>

                </table>

                <table  data-aos="zoom-in" data-aos-duration="1500" className="downloadCV">
                    <tbody>
                        <tr>
                            <th><a href="/my-portfolio/JuanManuelRuizCV-Ingles.pdf" target="_blank"><Button variant="outline-light"><div className="botonCV">Download CV</div></Button>{' '}</a></th>
                        </tr>
                    </tbody>
                </table>
                
                <div>
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Contact me</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={sendEmail}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" name="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" required rows={6} name="message" placeholder="Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>

    )
}
export default HomePage