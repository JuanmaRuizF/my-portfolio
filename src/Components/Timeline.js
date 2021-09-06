import '../Styles/Timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import dataEnglish from '../Data/Education_Experience-English.json'
import dataSpanish from '../Data/Education_Experience-Español.json'

function HorizontalTimeline(props){
    if(props.language === "English"){
        if(props.selectedRadio === "Experience"){

            return(
                <VerticalTimeline>
                    {dataEnglish.Data.map(s =>{
                        if(s["type"] === "Experience")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={<MdWork />}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                        return null
                    })}
                </VerticalTimeline>
            )
        }else if(props.selectedRadio ==="Education"){
            console.log(props.selectedRadio)
            return(
                <VerticalTimeline>
                    {dataEnglish.Data.map(s =>{
                        if(s["type"] === "Education")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={< FaGraduationCap/>}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                        return null
                    })}
                </VerticalTimeline>
            )
        }else{
            return(
                <VerticalTimeline>
                    {dataEnglish.Data.map(s =>{
                        if(s["type"] === "Experience")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={<MdWork />}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={< FaGraduationCap/>}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                    })}
                </VerticalTimeline>
            )
        }
    
    }else{
        if(props.selectedRadio === "Experience"){

            return(
                <VerticalTimeline>
                    {dataSpanish.Data.map(s =>{
                        if(s["type"] === "Experience")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={<MdWork />}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                        return null
                    })}
                </VerticalTimeline>
            )
        }else if(props.selectedRadio ==="Education"){
            console.log(props.selectedRadio)
            return(
                <VerticalTimeline>
                    {dataSpanish.Data.map(s =>{
                        if(s["type"] === "Education")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={< FaGraduationCap/>}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                        return null
                    })}
                </VerticalTimeline>
            )
        }else{
            return(
                <VerticalTimeline>
                    {dataSpanish.Data.map(s =>{
                        if(s["type"] === "Experience")
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 114, 189)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={<MdWork />}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                            return(
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: s["colors"], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={s["date"]}
                                iconStyle={{ background: s["colors"], color: '#fff' }}
                                icon={< FaGraduationCap/>}
                                >
                                <h3 className="vertical-timeline-element-title">{s["title"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{s["subtitle"]}</h4>
                                <p>
                                    {s["description"]}
                                </p>
                                </VerticalTimelineElement>
                            )
                    })}
                </VerticalTimeline>
            )
        }
    
    }
    
    
    }
    
export default HorizontalTimeline