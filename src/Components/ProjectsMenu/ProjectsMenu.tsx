import "../../Styles/ProjectsMenu.css";
import dataEnglish from "../../Data/Projects-English.json";
import dataEspañol from "../../Data/Projects-Español.json";
import React from "react";
import { DiPython, DiReact, DiRubyRough, DiMysql, DiAngularSimple } from "react-icons/di";
import { SiJupyter, SiFirebase, SiTensorflow, SiReactrouter, SiLeaflet } from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Grid, Typography, CardMedia, CardContent, Card } from "@material-ui/core/";
import { DetailsModal } from "./DetailsModal";

const useStyles = makeStyles({
	root: {
		maxWidth: 430,
		cursor: "pointer",
		height: "425px",
	},
});

interface IProps {
	language: "English" | "Spanish";
	selectedRadio: string;
}

const ProjectsMenu: React.FC<IProps> = (props) => {
	const { language, selectedRadio } = props;

	const [show, setShow] = useState(false);
	const [selectedProject, setselectedProject] = useState(0);
	const classes = useStyles();

	const dataToMap = language === "English" ? dataEnglish : dataEspañol;

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

	function setIcon(iconName: string) {
		IconComponent = components[iconName];
	}

	function showModal(selectedProject) {
		setShow(true);
		setselectedProject(selectedProject);
	}

	switch (selectedRadio) {
		case "All": {
			return (
				<div className="containerMenu">
					<Grid container spacing={6}>
						{dataToMap.Data.map((element) => {
							return (
								<Grid item md={6} sm={12} xs={12} lg={4} xl={4}>
									<Card
										className={classes.root}
										onClick={() => {
											showModal(element["id"]);
										}}
									>
										<CardMedia component="img" height="220" image={"/Images/" + element["image"]} />
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{element["title"]}
											</Typography>

											<Typography gutterBottom variant="h5" component="h2">
												{element["icons"].map((i) => {
													setIcon(i);
													return <IconComponent></IconComponent>;
												})}
											</Typography>

											<Typography variant="body2" color="textSecondary" component="p">
												{element["short_description"]}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							);
						})}
					</Grid>
					<DetailsModal language={language} selectedProject={selectedProject} show={show} setShow={setShow} />
				</div>
			);
		}
		default: {
			return (
				<div className="containerMenu">
					<Grid container spacing={6}>
						{dataEnglish.Data.map(
							(element) =>
								element["type"].includes(props.selectedRadio) && (
									<Grid item md={6} sm={12} xs={12} lg={4} xl={4}>
										<Card
											className={classes.root}
											onClick={() => {
												showModal(element["id"]);
											}}
										>
											<CardMedia component="img" height="220" image={"/Images/" + element["image"]} />
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													{element["title"]}
												</Typography>

												<Typography gutterBottom variant="h5" component="h2">
													{element["icons"].map((i) => {
														setIcon(i);
														return <IconComponent></IconComponent>;
													})}
												</Typography>

												<Typography variant="body2" color="textSecondary" component="p">
													{element["short_description"]}
												</Typography>
											</CardContent>
										</Card>
									</Grid>
								),
						)}
					</Grid>
					<DetailsModal language={language} selectedProject={selectedProject} show={show} setShow={setShow} />
				</div>
			);
		}
	}
};

export default ProjectsMenu;
