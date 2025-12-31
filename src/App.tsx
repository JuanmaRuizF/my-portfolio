import "./Styles/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Components/menu";
import HomePage from "./Components/HomePage";
import EducationExperience from "./Components/EducationExperience.tsx";
import Projects from "./Components/Projects";
import React, { useEffect, useState } from "react";
import AboutMe from "./Components/AboutMe.tsx";

function useWindowSize() {
	const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

const App: React.FC = () => {
	const [language, setLanguage] = React.useState<"English" | "Spanish">("English");

	AOS.init();
	const size = useWindowSize();
	return (
		<div className={size["width"] && size["width"] > 1800 ? "" : "mobile"}>
			{size["width"] && size["width"] > 1800 && <Menu language={language} />}
			<HomePage language={language} setLanguage={setLanguage} />
			<AboutMe language={language} />
			<EducationExperience language={language} />
			<Projects language={language} />
		</div>
	);
};

export default App;
