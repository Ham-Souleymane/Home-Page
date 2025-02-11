import './Main-s.css'
import goto from './assets/goto.svg'
import cat from './assets/cat.jfif'

export function Main({className}){
    return(
        
        <main className={className}>
        
      <div className="mContiner">
        <div className="mheader">
        <h1>My Work</h1>
          </div>
      
       <div className="project-card-continer">
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
       <Card pic={cat} name="Car prrject" detail="car is best project i have in my life"/>
  
       </div>
      </div>
      </main>
       
    )
}
function Card(props){
return(
  <>

<div className="card">
          <div className="img-continer">
            
            <img src={props.pic} alt="" />
          </div>
          <div className="detail-continer">          
          <h3>{props.name}</h3>
          <p>{props.detail}</p>
          <div className="icons">
          <i class="devicon-github-original colored" id='githup-icon-project'></i>
           <img src={goto} alt="" id='goto-icon' />
          </div>
          </div>
        </div>
  
  </>
)
}