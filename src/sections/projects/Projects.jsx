
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/pii.png'
import p3 from '../../assets/pic.png'
import p4 from '../../assets/ppp.png'
import p5 from '../../assets/pi.png'
import p6 from '../../assets/pp.png'
import './projects.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    
      <h1>Portfolio <g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></h1>
     <br />
      <div className='container portfolio_container'>
      <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p1} alt="Hospital-Management-System" />
          </div>
          <h4>Hospital Management System</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/Hospital-Management-System" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p2} alt="flght" />
          </div>
          <h4>Flight Delation and Cancellation</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/Flight-Delation-and-Cancelation" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p3} alt="visualizer" />
          </div>
          <h4>Sorting Algorithms Visualizer</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/Visualizer-Sorting-Algorithms" className='btn' target='_blank'>Github</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p6} alt="unix" />
          </div>
          <h4>Unix Shell Scripting</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/Unix-Shell" className='btn' target='_blank'>Github</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p4} alt="calculator" />
          </div>
          <h4>CGPA and GPA Calculator</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/GPA-CGPA-Calculator" className='btn' target='_blank'>Github</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={p5} alt="cricket" />
          </div>
          <h4>Cricket Score Board</h4>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Fatima-Malikk/Cricket-Score-Board" className='btn' target='_blank'>Github</a>
       </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
