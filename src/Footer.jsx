import tel from './assets/tel.svg'
import email from './assets/email.svg'
import xd from './assets/XD.jfif'
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
    </div>
   
   <div className="f-img-continer">
   <img src={xd} alt="" id='f-pic' />
   </div>

    
</div>
</footer>
        
    )
}