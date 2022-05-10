import "../Styles/ProjectsMenu.css";
import dataEnglish from "../Data/Projects-English.json";
import dataEspañol from "../Data/Projects-Español.json";
import React from "react";
import {
  DiPython,
  DiReact,
  DiRubyRough,
  DiMysql,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiJupyter,
  SiFirebase,
  SiTensorflow,
  SiReactrouter,
  SiLeaflet,
} from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap/";
import {
  Grid,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core/";
import { ImGithub } from "react-icons/im";
import { GrDeploy } from "react-icons/gr";

const useStyles = makeStyles({
  root: {
    maxWidth: 430,
    cursor: "pointer",
  },
});

function ProjectsMenu(props) {
  const [show, setShow] = useState(false);
  const [selectedProject, setselectedProject] = useState(0);
  const classes = useStyles();

  const components = {
    DiPython: DiPython,
    DiReact: DiReact,
    SiJupyter: SiJupyter,
    DiRubyRough: DiRubyRough,
    DiMysql: DiMysql,
    DiAngularSimple: DiAngularSimple,
    SiFirebase: SiFirebase,
    SiTensorflow: SiTensorflow,
    SiReactrouter: SiReactrouter,
    SiLeaflet: SiLeaflet,
  };
  var IconComponent = components["DiPython"];

  function setIcon(iconName) {
    IconComponent = components[iconName];
  }

  function ShowModal(selectedProject) {
    setShow(true);
    setselectedProject(selectedProject);
  }

  if (props.language === "English") {
    if (props.selectedRadio === "All") {
      return (
        <div className="containerMenu">
          <Grid container spacing={6}>
            {dataEnglish.Data.map((s) => {
              return (
                <>
                  <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    lg={4}
                    xl={4}
                    data-aos="fade-down"
                    data-aos-offset={s["offset"]}
                    data-aos-duration="1000"
                  >
                    <Card
                      className={classes.root}
                      onClick={() => {
                        ShowModal(s["id"]);
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="220"
                        image={"/my-portfolio/Images/" + s["image"]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {s["title"]}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                          {s["icons"].map((i) => {
                            setIcon(i);
                            return <IconComponent></IconComponent>;
                          })}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {s["short_description"]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          {dataEnglish.Data.map((s) => {
            if (selectedProject === s["id"]) {
              return (
                <Modal
                  className="Modal"
                  show={show}
                  onHide={() => {
                    setShow(false);
                  }}
                  size="xl"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{s["title"]}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <h5>Project overview</h5> */}
                    <Carousel>
                      {s["extra_images"].map((i) => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={"/my-portfolio/Images/" + i}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                    <div>
                      <h5>Overview</h5>
                      <div>
                        <p className="justify-text">{s["long_description"]}</p>
                      </div>

                      <h5>Characteristics</h5>
                      <ul>
                        {s["project_characteristics"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>

                      <h5>Technologies Used</h5>
                      <ul>
                        {s["list_technologies"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>
                      <h5>Links</h5>
                      <ul>
                        <li>
                          {" "}
                          <a href={s["github_url"]} target="blank">
                            <p className="Link">
                              Repository: <ImGithub></ImGithub>
                            </p>
                          </a>
                        </li>
                        {s["deploy_url"].map((i) => {
                          if (i !== "")
                            return (
                              <li>
                                {" "}
                                <a href={s["deploy_url"]} target="blank">
                                  <p className="Link">
                                    Deployment: <GrDeploy></GrDeploy>
                                  </p>
                                </a>
                              </li>
                            );
                          return null;
                        })}
                      </ul>
                    </div>
                  </Modal.Body>
                </Modal>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      //ESPAÑOL
      return (
        <div className="containerMenu">
          <Grid container spacing={6}>
            {dataEnglish.Data.map((s) => {
              if (s["type"].includes(props.selectedRadio)) {
                return (
                  <>
                    <Grid
                      item
                      md={6}
                      sm={12}
                      xs={12}
                      lg={4}
                      xl={4}
                      data-aos="fade-down"
                      data-aos-offset={s["offset"]}
                      data-aos-duration="1000"
                    >
                      <Card
                        className={classes.root}
                        onClick={() => {
                          ShowModal(s["id"]);
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="220"
                          image={"/my-portfolio/Images/" + s["image"]}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {s["title"]}
                          </Typography>

                          <Typography gutterBottom variant="h5" component="h2">
                            {s["icons"].map((i) => {
                              setIcon(i);
                              return <IconComponent></IconComponent>;
                            })}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {s["short_description"]}
                          </Typography>
                        </CardContent>
                        {/* <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            id={s["id"]}
                            onClick={() => {
                              ShowModal(s["id"]);
                            }}
                          >
                            Learn More
                          </Button>
                        </CardActions> */}
                      </Card>
                    </Grid>
                  </>
                );
              } else {
                return null;
              }
            })}
          </Grid>
          {dataEnglish.Data.map((s) => {
            if (selectedProject === s["id"]) {
              return (
                <Modal
                  className="Modal"
                  show={show}
                  onHide={() => {
                    setShow(false);
                  }}
                  size="xl"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{s["title"]}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Carousel>
                      {s["extra_images"].map((i) => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={"/my-portfolio/Images/" + i}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                    <div>
                      <h5>Overview</h5>
                      <div>
                        <p className="justify-text">{s["long_description"]}</p>
                      </div>

                      <h5>Characteristics</h5>
                      <ul>
                        {s["project_characteristics"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>

                      <h5>Technologies Used</h5>
                      <ul>
                        {s["list_technologies"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>
                      <h5>Links</h5>
                      <ul>
                        <li>
                          {" "}
                          <a href={s["github_url"]} target="blank">
                            <p className="Link">
                              Repository: <ImGithub></ImGithub>
                            </p>
                          </a>
                        </li>
                        {s["deploy_url"].map((i) => {
                          if (i !== "")
                            return (
                              <li>
                                {" "}
                                <a href={s["deploy_url"]} target="blank">
                                  <p className="Link">
                                    Deployment: <GrDeploy></GrDeploy>
                                  </p>
                                </a>
                              </li>
                            );
                          return null;
                        })}
                      </ul>
                    </div>
                  </Modal.Body>
                </Modal>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
  } else {
    if (props.selectedRadio === "All") {
      return (
        <div className="containerMenu">
          <Grid container spacing={6}>
            {dataEspañol.Data.map((s) => {
              return (
                <>
                  <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    lg={4}
                    xl={4}
                    data-aos="fade-down"
                    data-aos-offset={s["offset"]}
                    data-aos-duration="1000"
                  >
                    <Card
                      className={classes.root}
                      onClick={() => {
                        ShowModal(s["id"]);
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="220"
                        image={"/my-portfolio/Images/" + s["image"]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {s["title"]}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                          {s["icons"].map((i) => {
                            setIcon(i);
                            return <IconComponent></IconComponent>;
                          })}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {s["short_description"]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          {dataEspañol.Data.map((s) => {
            if (selectedProject === s["id"]) {
              return (
                <Modal
                  className="Modal"
                  show={show}
                  onHide={() => {
                    setShow(false);
                  }}
                  size="xl"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{s["title"]}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <h5>Project overview</h5> */}
                    <Carousel>
                      {s["extra_images"].map((i) => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={"/my-portfolio/Images/" + i}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                    <div>
                      <h5>Resumen</h5>
                      <div>
                        <p className="justify-text">{s["long_description"]}</p>
                      </div>

                      <h5>Características</h5>
                      <ul>
                        {s["project_characteristics"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>

                      <h5>Tecnologías utilizadas</h5>
                      <ul>
                        {s["list_technologies"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>
                      <h5>Enlaces</h5>
                      <ul>
                        <li>
                          {" "}
                          <a href={s["github_url"]} target="blank">
                            <p className="Link">
                              Repositorio: <ImGithub></ImGithub>
                            </p>
                          </a>
                        </li>
                        {s["deploy_url"].map((i) => {
                          if (i !== "")
                            return (
                              <li>
                                {" "}
                                <a href={s["deploy_url"]} target="blank">
                                  <p className="Link">
                                    Proyecto hosteado: <GrDeploy></GrDeploy>
                                  </p>
                                </a>
                              </li>
                            );
                          return null;
                        })}
                      </ul>
                    </div>
                  </Modal.Body>
                </Modal>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="containerMenu">
          <Grid container spacing={6}>
            {dataEspañol.Data.map((s) => {
              if (s["type"].includes(props.selectedRadio)) {
                return (
                  <>
                    <Grid
                      item
                      md={6}
                      sm={12}
                      xs={12}
                      lg={4}
                      xl={4}
                      data-aos="fade-down"
                      data-aos-offset={s["offset"]}
                      data-aos-duration="1000"
                    >
                      <Card className={classes.root}>
                        <CardMedia
                          component="img"
                          height="220"
                          image={"/my-portfolio/Images/" + s["image"]}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {s["title"]}
                          </Typography>

                          <Typography gutterBottom variant="h5" component="h2">
                            {s["icons"].map((i) => {
                              setIcon(i);
                              return <IconComponent></IconComponent>;
                            })}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {s["short_description"]}
                          </Typography>
                        </CardContent>
                        {/* <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            id={s["id"]}
                            onClick={() => {
                              ShowModal(s["id"]);
                            }}
                          >
                            Saber más
                          </Button>
                        </CardActions> */}
                      </Card>
                    </Grid>
                  </>
                );
              } else {
                return null;
              }
            })}
          </Grid>
          {dataEspañol.Data.map((s) => {
            if (selectedProject === s["id"]) {
              return (
                <Modal
                  className="Modal"
                  show={show}
                  onHide={() => {
                    setShow(false);
                  }}
                  size="xl"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{s["title"]}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Carousel>
                      {s["extra_images"].map((i) => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={"/my-portfolio/Images/" + i}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                    <div>
                      <h5>Overview</h5>
                      <div>
                        <p className="justify-text">{s["long_description"]}</p>
                      </div>

                      <h5>Características</h5>
                      <ul>
                        {s["project_characteristics"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>

                      <h5>Tecnologías utilizadas</h5>
                      <ul>
                        {s["list_technologies"].map((i) => {
                          return <li>{i}</li>;
                        })}
                      </ul>
                      <h5>Enlaces</h5>
                      <ul>
                        <li>
                          {" "}
                          <a href={s["github_url"]} target="blank">
                            <p className="Link">
                              Repositorio: <ImGithub></ImGithub>
                            </p>
                          </a>
                        </li>
                        {s["deploy_url"].map((i) => {
                          if (i !== "")
                            return (
                              <li>
                                {" "}
                                <a href={s["deploy_url"]} target="blank">
                                  <p className="Link">
                                    Proyecto hosteado: <GrDeploy></GrDeploy>
                                  </p>
                                </a>
                              </li>
                            );
                          return null;
                        })}
                      </ul>
                    </div>
                  </Modal.Body>
                </Modal>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
  }
}

export default ProjectsMenu;
