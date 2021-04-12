import React, { useState, useRef, useEffect } from 'react'

import ProjectsData from '../data/ProjectsData'
import { ReactComponent as ProjectNext } from "../assets/arrow-right.svg";
import { ReactComponent as ProjectPrev } from "../assets/arrow-left.svg";
import { FaReact, FaHtml5, FaCss3, FaPhp, FaLaravel, FaFigma, FaJs, FaSass, FaNodeJs, FaGithub, FaChrome } from 'react-icons/fa'


const Project = ({ slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)
    
    useEffect(() => {
        const nextSlide =  () => {  
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }
        

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
        console.log(current)
    }
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev" onClick={prevSlide}>
                        <ProjectPrev />
                    </div>
                    <div className="cases-arrow next" onClick={nextSlide}>
                    <ProjectNext />
                    </div>
                </div>
                <div className="row">
                {ProjectsData.map((project, index)=> {
                        return (
                            <div className="case" key={index}>
                                {index === current  && (
                                    <div className="case-details">
                                        
                                            <div className="case-details-content">
                                                    <div className="case-infos">
                                                        <h4>{project.name}</h4>
                                                        <span>{project.quote}</span>
                                                        <div className="icon-link">
                                                            <a href={project.github_url} target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
                                                            <a href={project.deploy_url} target="_blank" rel="noopener noreferrer"><FaChrome className="icon" /></a>
                                                        </div>   
                                                   
                                                <div className="case-image">
                                                    <img src={project.image} alt="" />
                                                    </div>
                                                    </div>
                                                       
                                        </div>
                                    </div>
                            
                                )}
                             </div>   
                             
                        )
                    })}
                   
                </div>
            </div>
            
        </section>
    )
}

export default Project

// {ProjectsData.map((projectItem)=> (
//     <div className="case" key={projectItem.id}>
//         <div className="case-details">
//             <span>{projectItem.subtitle}</span>
//             <h4>{projectItem.title}</h4>
//         </div>
//      <div className="case-image">
//      <img src={projectItem.image} alt="" />
//      </div>
//     </div>

// ))}