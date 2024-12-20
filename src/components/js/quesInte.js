import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'

function QuesInte(props) {
  const [data,setdata]=useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:4000/integration")
    .then((res)=>{
    setdata(res.data);
  })
  },[]);
  return (
    <div className='con' >
      
      {data.map((post)=>{
        const {problem ,id}=post;
       
          return (
          <>
          {id===props.no && <> <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
            <span>Select one of the option</span><br/><br/>
            <Link to="/SW" ><button className='bn31'><span class="bn31span">Show me a Way</span></button><br/><br/></Link>
            {/* <Link to="/SW" ><button className='bn31'><span class="bn31span"> I Know a Way</span></button><br/><br/></Link> */}
            {/* <Link to="/SW" ><button className='bn31'><span class="bn31span">How to Use</span></button><br/></Link> */}
          </div> </>}
          </>
        
        )
      }
      )}
    </div>
  )
}




export default QuesInte;



