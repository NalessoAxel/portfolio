import React, { useState, useRef, useEffect } from 'react'
import { FaReact, FaHtml5, FaCss3, FaPhp, FaLaravel, FaFigma, FaJs, FaSass, FaNodeJs, FaGithub, FaChrome } from 'react-icons/fa'
import {ReactComponent as PrevArrow} from '../assets/arrow-left.svg'
import {ReactComponent as NextArrow} from '../assets/arrow-right.svg'
import ProjectData from '../data/ProjectsData'
import 'resetcss'




const CaseStudies = ({ slides }) => {
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
        <>
            <div className="page hero-section">
                <div className="hero-wrapper">
                    {ProjectData.map((project, index)=> {
                        return (
                            <div className="hero-slide" key={index}>
                                {index === current  && (
                                    <div className="hero-slider">
                                    <div className="hero-image">
                                        <img src={project.image} alt="" />
                                        </div>
                                        <div className="hero-content">
                                            <h1>{project.name}</h1>
                                            <p>{project.quote}</p>
                                            <div className="icon-link">
                                            <a href={project.github_url} target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
                                            <a href={project.deploy_url} target="_blank" rel="noopener noreferrer"><FaChrome className="icon" /></a>
                                            </div>
                                            
                                            
                                        </div>
                                </div>
                            
                                )}
                             </div>   
                             
                        )
                    })}
                    <div className="slider-buttons">
                    <PrevArrow className="arrow" onClick={prevSlide}/>
                    <NextArrow className="arrow" onClick={nextSlide}/>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies
