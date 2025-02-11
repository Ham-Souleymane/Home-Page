import tel from './assets/tel.svg'
import email from './assets/email.svg'
import xd from './assets/XD.jfif'
import x from './assets/x.svg'

import './Footer.css'
export function Footer({className}){
    return(
      

<footer className={className}>
<div className="f-continer">
    <div className="contact-continer">
      <h2>Contact me</h2>
       <p> Please get in touch if you think our work coud be muntualy benefical</p>
       <p>1234 Random Road <br /> Random Town, Algeria </p>
       <div className="num">
    <img src={tel} alt="" />
    0557833926
       </div>
       <div className="email">
    <img src={email} alt="" />
   <p>slimanham777@gmail.com </p>

    </div>
    <div className="f-icons">

   
    <i class="devicon-github-original colored" id='f-g-icon' ></i>
    <svg viewBox="0 0 128 128" id='f-l-icon' >
<path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
</svg>
<img src={x} alt="" id='f-x-icon'/>
</div>
    </div>
   
   <div className="f-img-continer">
   <img src={xd} alt="" id='f-pic' />
   </div>

    
</div>
</footer>
        
    )
}