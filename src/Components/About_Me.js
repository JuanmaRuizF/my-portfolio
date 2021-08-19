import '../Styles/About_Me.css';
import {Image, Col,Row} from 'react-bootstrap/'
import 'aos/dist/aos.css';

function AboutMe(){

    return(
        <div className="AboutMe" id="AboutMe">
            <h1 className="titleH1">About me</h1>

            {/* <table>
                <tbody>
                    <tr>
            
                        <th className="aboutMeInfoColumn">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</th>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleShow}>ddd</button> */}
            <Row className="aboutMeInfo">
                <Col md={6} sm={12} xs={12} lg={4} xl={4}>
                    <span></span>
                    <div className="my-image">
                        <Image src="foto-mia.JPG" roundedCircle  width="200" height="200"/>
                    </div>
                </Col>

                <Col md={6} sm={12} xs={12} lg={8} xl={8}>
                    <p>I was born and raised in the island of Gran Canaria (Spain), which is located near the west coast of Africa. Here I completed all my education, from primary school to university. At university, I studied a degree in Computer Science, with intensification in Information Technologies. During the third year of university, I moved to Kraków, Poland, as part of the ERASMUS program to study there for the 2019-2020 academic year.  </p>
                    <p>My two biggest interests in computer science are web development and data science. As part of my final degree project, I had the opportunity to develop a project that merged these two areas. It was a very fulfilling experience which helped me expand my knowledge in these two fields. With eyes set on the future, I am excited to learn about the areas mentioned or about any new fields or technologies that the future of computer science has to offer.</p>
                </Col>
            </Row>
            <div className="aboutMeInfo">
                <h3 id="Skills">Skills</h3>

            
                <Row className="firstRow" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        {/* <DiReact size="4em"></DiReact> */}
                        <Image src="/Images/Icons/React.png" alt="React" height="64" width="64"></Image>
                        <div>React</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/python.png" alt="python" height="64" width="64"></Image>
                        <div>Python</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/Git.png" alt="git" height="64" width="64"></Image>
                        <div>Git</div>
                    </Col>
                </Row>
                <Row className="rowSeparation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/HTML.png" alt="HTML" height="64" width="64"></Image>
                        <div>HTML</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/CSS.png" alt="CSS" height="64" width="64"></Image>
                        <div>CSS</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/JavaScript.png" alt="JavaScript" height="64" width="64"></Image>
                        <div>JavaScript</div>
                    </Col>
                </Row>
                <Row className="rowSeparation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/Angular.png" alt="Angular" height="64" width="64"></Image>
                        <div>Angular</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/Bootstrap.svg" alt="Bootstrap" height="64" width="64"></Image>
                        <div>Bootstrap</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/RubyOnRails.png" alt="RubyOnRails" height="64" width="64"></Image>
                        <div>RubyOnRails</div>
                    </Col>
                </Row>
                <Row className="lastRow" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/C++.png" alt="C++" height="64" width="64"></Image>
                        <div>C++</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/Java.png" alt="Java" height="64" width="64"></Image>
                        <div>Java</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} lg={4} xl={4} className="skillComponent">
                        <Image src="/Images/Icons/SQL.png" alt="SQL" height="64" width="64"></Image>
                        <div>SQL</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutMe