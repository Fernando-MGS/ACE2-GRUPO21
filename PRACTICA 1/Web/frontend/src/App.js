import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {UserData} from './Data'
import BarChart from './components/BarChart';
import Humedad from './components/Humedad';
import TempExt from './components/TempExt';
import TempInt from './components/TempInt';
import Luz from './components/Luz';


function App() {
  //const [userData,setUserData] = useState();
  useEffect(()=>{
    try{
      (async()=>{
        const rawResponse=await fetch("http://localhost:8080/ChartTemp");
        const content = await rawResponse.json();
        console.log(content);
        console.log("asdasd");
        setUserData(content);
      })();
    }catch(error){
      console.log("Algo salió mal");
    }
  },[]);

  const [userData,setUserData] = useState([{
    labels:UserData.map((data)=>data.year),
    datasets:[
      {
        label: "Users Gaianeds",
        data: UserData.map((data)=>data.userGain),
        fill:true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  }]);
  return (
    <div className="App">
      aa
      <BarChart chartData={userData}/>
      <Humedad chartData={userData}/>
      <Luz chartData={userData}/>
      <TempExt chartData={userData}/>
      <TempInt chartData={userData}/>
    </div>
  );
}

export default App;
