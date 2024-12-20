import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'

function Ques(props) {
  const [data,setdata]=useState([]);
  console.log(props);
  
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
        const {id,problem }=post;
        return (<>
          {id===props.no && <>
            <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
          <span>Select one of the option</span><br/><br/>
            <Link to="/GM"  ><button className='bn31'><span class="bn31span">Guide Me</span></button><br/><br/></Link>
            <Link to="/GM" ><button className='bn31'><span class="bn31span">Assist Me</span></button><br/><br/></Link>
            
          </div>
          </>}
          </>
        )
      })}
    </div>
  )
}

export default Ques;