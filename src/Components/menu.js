import '../Styles/menu.css';
import {Link} from 'react-scroll';

function menu(props){
    if(props.language === "English"){
        return(
            <div class="timeline" data-aos="flip-left" data-aos-duration="1500">
    
                <div class="container right">
                    <Link to="HomePage" smooth={false} duration={1750}>
                        <div class="content">
                        Home page
                        </div>
                    </Link>
                </div>
    
                <div class="container right">
                    <Link to="AboutMe" smooth={false} duration={1750}>
                        <div class="content">
                        About me
                        </div>
                    </Link>
                </div>
                <div class="container right">
                    <Link to="Skills" smooth={false} duration={1750}>
                        <div class="content">
                        Skills
                        </div>
                    </Link>
                </div>
                <div class="container right">
                    <Link to="Education_Experience" smooth={false} duration={1750}>
                        <div class="content">
                        Education and Experience
                        </div>
                    </Link>
                </div> 
                <div class="container right">
                    <Link to="Projects" smooth={false} duration={1750}>
                        <div class="content">
                        Portfolio
                        </div>
                    </Link>
                </div>
    
            </div>
        )
    }else{
        return(
            <div class="timeline" data-aos="flip-left" data-aos-duration="1500">
    
                <div class="container right">
                    <Link to="HomePage" smooth={false} duration={1750}>
                        <div class="content">
                        Página de Inicio
                        </div>
                    </Link>
                </div>
    
                <div class="container right">
                    <Link to="AboutMe" smooth={false} duration={1750}>
                        <div class="content">
                        Sobre mí
                        </div>
                    </Link>
                </div>
                <div class="container right">
                    <Link to="Skills" smooth={false} duration={1750}>
                        <div class="content">
                        Habilidades
                        </div>
                    </Link>
                </div>
                <div class="container right">
                    <Link to="Education_Experience" smooth={false} duration={1750}>
                        <div class="content">
                        Educación y Experiencia
                        </div>
                    </Link>
                </div> 
                <div class="container right">
                    <Link to="Projects" smooth={false} duration={1750}>
                        <div class="content">
                        Proyectos personales
                        </div>
                    </Link>
                </div>
    
            </div>
        )
    }
    

}

export default menu;