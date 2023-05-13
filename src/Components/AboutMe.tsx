import "../Styles/About_Me.css";
import React from "react";
import { Image, Col, Row } from "react-bootstrap/";
import "aos/dist/aos.css";
import { IProps } from "../interfaces/commonComponentProps";

const AboutMe: React.FC<IProps> = (props) => {
	const { language } = props;

	const translations =
		language === "English"
			? {
					myDescriptionP1: `I was born and raised in the island of Gran Canaria (Spain).
					Here I completed all my education, from primary school to university. At university, I studied a degree in
					Computer Science, with intensification in Information Technologies. During the third year of university, I
					moved to Kraków, Poland, as part of the ERASMUS program. 
         `,
					myDescriptionP2: `I really enjoy learning new things. Currently, my 2 biggest interests are web development and data science. As part of my final degree
					project, I had the opportunity to develop a project that merged these two areas. It was a very fulfilling
					experience which helped me expand my knowledge in these two fields. I am currently working as a Software Developer at Arup Madrid. In my free time I like
					to learn about the topics mentioned above or new technologies.`,
					title: "About me",
					tech: "Tech Stack",
					skills: "Soft Skills",
			  }
			: {
					myDescriptionP1: `Nací y crecí en la isla de Gran Canaria (España). Aquí
					completé toda mi educación, desde la educación primaria hasta la universidad. En la universidad estudié el
					Grado en Ingeniería Informática, con intensificación en Tecnologías de la Información. Durante el tercer año
					de la universidad, me mudé a Cracovia, Polonia, como parte del programa ERASMUS.
         `,
					myDescriptionP2: `Me gusta mucho aprender cosas nuevas. Mis dos mayores intereses son el desarrollo web y la ciencia de datos. Como parte de mi
					proyecto de fin de carrera, tuve la oportunidad de desarrollar un proyecto que fusionaba estas dos áreas. Fue
					una experiencia muy gratificante que me ayudó a ampliar mis conocimientos en estos dos campos. En la actualidad stoy trabajando como desarrollador de Software en Arup Madrid. En mi tiempo libre
					me gusta aprender sobre los temas mencionados anteriormente o sobre nuevas tecnologías.`,
					title: "Sobre mí",
					tech: "Stack tecnológico",
					skills: "Habilidades blandas",
			  };

	return (
		<div className="AboutMe" id="AboutMe">
			<h1 className="titleH1">{translations.title}</h1>
			<div className="aboutMeInfo">
				<Row>
					<Col md={6} sm={12} xs={12} lg={4} xl={4}>
						<div className="my-image">
							<Image src="/my-portfolio/foto-mia.PNG" roundedCircle width="200" height="200" />
						</div>
					</Col>
					<Col md={6} sm={12} xs={12} lg={8} xl={8}>
						<p>{translations.myDescriptionP1}</p>
						<p>{translations.myDescriptionP2}</p>
					</Col>
				</Row>
				<h3 id="Skills">{translations.skills}</h3>
				<div className="soft-skills">
					<ul>
						<li data-aos="fade-right" data-aos-duration="1500">
							{props.language === "English" ? "Communication" : "Comunicación"}
							<ul data-aos="fade-right" data-aos-duration="1700">
								<li>{props.language === "English" ? "Oral communication" : "Comunicación oral"}</li>
								<li>{props.language === "English" ? "Written communication" : "Comunicación escrita"}</li>
								<li>
									{props.language === "English" ? "Languages" : "Idiomas"}
									<ul data-aos="fade-right" data-aos-duration="1900">
										<li>{props.language === "English" ? "Spanish: native" : "Español: nativo"}</li>
										<li>
											{props.language === "English"
												? "English: proficiency (Cambridge Advanced Exam (C1) with C2 Proficiency level."
												: "Inglés: nivel C2 - (Examen 'Cambridge Advanced Exam (C1)' con nivel de C2.)"}
										</li>
										<li>{props.language === "English" ? "German: basic knowledge" : "Alemán: nivel básico"}</li>
									</ul>
								</li>
							</ul>
						</li>
						<li data-aos="fade-right" data-aos-duration="1500">
							{props.language === "English" ? "Teamwork" : "Trabajo en equipo"}
						</li>
						<li data-aos="fade-right" data-aos-duration="1500">
							{props.language === "English" ? "Motivation to learn" : "Motivación por aprender"}
							<ul>
								<li data-aos="fade-right" data-aos-duration="1700">
									{props.language === "English" ? "Fast learner" : "Aprendizaje rápido"}
								</li>
								<li data-aos="fade-right" data-aos-duration="1700">
									{props.language === "English" ? "Adaptability" : "Adaptabilidad"}
								</li>
							</ul>
						</li>
						<li data-aos="fade-right" data-aos-duration="1500">
							{props.language === "English" ? "Creativity" : "Creatividad"}
							<ul>
								<li data-aos="fade-right" data-aos-duration="1700">
									{props.language === "English" ? "Problem solving" : "Resolución de problemas"}
								</li>
								<li data-aos="fade-right" data-aos-duration="1700">
									{props.language === "English" ? "Analytical skills" : "Habilidades analíticas"}
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<h3 id="Skills">{translations.tech}</h3>
				<Row className="firstRow" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio/Images/Icons/React.png" alt="React" height="64" width="64"></Image>
						<div>React</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/typescript.png" alt="typescript" height="64" width="64"></Image>
						<div>TypeScript</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/python.png" alt="python" height="64" width="64"></Image>
						<div>Python</div>
					</Col>
				</Row>

				<Row className="rowSeparation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/redux.png" alt="redux" height="64" width="64"></Image>
						<div>Redux</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/nodejs.png" alt="nodejs" height="64" width="64"></Image>
						<div>NodeJS</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/JavaScript.png" alt="JavaScript" height="64" width="64"></Image>
						<div>JavaScript</div>
					</Col>
				</Row>
				<Row className="rowSeparation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/Java.png" alt="Java" height="64" width="64"></Image>
						<div>Java</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/postgresql.png" alt="potgresql" height="64" width="64"></Image>
						<div>PostgreSQL</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/docker.png" alt="Docker" height="64" width="64"></Image>
						<div>Docker</div>
					</Col>
				</Row>
				<Row className="lastRow" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/HTML.png" alt="HTML" height="64" width="64"></Image>
						<div>HTML</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/CSS.png" alt="CSS" height="64" width="64"></Image>
						<div>CSS</div>
					</Col>
					<Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
						<Image src="/my-portfolio//Images/Icons/Git.png" alt="git" height="64" width="64"></Image>
						<div>Git</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AboutMe;
