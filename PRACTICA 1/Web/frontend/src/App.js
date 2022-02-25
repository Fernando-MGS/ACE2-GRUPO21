import logo from './logo.svg';
import './App.css';
import { useState,useEffect,Fragment } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
        setUserData(content[0]);
        setUserData1(content[1]);
        setUserData2(content[2]);
        setUserData3(content[3]);
        setUserData4(content[4]);
      })();
    }catch(error){
      console.log("Algo salió mal");
    }
  },[]);

  const [userData,setUserData] = useState({
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
  });
  const [userData1,setUserData1] = useState({
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
  });
  const [userData2,setUserData2] = useState({
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
  });
  const [userData3,setUserData3] = useState({
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
  });
  const [userData4,setUserData4] = useState({
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
  });
  return (
    <Fragment>
      a
      <Line data={userData} />;   
      <Line data={userData1} />;   
      <Line data={userData2} />;   
      <Line data={userData3} />;   
      <Line data={userData4} />;   
    </Fragment>
  );
}

export default App;
