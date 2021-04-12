import React, { useRef, useEffect } from 'react'
import Cv from '../assets/cv_english.pdf'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { gsap } from "gsap";



const About = () => {

       let line1 = useRef(null)
       let line2 = useRef(null)
       let line3 = useRef(null)
        
    
    
    useEffect(() => {
       gsap.from([line1, line2, line3], 0.8, {
           delay: .4,
           ease: "power3.out",
           y: 84,
           opacity: 0,
           stagger: {
               amount: .15
           }
       })
    }, [line1, line2, line3])
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="about">
                        <div className="title-about">
                            <h1>
                                <div ref={el => (line1 = el)} className="line">
                                    <span>NALESSO AXEL</span>
                                </div>
                                
                            </h1>
                        </div>
                    <div ref={el => (line2 = el)} className="about-content">
                                
                                    
                                        <p className="para-content">I'm a Brussels based junior front end developer.<br></br> As a junior developer, I try everyday to learn as much as posible from the experience I have and the people I meet.</p>
                                        <p className="para-content"> I have some knowledge at :</p>
                                            <ul className="competence-content">
                                                <li className="competence-content-list">- Code front-end stuff (HTML,CSS,JAVASCRIPT,SASS)</li>
                                                <li className="competence-content-list">- Work with JAVASCRIPT framework/librairie(React, GSAP)</li>
                                                <li className="competence-content-list">- Manage back-end (PHP, LARAVEL, WORDPRESS)</li>
                                                <li className="competence-content-list">- Create mockup, protype (Figma)</li>
                                            </ul>
                                            <p className="para-content">Curently a the end of my trainee at <a href="https://becode.org/learn/junior-web-developer/" target="_blank" rel="noopener noreferrer">BeCode</a>.<br></br> I've learned a lot during my trainee but still hungry to learn new stuff.
                                            <p className="para-content">I'm now looking to gain some experience with an intership.</p><br></br>
                                        </p>   
                                </div>   
                                <div ref={el => (line3 = el)} className="btn-link">
                               <a href={Cv} download> 
                               <button >Download my CV</button>
                               </a>
                               
                                <li className="nav-info-social">
                                <a className="nav-info-social-link" href="https://github.com/NalessoAxel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a className="nav-info-social-link" href="https://www.linkedin.com/in/axel-nalesso/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a className="nav-info-social-link" href="https://twitter.com/Exalus6" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            </li>
                            </div>     
                        </div>
                    </div>       
                </div>
            </div>   
    )
}

export default About
