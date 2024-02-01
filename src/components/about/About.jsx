import React from 'react'
import './about.css'
import ME from '../../assets/profession.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Software Engineer</h5>
              <small>General Assembly Bootcamp Grad</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Digital Marketer</h5>
              <small>4+ Years Work Experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Background Performer</h5>
              <small>Voicing, Acting, Television, Film, Photography</small>
            </article>
          </div>

          <p>
          I am a Software Developer with a passion for digital storytelling and lifelong learning. With a background in arts and nonprofit communications, I have the knack for multitasking, keen insight, and calm demeanor to produce applications that create emotional connections with the consumer and make information more memorable. New challenges excite and inspire me to foster positive solutions and contribute to a larger collective of ideas. From performing artist to engineer, I’m motivated to use web development as a new medium to enhance beauty and meaning in the world.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About