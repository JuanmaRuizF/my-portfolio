
import '../Styles/Education_Experience.css';
import HorizontalTimeline from './Timeline';
import { FormControl,FormControlLabel,RadioGroup, Radio } from '@material-ui/core';
import { useState } from 'react';


function Education_Experience(props){
    const [selectedRadio, setSelectedRadio] = useState("Both");

    if(props.language === "English"){
        return(
            <div className="Education_Experience1"  >
                <div data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <h1 className="EducationExperienceTitle" id="Education_Experience">Education and Experience</h1>
                </div>
                
    
                <div className="RadioButtons" >
                    <FormControl component="fieldset" value={selectedRadio} onChange={(e) =>{
                        setSelectedRadio(e.target.value)
                    }}>
                    
                        <RadioGroup row aria-label="options" name="options" defaultValue="Both">
                            <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
                            <FormControlLabel value="Education" control={<Radio />} label="Education" />
                            <FormControlLabel value="Both" control={<Radio />} label="Both" />
                        </RadioGroup>
                    </FormControl>
                    
                </div>
                <HorizontalTimeline selectedRadio={selectedRadio} language={props.language}></HorizontalTimeline>
            </div>
        )
    }else{
        return(
            <div className="Education_Experience1"  >
                <div data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <h1 className="EducationExperienceTitle" id="Education_Experience">Educación y experiencia</h1>
                </div>
                
    
                <div className="RadioButtons" >
                    <FormControl component="fieldset" value={selectedRadio} onChange={(e) =>{
                        setSelectedRadio(e.target.value)
                    }}>
                    
                        <RadioGroup row aria-label="options" name="options" defaultValue="Both">
                            <FormControlLabel value="Experience" control={<Radio />} label="Experiencia" />
                            <FormControlLabel value="Education" control={<Radio />} label="Educación" />
                            <FormControlLabel value="Both" control={<Radio />} label="Ambos" />
                        </RadioGroup>
                    </FormControl>
                    
                </div>
                <HorizontalTimeline selectedRadio={selectedRadio} language={props.language}></HorizontalTimeline>
            </div>
        )
    }

}

export default Education_Experience
