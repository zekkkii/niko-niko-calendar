
import {useState,useEffect} from "react"
import '../App.css'
import {Link} from "react-router-dom";

function Dashboard() {
const [data,setData]=useState([])
  useEffect(() => {
    (async()=>{
      const response=await (await fetch("http://localhost:5050/api")).json()
      setData(response)
    })()
  }, [])
  return (
  <div>
    <Link to="/">Home</Link>
    <h1 className="title">Dashboard</h1>   
  <div className="flex center align-center"> 
      <table>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Satisfaction Average</th>
      </tr>
      {data.map((person)=>{return(
      <tr>
        <td>{person.name}</td>
        <td>{person.last_name}</td>
        <td>{(person.satisfaction==1?"Not Satisfied": person.satisfaction==2? "Regular": person.satisfaction==3?"Satisfied": person.satisfaction==3?"Very Satisfied":null)}</td>
      </tr>
      )})}
      </table>
  </div>
  
  </div>
  );
}

export default Dashboard;
