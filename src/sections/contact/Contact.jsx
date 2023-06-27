import './contact.css'
import git from '../../assets/git.png'
import link from '../../assets/link.png'
import gm from '../../assets/gmail.png'

const Contact = () => {
  return (
    <section id='contact'>
    
    <><br></br>
    <br />
    <br />
    
    <h1 className='cont'>
      <animated-image data-catalyst=""><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/ec0df7b334d15078e980be8f26f35f1bd6f004eaa4a121db42fed361360c1817/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c6e516a7057614f4e386e68723231764e572f67697068792e676966" data-target="animated-image.originalLink"><img src="https://camo.githubusercontent.com/ec0df7b334d15078e980be8f26f35f1bd6f004eaa4a121db42fed361360c1817/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c6e516a7057614f4e386e68723231764e572f67697068792e676966" data-canonical-src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" data-target="animated-image.originalImage" /></a>

        <svg aria-hidden="true" focusable="false" class="octicon icon-pause" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="3" height="12" rx="1"></rect>
          <rect x="9" y="2" width="3" height="12" rx="1"></rect>
        </svg>

      </animated-image>
      Let's Connect
    </h1>
    <em className='pp'><b> Let's connect and explore the possibilities together! :)</b> </em>
        
        <>
        <div className='links'>
          <a href="https://github.com/Fatima-Malikk" target="_blank">
            <img src={git} />
          </a><a href="https://www.linkedin.com/in/fatima-malik-b9510921b" target="_blank">
              <img src={link} alt="" />
            </a><a href="mailto:fatimamalik1642@gmail.com">
              <img src={gm} alt="" />
            </a></div></>
            
           
    </>
    </section>
  )
}

export default Contact