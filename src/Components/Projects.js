import '../Styles/Projects.css';
import { useState } from 'react';
import { FormControl,FormControlLabel,RadioGroup, Radio } from '@material-ui/core';
import ProjectsMenu from './ProjectsMenu';
function Projects(props){
    const [selectedRadio, setSelectedRadio] = useState("All");

    if(props.language ==="English"){
        return(
            <div className="Projects" id="Projects" >
                <h1 className="EducationExperienceTitle">Portfolio</h1>
    
                <div className="RadioButtons">
                    <FormControl component="fieldset" value={selectedRadio} onChange={(e) =>{
                        setSelectedRadio(e.target.value)
                    }}>
                    
                        <RadioGroup row aria-label="options" name="options" defaultValue="All">
                            <FormControlLabel value="Web" control={<Radio />} label="Web Development" />
                            <FormControlLabel value="DataScience" control={<Radio />} label="Data Science" />
                            <FormControlLabel value="All" control={<Radio />} label="All" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="containerProjects">
                    <ProjectsMenu selectedRadio={selectedRadio} language={props.language}></ProjectsMenu> 
                </div>
            </div>
        )
    }else{
        return(
            <div className="Projects" id="Projects" >
                <h1 className="EducationExperienceTitle">Proyectos propios</h1>
    
                <div className="RadioButtons">
                    <FormControl component="fieldset" value={selectedRadio} onChange={(e) =>{
                        setSelectedRadio(e.target.value)
                    }}>
                    
                        <RadioGroup row aria-label="options" name="options" defaultValue="All">
                            <FormControlLabel value="Web" control={<Radio />} label="Desarrollo web" />
                            <FormControlLabel value="DataScience" control={<Radio />} label="Ciencia de datos" />
                            <FormControlLabel value="All" control={<Radio />} label="Todos" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="containerProjects">
                    <ProjectsMenu selectedRadio={selectedRadio} language={props.language}></ProjectsMenu> 
                </div>
            </div>
        )
    }
}

export default Projects