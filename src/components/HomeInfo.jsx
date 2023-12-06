import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className="am:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">David</span>
            <br />
            A Software Engineer from Las Vegas, NV
        </h1>
    ),
    2: (
        <InfoBox
            text="Throughout my diverse professional journey, I have collaborated with numerous organizations, acquiring a broad spectrum of skills and expertise."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Explore my independent projects, including a notable Fullstack Academy undertaking, on my projects page."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Seeking a skilled developer for your project? I'm just a few clicks away, ready to assist."
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo