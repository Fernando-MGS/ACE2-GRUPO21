import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {UserData} from './Data'
import BarChart from './components/BarChart';

function App() {

  const [userData,setUserData] = useState({
    labels:UserData.map((data)=>data.year),
    datasets:[
      {
        label: "Users Gaianed",
        data: UserData.map((data)=>data.userGain)
      }
    ],
  });
  return (
    <div className="App">
      <BarChart chartData={userData}/>
    </div>
  );
}

export default App;
