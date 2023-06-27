import './services.css'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'


const Services = () => {
  return (
    <section id="services">
    

      <h1 className='ss'>Services <animated-image className='ani' data-catalyst="" ><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/63371d36886ee658f5a97401f393e1ab1684b2fd3de674b8f5efc7d410b2a3d0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57556c706c634d704f43456d5447427442572f67697068792e676966" data-target="animated-image.originalLink"><img src="https://camo.githubusercontent.com/63371d36886ee658f5a97401f393e1ab1684b2fd3de674b8f5efc7d410b2a3d0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57556c706c634d704f43456d5447427442572f67697068792e676966" data-canonical-src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" data-target="animated-image.originalImage"/></a>
      </animated-image></h1>
      <br />

      <div className='container service_container'>
      <article className='service_item'>
        <div className='layer'>
          <div className='service_item-image'>
            <img src={s1} alt="Web-Development" />
          </div>
          <h3>Full Stack Developer</h3>
          <div className="services_item-cta">
            <p>🔭 strong background in programming languages like JavaScript, HTML5, CSS, and backend technologies such as PHP, Node.js, and Java, she excels in building innovative solutions for complex problems.</p>
              
            </div>
          </div>
        </article>
        <article className='service_item'>
          <div className='service_item-image'>
            <img src={s2} alt="Web-Development" />
          </div>
          <h3>Software Quality Assurance</h3>
          <div className="services_item-cta">
            <p>🔭I have strong understanding of software testing principles, methodologies, and best practices. I am well-versed in creating test plans, conducting regression testing, and performing defect tracking and reporting. </p>
            </div>
        </article>
        <article className='service_item'>
          <div className='service_item-image'>
            <img src={s3} alt="Web-Development" />
          </div>
          <h3>Software Engineering</h3>
          <div className="services_item-cta">
            <p>🔭 I have a solid foundation in various areas of software development with a strong understanding of software design and architecture, software requirements engineering, data structures, software testing, and the software development life cycle (SDLC). </p>
          </div>
        </article>
        <article className='service_item'>
        <div className='layer'>
          <div className='service_item-image'>
            <img src={s4} alt="Web-Development" />
          </div>
          <h3>Java Development</h3>
          <div className="services_item-cta">
            <p>🔭 I'm proficient in Java JSP and Servlets, I have also gained expertise in Java Spring Boot framework, Spring framework's architecture, dependency injection, and other key features</p>
          </div>
          </div>
        </article>
        </div>
        <br />
        <hr />
      </section>
  )
}
 
export default Services