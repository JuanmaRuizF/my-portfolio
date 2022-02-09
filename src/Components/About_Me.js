import "../Styles/About_Me.css";
import { Image, Col, Row } from "react-bootstrap/";
import "aos/dist/aos.css";

function AboutMe(props) {
  var myDescription;
  var titulo;
  var tech;
  var skills;
  if (props.language === "English") {
    myDescription = (
      <Col md={6} sm={12} xs={12} lg={8} xl={8}>
        <p>
          I was born and raised in the island of Gran Canaria (Spain), which is
          located near the west coast of Africa. Here I completed all my
          education, from primary school to university. At university, I studied
          a degree in Computer Science, with intensification in Information
          Technologies. During the third year of university, I moved to Kraków,
          Poland, as part of the ERASMUS program to study there for the
          2019-2020 academic year.{" "}
        </p>
        <p>
          My two biggest interests in computer science are web development and
          data science. As part of my final degree project, I had the
          opportunity to develop a project that merged these two areas. It was a
          very fulfilling experience which helped me expand my knowledge in
          these two fields. With eyes set on the future, I am excited to learn
          about the areas mentioned or about any new fields or technologies that
          the future of computer science has to offer.
        </p>
      </Col>
    );

    titulo = <h1 className="titleH1">About me</h1>;
    tech = <h3 id="Skills">Languages and technologies</h3>;
    skills = <h3 id="Skills">Soft Skills</h3>;
  } else {
    myDescription = (
      <Col md={6} sm={12} xs={12} lg={8} xl={8}>
        <p>
          Nací y crecí en la isla de Gran Canaria (España), que se encuentra
          cerca de la costa oeste de África. Aquí completé toda mi educación,
          desde la educación primaria hasta la universidad. En la universidad
          estudié el Grado en Ingeniería Informática, con intensificación en
          Tecnologías de la Información. Durante el tercer año de la
          universidad, me mudé a Cracovia, Polonia, como parte del programa
          ERASMUS para estudiar allí durante el año académico 2019-2020.
        </p>
        <p>
          Mis dos mayores intereses en informática son el desarrollo web y la
          ciencia de datos. Como parte de mi proyecto de fin de carrera, tuve la
          oportunidad de desarrollar un proyecto que fusionaba estas dos áreas.
          Fue una experiencia muy gratificante que me ayudó a ampliar mis
          conocimientos en estos dos campos. Pensando en el futuro, estoy
          emocionado de aprender sobre las áreas mencionadas o sobre los nuevos
          campos o tecnologías que vayan surgiendo.
        </p>
      </Col>
    );

    titulo = <h1 className="titleH1">Sobre mí</h1>;

    skills = <h3 id="Skills">Habilidades</h3>;
    tech = <h3 id="Skills">Lenguajes y tecnologías</h3>;
  }

  return (
    <div className="AboutMe" id="AboutMe">
      {titulo}

      <div className="aboutMeInfo">
        <Row>
          <Col md={6} sm={12} xs={12} lg={4} xl={4}>
            <div className="my-image">
              <Image
                src="/my-portfolio/foto-mia.PNG"
                roundedCircle
                width="200"
                height="200"
              />
            </div>
          </Col>

          {myDescription}
        </Row>
        {skills}

        <div className="soft-skills">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1500">
              {props.language === "English" ? "Communication" : "Comunicación"}
              <ul data-aos="fade-right" data-aos-duration="1700">
                <li>
                  {props.language === "English"
                    ? "Oral communication"
                    : "Comunicación oral"}
                </li>
                <li>
                  {props.language === "English"
                    ? "Written communication"
                    : "Comunicación escrita"}
                </li>
                <li>
                  {props.language === "English" ? "Languages" : "Idiomas"}
                  <ul data-aos="fade-right" data-aos-duration="1900">
                    <li>
                      {props.language === "English"
                        ? "Spanish: native"
                        : "Español: nativo"}
                    </li>
                    <li>
                      {props.language === "English"
                        ? "English: proficiency (Cambridge Advanced Exam (C1) with C2 Proficiency level."
                        : "Inglés: nivel C2 - (Examen 'Cambridge Advanced Exam (C1)' con nivel de C2.)"}
                    </li>
                    <li>
                      {props.language === "English"
                        ? "German: basic knowledge"
                        : "Alemán: nivel básico"}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li data-aos="fade-right" data-aos-duration="1500">
              {props.language === "English" ? "Teamwork" : "Trabajo en equipo"}
            </li>
            <li data-aos="fade-right" data-aos-duration="1500">
              {props.language === "English"
                ? "Motivation to learn"
                : "Motivación por aprender"}
              <ul>
                <li data-aos="fade-right" data-aos-duration="1700">
                  {props.language === "English"
                    ? "Fast learner"
                    : "Aprendizaje rápido"}
                </li>
                <li data-aos="fade-right" data-aos-duration="1700">
                  {props.language === "English"
                    ? "Adaptability"
                    : "Adaptabilidad"}
                </li>
              </ul>
            </li>
            <li data-aos="fade-right" data-aos-duration="1500">
              {props.language === "English" ? "Creativity" : "Creatividad"}
              <ul>
                <li data-aos="fade-right" data-aos-duration="1700">
                  {props.language === "English"
                    ? "Problem solving"
                    : "Resolución de problemas"}
                </li>
                <li data-aos="fade-right" data-aos-duration="1700">
                  {props.language === "English"
                    ? "Analytical skills"
                    : "Habilidades analíticas"}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {tech}
        <Row
          className="firstRow"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            {/* <DiReact size="4em"></DiReact> */}
            <Image
              src="/my-portfolio/Images/Icons/React.png"
              alt="React"
              height="64"
              width="64"
            ></Image>
            <div>React</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/python.png"
              alt="python"
              height="64"
              width="64"
            ></Image>
            <div>Python</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/Git.png"
              alt="git"
              height="64"
              width="64"
            ></Image>
            <div>Git</div>
          </Col>
        </Row>
        <Row
          className="rowSeparation"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/HTML.png"
              alt="HTML"
              height="64"
              width="64"
            ></Image>
            <div>HTML</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/CSS.png"
              alt="CSS"
              height="64"
              width="64"
            ></Image>
            <div>CSS</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/JavaScript.png"
              alt="JavaScript"
              height="64"
              width="64"
            ></Image>
            <div>JavaScript</div>
          </Col>
        </Row>
        <Row
          className="rowSeparation"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2500"
        >
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/Angular.png"
              alt="Angular"
              height="64"
              width="64"
            ></Image>
            <div>Angular</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/Bootstrap.svg"
              alt="Bootstrap"
              height="64"
              width="64"
            ></Image>
            <div>Bootstrap</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/RubyOnRails.png"
              alt="RubyOnRails"
              height="64"
              width="64"
            ></Image>
            <div>RubyOnRails</div>
          </Col>
        </Row>
        <Row
          className="lastRow"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/C++.png"
              alt="C++"
              height="64"
              width="64"
            ></Image>
            <div>C++</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/Java.png"
              alt="Java"
              height="64"
              width="64"
            ></Image>
            <div>Java</div>
          </Col>
          <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
            <Image
              src="/my-portfolio//Images/Icons/SQL.png"
              alt="SQL"
              height="64"
              width="64"
            ></Image>
            <div>SQL</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
