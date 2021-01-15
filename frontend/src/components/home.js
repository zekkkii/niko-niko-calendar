import {useState} from 'react'
import '../App.css'
import Input from "./input"
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {Link} from "react-router-dom"

function Home() {
  const [isSubmited,setIsSubmited]=useState(false)
  const [data,setData]=useState({})

  const handleChange=(e)=>{
    const {name,value}=e.target
    setData((prevState)=>{
      return  {...prevState,[name]:value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("/",{
    method:'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
    }).then(()=>setIsSubmited(true))
    .catch(()=>console.log("not submited"))
    }
  return (
    <div>
        <div className="main-container"> 
          <div className="body">
          <Link to="/dashboard">Dashboard</Link>
          <h2>Daily Report of Satisfaction.</h2>
        {
          isSubmited? <h1>Thanks for Submitting the Survey!</h1> :
        
        <form action="/" method="post">
          <div className="name">
            <label htmlFor="name">Name</label>
            <Input onChange={handleChange} id="name" name="userName" type="text" required/>  
          </div>
          <div className="lname">
            <label htmlFor="lName">Last Name</label>
            <Input onChange={handleChange} id="lName" name="userLastName" type="text" required/>  
          </div>
          <h3>What about you? How was your productivity today</h3>
          <div className="emotions">
            <div>
              <InsertEmoticonIcon/>
              <label htmlFor="1">Very Satisfying</label>
              <Input onChange={handleChange} name="emotion" type="radio" value="4"  id="1"/>
            </div>
            <div>
              <SentimentSatisfiedIcon/> 
              <label htmlFor="2">Satisfying</label>
              <Input onChange={handleChange} name="emotion"  type="radio" value="3" id="2"/>
            </div>
            <div>
              <SentimentDissatisfiedIcon/>
              <label htmlFor="3">Regular</label>
              <Input onChange={handleChange} name="emotion" type="radio" value="2" id="3"/>
            </div>
            <div>
              <SentimentVeryDissatisfiedIcon/>
              <label htmlFor="4">Not Satisfying</label>
              <Input onChange={handleChange} name="emotion" type="radio" value="1" id="4"/>
            </div> 
          </div>
          <div className="comments">
            <h3>Any comments?</h3>
            <textarea onChange={handleChange} name="textArea"/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        }
        <div className="footer">
          <p id="year"></p>
        </div>
      </div>
        <div className="info">
          <div>
          <h1>Employee Survey Satisfaction</h1>
          <p>This quick survey is provided to employees to regulate,improve the system used at the company.
          Feel free to leave comments about how was your day and what should be improved at the company!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
