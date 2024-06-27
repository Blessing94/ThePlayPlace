import './main.css';
import MainImg from './py.jpg';
import BackgroundImg from './po.jpg';
import backgroundVideo from './V1.mp4';
import Toys from './toys.png';
import stemImg1 from './stem-img1.jpg';
import stemImg2 from './stem-img2.jpg';
import stemImg3 from './stem-img3.jpg';
import stemImg4 from './stem-img4.jpg';
import stemImg5 from './stem-img5.jpg';
import stemImg6 from './stem-img7.jpg';

function Main() {

    return (
    <div className="main-page-container">
<div className='hero-container'>
<div className='hero'>
<div className='main-text'>
       <h1>Discover Playful Events</h1>
       <h2>Creating a Village Through Play.</h2>
       <p>Elevate your play place experience with our seamless event creation and sharing capabilities.
          Let clients RSVP and join in on the fun!
          Whether you're seeking a vibrant play group, an enchanting play place, a curated toy subscription or the perfect playmate
          for your little one, you've arrived at the  right PLACE. </p> 
          </div>
       <div className='hero-button-container'>
           <button className="hero-button">JOIN THE WAIT LIST →</button>
       </div>   
</div>
 {/********  Main page Image ********* */}
<div className="hero">
       <div className="img-container">
       <img className='main-img' src= {MainImg}/>
       </div>
</div>
</div>

{/********  Main page Cards ********* */}
<h1>Check out our offering</h1>
<div className='main-page-cards'>  
<div className="card-container1">
  <a className="main-page-card" href="#">
    <h3>Create an Event</h3>
    <p className="small">Card description with lots of great facts and interesting details.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>

  <div className="card-container2">
  <a className="main-page-card" href="#">
    <h3>Find Play Groups</h3>
    <p className="small">Card description with lots of great facts and interesting details.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>

  <div className="card-container3">
  <a className="main-page-card" href="#">
    <h3>Find Play Places</h3>
    <p className="small">Card description with lots of great facts and interesting details.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>

  <div className="$card-container4">
  <a className="main-page-card" href="#">
    <h3>Toy Boxes</h3>
    <p className="small">Card description with lots of great facts and interesting details.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
       </div>

       <div className="hero2">
       <div className='hero2-video-div'>
       <video loop autoPlay muted  className='hero2-video' >
      <source src={backgroundVideo} type="video/mp4"/>
     </video>
       </div>
  <div className="hero2-text">
    <h1><b>Inspiring Site</b></h1>
  <p>Inspiring site strikes a balance between fun/soft and sharp/professional.</p>
    <a href="#"><button><b>click me</b></button></a>
  </div>
</div>

<div className="hero3">
  <div className="hero__content">
    <h1 className="hero__title">A css fixed background hero.</h1>
    <p className="hero__text">With 16:9 aspect ratio.</p>
  </div>
</div>

<div className="image-grid">
      <div className="image-wrapper">
        <img src= {stemImg1} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={stemImg2} alt="Image 2" />
      </div>
      <div className="image-wrapper">
        <img src= {stemImg3} alt="Image 3" />
      </div>
      <div className="image-wrapper">
        <img src={stemImg4} alt="Image 4" />
      </div>
      <div className="image-wrapper">
        <img src= {stemImg5} alt="Image 5" />
      </div>
      <div className="image-wrapper">
        <img src={stemImg6} alt="Image 6" />
      </div>
    </div>
<div className='footer'> this is the bottom</div>
    </div>
    )
}
export default Main;