import "bootstrap/dist/css/bootstrap.min.css";

import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {BiHappyHeartEyes} from 'react-icons/bi'
import './about.css'
import CV from '../../assets/Resumee.pdf'
import {HiDownload} from 'react-icons/hi'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/ast2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const About = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineering Student" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section id='about'>
            <section className="banner" id="home">
            <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require('../../assets/bg-vid.mp4')} type='video/mp4'/>
            </video>
        </div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h1 className="h"><g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji>{`Hi! I'm Fatima Malik`} </h1> 
                <h2> <span className="txt-rotate" dataPeriod="200" data-rotate='[ "Software Engineering Student" ]'><span className="wrap">{text}</span></span></h2>
                <br />
                  <p>I'm a passionate and innovative software engineering student (Final year) at <b><b>Fast NUCES</b></b> specializing in developing solutions to complex problems. With a strong background in programming languages, I thrive on creating dynamic websites and applications using technologies such as Mern Stack, Java. I am a dedicated and detail-oriented individual, always striving for excellence in my work.</p>
                  <div id="banner_content">
                 
        <br />
                    <div className="banner_cards">
                      <article className="banner_card">
                        <FaAward className="banner_icon"/>
                        <h5>Experience</h5>
                        <small>Fresher, Have done few freelancing projects</small>
                      </article>
                      <article className="banner_card">
                        <TbBooks className="banner_icon"/>
                        <h5>Education</h5>
                        <small>BS(Software Engineering) from Fast NUCES</small>
                      </article>
                      <article className="banner_card">
                        <BiHappyHeartEyes className="banner_icon"/>
                        <h5>Skills</h5>
                        <small>Mern Stack, Java, Software Testing</small>
                      </article>
                    </div>
                  </div>
                  <a href={CV} download className='btn primary'>Download Resume <HiDownload/> </a>
              </div>}
            </TrackVisibility>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="hh"src={headerImg} alt="Header Img"  />
                </div>}
            </TrackVisibility>
            
          </Col>
        </Row>
      </Container>
      
      </section>
   </section>
    )
}

export default About
