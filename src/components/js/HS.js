import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'
import arrow from '../img/arrow-right.png'
function HS(props) {
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
        const {id,problem,hs}=post;
        return (<>
          {id===props.no && <>
            <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
            <div className='options' >
            {hs.concept1 && <div className='concept'><img src={arrow} alt=''/>{hs.concept1}</div>}
            {hs.concept2 && <div className='concept'><img src={arrow} alt=''/>{hs.concept2}</div>}<br/>
            <span>Select one of the option</span><br/><br/>
            {hs.options1 && <Link to="/"><button className='bn31' onClick={()=>{props.setno(0)}}><span class="bn31span">{hs.options1}</span></button><br/><br/></Link>}
            {hs.options2 && <Link to="/Ques"><button className='bn31' onClick={()=>{props.setno(props.no+1)}}><span class="bn31span">{hs.options2}</span></button><br/><br/></Link>}
            {hs.options3 && <Link to="/SCS"><button className='bn31'><span class="bn31span">{hs.options3}</span></button><br/></Link>} 
            {hs.options4 && <Link to="/SCS"><button className='bn31'><span class="bn31span">{hs.options4}</span></button><br/></Link>} 
            </div>
          </>} 
          </>       
          )
      })}
    </div>
  )
}

export default HS;