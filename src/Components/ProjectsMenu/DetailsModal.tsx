import { Modal, Carousel } from "react-bootstrap/";
import { ImGithub } from "react-icons/im";
import { GrDeploy } from "react-icons/gr";
import dataEnglish from "../../Data/Projects-English.json";
import dataEspañol from "../../Data/Projects-Español.json";

interface IProps {
	language: "English" | "Spanish";
	selectedProject: number;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DetailsModal: React.FC<IProps> = (props) => {
	const { language, selectedProject, show, setShow } = props;

	const dataToMap = language === "English" ? dataEnglish : dataEspañol;

	const translations =
		language === "English"
			? {
					overview: "Overview",
					characteristics: "Characteristics",
					techStack: "Tech stack",
					links: "Links",
					codebase: "Codebase:",
					deployment: "Deployment:",
			  }
			: {
					overview: "Vista general",
					characteristics: "Características",
					techStack: "Stack tecnológico",
					links: "Enlaces",
					codebase: "Repositorio:",
					deployment: "Proyecto hosteado:",
			  };

	return (
		<div>
			{dataToMap.Data.map(
				(element) =>
					selectedProject === element["id"] && (
						<Modal
							className="Modal"
							show={show}
							onHide={() => {
								setShow(false);
							}}
							size="xl"
						>
							<Modal.Header closeButton>
								<Modal.Title>{element["title"]}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Carousel>
									{element["extra_images"].map((i) => {
										return (
											<Carousel.Item style={{ height: "500px" }}>
												<img
													className="d-block w-100 h-100"
													src={"/Images/" + i}
													alt="First slide"
													style={{ objectFit: "contain" }}
												/>
											</Carousel.Item>
										);
									})}
								</Carousel>
								<div>
									<h5>{translations.overview}</h5>
									<div>
										<p className="justify-text">{element["long_description"]}</p>
									</div>

									<h5>{translations.characteristics}</h5>
									<ul>
										{element["project_characteristics"].map((i) => {
											return <li>{i}</li>;
										})}
									</ul>

									<h5>{translations.techStack}</h5>
									<ul>
										{element["list_technologies"].map((i) => {
											return <li>{i}</li>;
										})}
									</ul>
									<h5>{translations.links}</h5>
									<ul>
										<li>
											<a href={element["github_url"]} target="blank">
												<p className="Link">
													{translations.codebase} <ImGithub></ImGithub>
												</p>
											</a>
										</li>
										{element["deploy_url"] && (
											<li>
												{" "}
												<a href={element["deploy_url"]} target="blank">
													<p className="Link">
														{translations.deployment} <GrDeploy></GrDeploy>
													</p>
												</a>
											</li>
										)}
									</ul>
								</div>
							</Modal.Body>
						</Modal>
					),
			)}
		</div>
	);
};
