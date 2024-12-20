import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'
import arrow from '../img/arrow-right.png'

function HE(props) {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:4000/fetch/${props.topic}`)
    .then((res)=>{
    console.log(res)
    setdata(res.data);
  })
  },[]);
  return (
    <div className='con' >
      {data.map((post)=>{
        const {id,problem,he}=post;
        return (<> 
          {id===props.no &&
          <>
          <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
            {he.concept1 && <div className='concept'><img src={arrow} alt=''/>{he.concept1}</div>}
            {he.concept2 && <div className='concept'><img src={arrow} alt=''/>{he.concept2}</div>}<br/>
            <span>Select one of the option</span><br/><br/>
            {he.options1 && <Link to="/" ><button className='bn31' onClick={()=>{props.setno(0)}}><span class="bn31span">{he.options1}</span></button><br/><br/></Link>}
            {he.options2 && <Link to="/Ques" topic={props.topic}><button className='bn31' onClick={()=>{props.setno(props.no+1)}}><span class="bn31span">{he.options2}</span></button><br/><br/></Link>}
            {/* {he.options3 && <Link to="/SCS"><button className='bn31' onClick={()=>{props.setno(props.no+1)}}><span class="bn31span">{he.options3}</span></button><br/><br/></Link>} */}
            {he.options3 && <Link to="/SCS" topic={props.topic}><button className='bn31'><span class="bn31span">{he.options3}</span></button><br/><br/></Link>} 
          </div>
          </> } 
          </>    
          )
      })}
    </div>
  )
}

export default HE;