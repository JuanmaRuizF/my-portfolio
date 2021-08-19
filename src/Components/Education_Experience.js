
import '../Styles/Education_Experience.css';
import HorizontalTimeline from './Timeline';
import { FormControl,FormControlLabel,RadioGroup, Radio } from '@material-ui/core';
import { useState } from 'react';


function Education_Experience(){
    const [selectedRadio, setSelectedRadio] = useState("Both");

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
            <HorizontalTimeline selectedRadio={selectedRadio}></HorizontalTimeline>
        </div>
    )
}

export default Education_Experience
