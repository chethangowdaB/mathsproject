import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'

function GM(props) {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:4000/fetch/${props.topic}`)
    .then((res)=>{
    console.log(res);
    setdata(res.data);
  })
  },[]);
  return (
    <div className='con' >
      {data.map((post)=>{
        const {id,problem,hints}=post;
        return (<>
          {id===props.no && <>
            <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
            <span>Select one of the option</span><br/><br/>
            {hints.hc && <Link to="/HC" topic={props.topic}><button className='bn31'><span class="bn31span">Hint Concept</span></button><br/><br/></Link>}
            {hints.hq && <Link to="/HQ"topic={props.topic}><button className='bn31'><span class="bn31span">Hint Question</span></button><br/><br/></Link>}
            {hints.he && <Link to="/HE"topic={props.topic}><button className='bn31'><span class="bn31span">Hint Example</span></button><br/><br/></Link>}
            {hints.hs && <Link to="/HS"topic={props.topic}><button className='bn31'><span class="bn31span">Hint Suggestion</span></button><br/></Link>}
             </div>
          </>}
          </>
        )
      })}
    </div>
  )
}

export default GM;