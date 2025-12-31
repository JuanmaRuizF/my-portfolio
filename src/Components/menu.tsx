import { IProps } from "interfaces/commonComponentProps";
import "../Styles/menu.css";
import { Link } from "react-scroll";

const menu: React.FC<IProps> = (props) => {
	const { language } = props;

	const translations =
		language === "English"
			? {
					homePage: "Home page",
					aboutMe: "About me",
					skills: "Skills",
					educationExperience: "Education and Experience",
					portfolio: "Porfolio",
			  }
			: {
					homePage: "Página de Inicio",
					aboutMe: "Sobre mí",
					skills: "Habilidades",
					educationExperience: "Educación y Experiencia",
					portfolio: "Proyectos personales",
			  };

	return (
		<div className="timeline" data-aos="flip-left" data-aos-duration="1500">
			<div className="container right">
				<Link to="HomePage" smooth={false} duration={1750}>
					<div className="content">{translations.homePage}</div>
				</Link>
			</div>

			<div className="container right">
				<Link to="AboutMe" smooth={false} duration={1750}>
					<div className="content">{translations.aboutMe}</div>
				</Link>
			</div>
			<div className="container right">
				<Link to="Skills" smooth={false} duration={1750}>
					<div className="content">{translations.skills}</div>
				</Link>
			</div>
			<div className="container right">
				<Link to="Education_Experience" smooth={false} duration={1750}>
					<div className="content">{translations.educationExperience}</div>
				</Link>
			</div>
			<div className="container right">
				<Link to="Projects" smooth={false} duration={1750}>
					<div className="content">{translations.portfolio}</div>
				</Link>
			</div>
		</div>
	);
};

export default menu;
