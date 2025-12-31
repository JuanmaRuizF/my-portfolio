import "../Styles/Timeline.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import dataEnglish from "../Data/Education_Experience-English.json";
import dataSpanish from "../Data/Education_Experience-Español.json";

interface IProps {
	language: "English" | "Spanish";
	selectedRadio: string;
}
const HorizontalTimeline: React.FC<IProps> = (props) => {
	const { language, selectedRadio } = props;

	const dataToMap = language === "English" ? dataEnglish : dataSpanish;

	switch (selectedRadio) {
		case "Experience": {
			return (
				<VerticalTimeline>
					{dataToMap.Data.map((s) => {
						if (s["type"] === "Experience")
							return (
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{ background: s["colors"], color: "#fff" }}
									contentArrowStyle={{
										borderRight: "7px solid  rgb(33, 150, 243)",
									}}
									date={s["date"]}
									iconStyle={{ background: s["colors"], color: "#fff" }}
									icon={<MdWork />}
								>
									<h3 className="vertical-timeline-element-title">{s["title"]}</h3>
									<h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
									<p>{s["description"]}</p>
								</VerticalTimelineElement>
							);
						return null;
					})}
				</VerticalTimeline>
			);
		}
		case "Education": {
			return (
				<VerticalTimeline>
					{dataToMap.Data.map((s) => {
						if (s["type"] === "Education")
							return (
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{ background: s["colors"], color: "#fff" }}
									contentArrowStyle={{
										borderRight: "7px solid  rgb(33, 150, 243)",
									}}
									date={s["date"]}
									iconStyle={{ background: s["colors"], color: "#fff" }}
									icon={<FaGraduationCap />}
								>
									<h3 className="vertical-timeline-element-title">{s["title"]}</h3>
									<h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
									<p>{s["description"]}</p>
								</VerticalTimelineElement>
							);
						return null;
					})}
				</VerticalTimeline>
			);
		}
		default: {
			return (
				<VerticalTimeline>
					{dataToMap.Data.map((element) => {
						return (
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{ background: element["colors"], color: "#fff" }}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(33, 150, 243)",
								}}
								date={element["date"]}
								iconStyle={{ background: element["colors"], color: "#fff" }}
								icon={<MdWork />}
							>
								<h3 className="vertical-timeline-element-title">{element["title"]}</h3>
								<h4 className="vertical-timeline-element-subtitle">{element["subtitle"]}</h4>
								<p>{element["description"]}</p>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			);
		}
	}
};
export default HorizontalTimeline;
