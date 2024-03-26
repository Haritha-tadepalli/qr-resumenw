import React from 'react';
import './App.css'; 
import dwiti from './files/dwiti.jpeg'
import sir from './files/sir.jpeg'
import { AiOutlineLinkedin} from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils.js/particles";
import dwitiCV from './files/dwitiCV.pdf'
import sirCV from './files/sirCV.pdf'

const ProfilePage = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const renderParticlesJsInHomePage = true;

  const size = "2.25rem"

  const dwitiEmail = "dwitishvanaparthi17@gmail.com";
  const sirEmail = "siddhartha@iitism.ac.in"

  const dwitiSendMail = () => {
    window.location.href = `mailto:${dwitiEmail}`;
  };

  const sirSendMail = () => {
    window.location.href = `mailto:${sirEmail}`;
  };

  return (
    <section className='main'>
      {/* {renderParticlesJsInHomePage && <Particles id="particles" options={particles} init={particlesInit} />} */}
      <div className='row1'>
        <div className='pic_links'>
          <img src={dwiti} alt="Passport Photo 1" className="passport-photo" />
          <div className='links'>
            <a className="linked" href="https://www.linkedin.com/in/dwitish-vanaparthi-b18a2320b/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size = {size} />
            </a>
            <HiOutlineMail className="mail" size={size} onClick={dwitiSendMail} />
            <a href={dwitiCV} download className="downloadCV" >
              <FaFileDownload size = {size}/>
            </a>
          </div>
        </div>
        <div className='profile_summary'>
          <h1 className='name'>Vanaparthi V S S Dwitish Manikanta</h1>
          <h3 className='college'>Post graduate, Chemical Engineering, Indian Institute of Technology (ISM) DHANBAD</h3>
        </div>
      </div>
      <div className='row1'>
        <div className='pic_links'>
          <img src={sir} alt="Passport Photo 1" className="passport-photo" />
          <div className='links'>
            <a className="linked" href="https://www.linkedin.com/in/siddhartha-sengupta-40217186/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size = {size} />
            </a>
            <HiOutlineMail className="mail" size={size} onClick={sirSendMail} />
            <a href={sirCV} download className="downloadCV" >
            <FaFileDownload size = {size}/>
            </a>
          </div>
        </div>
        <div className='profile_summary'>
          <h1 className='name'>Prof Siddhartha Sengupta</h1>
          <h3 className='college'>Associate Professor, Indian Institute of Technology (ISM) Dhanbad</h3>
        </div>
  </div>
    </section>
  );
};

export default ProfilePage;
