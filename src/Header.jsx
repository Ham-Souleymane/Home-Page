import './header.css'
import pic from './assets/download.jfif'
import xIcon from './assets/x.svg'

export function Header({className}){
return (
   <header className={className}>

   
<div className="Hcontiner">


   <img src={pic} alt="" id='prto-img' />
   <div className="aboutMe">
    <h2> About me</h2>
    <p>Silent but deadly. Specializing in stealth operations and tactical gameplay. When I'm not executing perfect stealth missions, you'll find me mastering new strategies and perfecting my loadout. 

Skills:
🎯 Stealth Expert
🔧 Tactical Planning
⚡ Quick Strike Operations

Sometimes the greatest victory is the one no one knows you achieved</p>
<div className="icon-continer">
<i class="devicon-github-original colored" id='githup-icon'></i>
<svg viewBox="0 0 128 128" id='linkedin-icon'>
<path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
</svg>
<img src={xIcon} alt="" id='x-icon'/>
</div>
          



          
          
   </div>
   </div>
   </header>
)
}