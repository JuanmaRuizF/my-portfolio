import { ImLinkedin, ImGithub, ImMail } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap/";
import "../Styles/HomePage.css";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";
import { Image } from "react-bootstrap/";

interface IProps {
	language: "English" | "Spanish";
	setLanguage: React.Dispatch<React.SetStateAction<"English" | "Spanish">>;
}
const HomePage: React.FC<IProps> = (props) => {
	const { language, setLanguage } = props;

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const setSpanish = () => setLanguage("Spanish");
	const setEnglish = () => setLanguage("English");

	const translations =
		language === "English"
			? {
					downloadTag: "Download CV",
					contactMe: "Contact me",
					messageTitle: "Message",
					enterMessage: "Message",
					emailTitle: "Email address",
					enterEmail: "Enter email",
					submitMessage: "Submit",
					emailAlert: "Your message has been sent. You will receive an answer as soon as possible.",
			  }
			: {
					contactMe: "Contáctame",
					messageTitle: "Mensaje",
					enterMessage: "Mensaje",
					emailTitle: "Dirección de email",
					enterEmail: "Mensaje del email",
					downloadTag: "Descargar CV",
					submitMessage: "Enviar",
					emailAlert: "El mensaje ha sido enviado. Recibirás una respuesta lo antes posible.",
			  };

	const curriculumLink = (
		<th>
			<a
				href={language === "English" ? "/my-portfolio/CVJuanma-English.pdf" : "/my-portfolio/CVJuanma-Español.pdf"}
				rel="opener"
			>
				<Button variant="outline-light">
					<div className="botonCV">{translations.downloadTag}</div>
				</Button>{" "}
			</a>
		</th>
	);

	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm("gmail", "template_rlztnug", e.target, "user_N1lP6J3jsE14VlvEdX2sH");

		e.target.reset();
		alert(translations.emailAlert);
		handleClose();
	}

	return (
		<div id="HomePage">
			<div className="App-header">
				<h1 data-aos="zoom-in" data-aos-duration="1500" className="minombre">
					Juan Manuel Ruiz Fránquiz
				</h1>

				<table data-aos="zoom-in" data-aos-duration="1500">
					<tbody>
						<tr>
							<th>
								<a href="https://www.linkedin.com/in/juanmaruizf/" className="otherButton" target="blank">
									<ImLinkedin size="1.5em" />{" "}
								</a>
							</th>
							<th>
								<a href="https://github.com/JuanmaRuizF" className="otherButton" target="blank">
									<ImGithub size="1.5em" />{" "}
								</a>
							</th>
							<th onClick={handleShow} className="emailButton">
								{" "}
								<ImMail size="1.5em" />{" "}
							</th>
						</tr>
					</tbody>
				</table>

				<table data-aos="zoom-in" data-aos-duration="1500" className="downloadCV">
					<tbody>
						<tr>{curriculumLink}</tr>
					</tbody>
				</table>
				<table data-aos="zoom-in" data-aos-duration="1500" className="downloadCV">
					<tbody>
						<tr>
							<th onClick={setSpanish} className="emailButton">
								{" "}
								<Image src="/my-portfolio/BanderaEsp.png" width="75" height="75" />{" "}
							</th>
							<th onClick={setEnglish} className="emailButton">
								{" "}
								<Image src="/my-portfolio/BanderaIng.png" width="75" height="75" />{" "}
							</th>
						</tr>
					</tbody>
				</table>

				<div>
					<Modal show={show} onHide={handleClose} size="lg">
						<Modal.Header closeButton>
							<Modal.Title>{translations.contactMe}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form onSubmit={sendEmail}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>{translations.emailTitle}</Form.Label>
									<Form.Control required type="email" placeholder={translations.enterEmail} name="email" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Label>{translations.messageTitle}</Form.Label>
									<Form.Control
										as="textarea"
										required
										rows={6}
										name="message"
										placeholder={translations.enterMessage}
									/>
								</Form.Group>
								<Button variant="primary" type="submit">
									{translations.submitMessage}
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
