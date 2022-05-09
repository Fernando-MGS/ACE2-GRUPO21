import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Fragment } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from './Data'
import BarChart from './components/BarChart';
import Humedad from './components/Humedad';
import TempExt from './components/TempExt';
import TempInt from './components/TempInt';
import Luz from './components/Luz';


function App() {
  //const [userData,setUserData] = useState();
  const [userData1, setUserData1] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gaianeds",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gaianeds",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  });
  const [userData3, setUserData3] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gaianeds",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  });
  const [userData4, setUserData4] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gaianeds",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  });

  const [index, setIndex] = useState(0)
  const [field, setField] = useState({ Campo: "" });
  const [title, setTitle] = useState({ Titulo: "" });
  const [actualData, setActualData] = useState([{ Magnitud: 0, Fecha: "24-03-2010" }])
  const updateArray = () => {
    //let aux = [actualData]
    console.log("UPDATE0")
    setIndex(0)
    let aux_data = userData4.labels[0]
    console.log(aux_data)
    let aux_array = []
    userData4.datasets.forEach(element => {
      console.log(element.data)
      let i = 0
      element.data.forEach(data => {
        console.log(data)
        aux_array.push({ Magnitud: data, Fecha: userData4.labels[i] })
        i++
      }
      )
    }
    )

    console.log(aux_array)
    setActualData(aux_array)
    console.log(index)
    console.log("END UPDATE")
    aux_array.push({ Magnitud: index, Fecha: "" })
  }

  const updateArray2 = () => {
    //let aux = [actualData]
    setIndex(1)
    console.log("UPDATE1")
    let aux_data = userData1.labels[0]
    console.log(aux_data)
    let aux_array = []
    userData1.datasets.forEach(element => {
      console.log(element.data)
      let i = 0
      element.data.forEach(data => {
        console.log(data)
        aux_array.push({ Magnitud: data, Fecha: userData1.labels[i] })
        i++
      }
      )
    }
    )
    aux_array.push({Magnitud:index,Fecha:""})
    console.log(aux_array)
    setActualData(aux_array)
    console.log(index)
    console.log("END UPDATE")
    aux_array.push({ Magnitud: index, Fecha: "" })
  }

  const updateArray3 = () => {
    //let aux = [actualData]
    setIndex(2)
    console.log("UPDATE2")
    let aux_data = userData2.labels[0]
    console.log(aux_data)
    let aux_array = []
    userData2.datasets.forEach(element => {
      console.log(element.data)
      let i = 0
      element.data.forEach(data => {
        console.log(data)
        aux_array.push({ Magnitud: data, Fecha: userData2.labels[i] })
        i++
      }
      )
    }
    )
    aux_array.push({Magnitud:index,Fecha:""})
    console.log(aux_array)
    setActualData(aux_array)
    console.log(index)
    console.log("END UPDATE")
    aux_array.push({ Magnitud: index, Fecha: "" })
  }

  const updateArray4 = () => {
    //let aux = [actualData]
    setIndex(3)
    console.log("UPDATE3")
    let aux_data = userData3.labels[0]
    console.log(aux_data)
    let aux_array = []
    userData3.datasets.forEach(element => {
      console.log(element.data)
      let i = 0
      element.data.forEach(data => {
        console.log(data)
        aux_array.push({ Magnitud: data, Fecha: userData3.labels[i] })
        i++
      }
      )
    }
    )
    aux_array.push({Magnitud:index,Fecha:""})
    console.log(aux_array)
    setActualData(aux_array)
    console.log(index)
    console.log("END UPDATE")
    aux_array.push({ Magnitud: index, Fecha: "" })
  }

  function filterArray() {
    console.log(index)
    let aux = []
    let aux_array = []
    let aux_busqueda = ""
    if (index == 0) {
      aux = userData4
      aux_busqueda = userData4.labels[0]
    } else if (index == 1) {
      aux = userData1
      aux_busqueda = userData1.labels[0]
    } else if (index == 2) {
      aux = userData2
      aux_busqueda = userData2.labels[0]
    } else if (index == 3) {
      aux = userData3
      aux_busqueda = userData3.labels[0]
    }
    let varSplit = aux_busqueda.split("T")
    console.log("El split es")
    console.log(varSplit[0])
    aux.datasets.forEach(element => {
      let i = 0
      element.data.forEach(data => {
        let fecha = aux.labels[i]
        console.log(fecha+"vs"+varSplit[0])
        if (fecha.includes(varSplit[0])) {
          aux_array.push({ Magnitud: data, Fecha: aux.labels[i]})
        }
        i++
      })
    }
    )
    setActualData(aux_array)
  }


  useEffect(() => {
    try {
      (async () => {
        const rawResponse = await fetch("http://localhost:8080/ChartTemp");
        const content = await rawResponse.json();
        console.log(content);
        //console.log("asdasd");
        setUserData4(content[0]);
        setUserData1(content[1]);
        setUserData2(content[2]);
        setUserData3(content[3]);

      })();
    } catch (error) {
      console.log("Algo salió mal");
    }
    /*updateArray()
    console.log("label")
    console.log(userData1.labels[0])*/
  }, []);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gaianeds",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ],
  });
  return (
    <div>
      <h1><center>GRAFICAS</center></h1>
      <h4>CANTIDAD DE METANO GENERADO</h4>
      <Line data={userData4} />;
      <hr></hr>
      <h4>TEMPERATURA DEL TANQUE DE BIOGAS</h4>
      <Line data={userData1} />;
      <hr></hr>
      <h4>METANO VS TEMPERATURA</h4>
      <Line data={userData2} />;
      <hr></hr>
      <h4>TIEMPO DE USO</h4>
      <Line data={userData3} />;
      <hr></hr>
      <div>
        <h1><center>REGISTROS</center></h1>
        <div className="row">
          <div className="col-8">
            <div className="btn-group" id="Grupo" role="group" aria-label="Basic example">
              <button onClick={updateArray} type="button" className="btn btn-primary">Metano Generado</button>
              <button onClick={updateArray2} type="button" className="btn btn-primary">Temperatura</button>
              <button onClick={updateArray3} type="button" className="btn btn-primary">Metano</button>
              <button onClick={updateArray4} type="button" className="btn btn-primary">Tiempo</button>
            </div>
          </div>
          <div className="col">
            <button onClick={filterArray} className="btn btn-outline-success" >Mas Reciente{index}</button>
          </div>
        </div>
      </div>
      <ul className="list-group">
        {
          actualData.map((dato) => (
            <li className="list-group-item disabled" id={dato.Fecha}>
              <b>Magnitud: </b>{dato.Magnitud}
              <br />
              <b>Fecha: </b>{dato.Fecha}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
