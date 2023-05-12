import "../Styles/Education_Experience.css";
import { IProps } from "../interfaces/commonComponentProps";
import HorizontalTimeline from "./Timeline";
import { FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import React from "react";

type radioTypes = "Both" | "Education" | "Experience";
const EducationExperience: React.FC<IProps> = (props) => {
	const { language } = props;

	const [selectedRadio, setSelectedRadio] = React.useState<radioTypes>("Both");

	const translations =
		language === "English"
			? {
					title: "Education and Experience",
					both: "Both",
					experience: "Experience",
					education: "Education",
			  }
			: {
					title: "Educación y experiencia",
					both: "Ambos",
					experience: "Experiencia",
					education: "Educación",
			  };

	return (
		<div className="Education_Experience1">
			<div data-aos="fade-right" data-aos-easing="ease-in-sine">
				<h1 className="EducationExperienceTitle" id="Education_Experience">
					{translations.title}
				</h1>
			</div>

			<div className="RadioButtons">
				<FormControl
					component="fieldset"
					onChange={(e) => {
						setSelectedRadio((e.target as HTMLInputElement).value as radioTypes);
					}}
				>
					<RadioGroup row aria-label="options" name="options" defaultValue={translations.both}>
						<FormControlLabel value="Experience" control={<Radio />} label={translations.experience} />
						<FormControlLabel value="Education" control={<Radio />} label={translations.education} />
						<FormControlLabel value="Both" control={<Radio />} label={translations.both} />
					</RadioGroup>
				</FormControl>
			</div>

			<HorizontalTimeline selectedRadio={selectedRadio} language={language}></HorizontalTimeline>
		</div>
	);
};

export default EducationExperience;
