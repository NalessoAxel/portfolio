import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as RightArrow} from '../assets/arrow-right.svg'
import {ReactComponent as LeftArrow} from '../assets/arrow-left.svg'

const Banner = () => {
    return ( <section className="main">
        <div className="container">
            <div className="row">
                <h2>
                    <div className="line">
                        <span>Hi, i'm Axel Nalesso.</span>
                    </div>
                    <div className="line">
                        <span>I'm a junior front-end developer,</span>
                    </div>
                    <div className="line">
                        <span>From in Brussels, Belgium.</span>
                    </div>
                </h2>
                <div className="btn-row">
                    <Link to="/about">More about me. <RightArrow className="right" />
                    </Link>
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner
