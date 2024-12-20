import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'
import arrow from '../img/arrow-right.png'
function SCS(props) {
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
        const {id,problem,Scs}=post;
        return (<>
          {id===props.no &&<>
          <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
            {Scs && <div className='concept'><img src={arrow} alt=''/> Solution: {Scs}</div>}<br/>
            <span>Select one of the option</span><br/><br/>
            {<Link to="/"><button className='bn31' onClick={()=>{props.setno(0)}}><span class="bn31span">Exit conversion</span></button><br/><br/></Link>}
            {<Link to="/Ques" topic={props.topic}><button className='bn31' onClick={()=>{props.setno(props.no+1)}}><span class="bn31span">Next problem</span></button><br/></Link>} 
          </div>
          </>}    
          </>    
          )
      })}
    </div>
  )
}

export default SCS;