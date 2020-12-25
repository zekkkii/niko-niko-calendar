import './App.css'
import Input from "./input"
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function App() {
  return (
    <div>
        <div className="header">
          <h1>Niko Calendar</h1>
        </div>
      <div className="main-container"> 
        <div className="body">
        <h2>Daily Report of Satisfaction.</h2>
        <form action="/" method="post">
        <div className="name">
          <label htmlFor="name">Name</label>
          <Input id="name" name="userName" type="text" required/>  
        </div>
        <div className="lname">
          <label htmlFor="lName">Last Name</label>
          <Input id="lName" name="userLastName" type="text" required/>  
        </div>
        <h3>What about you? How was your productivity today</h3>
        <div className="emotions">
          <div>
            <InsertEmoticonIcon/>
            <label htmlFor="1">Very Satisfying</label>
            <input name="emotion" type="radio" value="4"  id="1"/>
          </div>
          <div>
            <SentimentSatisfiedIcon/> 
            <label htmlFor="2">Satisfying</label>
            <input name="emotion"  type="radio" value="3" id="2"/>
          </div>
          <div>
            <SentimentDissatisfiedIcon/>
            <label htmlFor="3">Regular</label>
            <input  name="emotion" type="radio" value="2" id="3"/>
          </div>
          <div>
            <SentimentVeryDissatisfiedIcon/>
            <label htmlFor="4">Not Satisfying</label>
            <input name="emotion" type="radio" value="1" id="4"/>
          </div> 
        </div>
        <div className="comments">
          <h3>Any comments?</h3>
          <textarea name="textArea"/>
          <button type="submit">Submit</button>
        </div>
        </form>
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

export default App;
