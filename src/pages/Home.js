import React, { useEffect, useState} from 'react'
import Banner from '../components/Banner'

import Project from "../components/Project";
import IntroOverlay from "../components/IntroOverlay";
import gsap from 'gsap'
import ProjectData from '../data/ProjectsData'

const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {
    tl.from(".line span", 1.3, {
        opacity: 0,
        y: 100,
        ease: 'power4.out',
        delay: 1,
        skewY: 7,
        stagger: {
          amout: 0.3
        }
      }).to('.overlay-top', 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4
      }).to('.overlay-bottom', 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -.8,
        stagger: {
          amout: 0.4
        }
      }).to('.intro-overlay', 0, {css:{display: 'none'}})
      .from('.case-image img', 1.6, {
        scale: 2,
        ease: "expo.inOut",
        delay: -1,
        stagger: {
          amout: 0.4
        },
        onComplete: completeAnimation
      })
}
const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false)

    const completeAnimation = () => {
        setAnimationComplete(true)
    }
    useEffect(()=> {
        homeAnimation(completeAnimation)
        
    
      },[])
    return (
        <>
        {animationComplete === false ? <IntroOverlay />: ""}
            
            <Banner />
            <Project slides={ProjectData}/>

        </>
    )
}

export default Home
