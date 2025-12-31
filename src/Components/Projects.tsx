import "../Styles/Projects.css";
import { useState } from "react";
import { FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import ProjectsMenu from "./ProjectsMenu/ProjectsMenu";
import { IProps } from "../interfaces/commonComponentProps";

type radioTypes = "Both" | "Education" | "Experience";

const Projects: React.FC<IProps> = (props) => {
	const { language } = props;
	const [selectedRadio, setSelectedRadio] = useState("All");

	const translations =
		language === "English"
			? {
					title: "Portfolio",
					subtitle: "To view the details of each project, click on the project's card.",
					webDevelopment: "Web Development",
					dataScience: "Data Science",
					all: "All",
			  }
			: {
					title: "Portafolio",
					both: "Para ver los detalles de cada proyecto, haz click en la tarjeta de cada proyecto.",
					webDevelopment: "Desarrollo Web",
					dataScience: "Ciencia de Datos",
					all: "Todos",
			  };

	return (
		<div className="Projects" id="Projects">
			<h1 className="EducationExperienceTitle">{translations.title}</h1>
			<h5 className="EducationExperienceSubtitle">{translations.subtitle}</h5>
			<div className="RadioButtons">
				<FormControl
					component="fieldset"
					onChange={(e) => {
						setSelectedRadio((e.target as HTMLInputElement).value as radioTypes);
					}}
				>
					<RadioGroup row aria-label="options" name="options" defaultValue="All">
						<FormControlLabel value="Web" control={<Radio />} label={translations.webDevelopment} />
						<FormControlLabel value="DataScience" control={<Radio />} label={translations.dataScience} />
						<FormControlLabel value="All" control={<Radio />} label={translations.all} />
					</RadioGroup>
				</FormControl>
			</div>
			<div className="containerProjects">
				<ProjectsMenu selectedRadio={selectedRadio} language={props.language}></ProjectsMenu>
			</div>
		</div>
	);
};

export default Projects;
