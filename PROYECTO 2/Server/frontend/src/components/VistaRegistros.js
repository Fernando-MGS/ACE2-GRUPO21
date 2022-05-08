import { useState, Fragment, useEffect } from "react";
import { UserData } from '../Data'
export function VistaRegistros() {
    const [index, setIndex] = useState(0)
    const [field, setField] = useState({ Campo: "" });
    const [title, setTitle] = useState({ Titulo: "" });
    const [actualData, setActualData] = useState([{ Magnitud: "", Fecha: "" }])
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

    const updateArray = () => {
        let aux = [actualData]
        console.log("UPDATE")
        userData.datasets.forEach(element => {
            console.log(element.data)
            let i=0
            element.data.forEach(data => {
                console.log(data)
                let aux_data=userData.labels[i]
                console.log(aux_data)
                i++
            }
            )
        }
        )
    }

    useEffect(() => {
        try {
            (async () => {
                const rawResponse = await fetch("http://localhost:8080/ChartTemp");
                const content = await rawResponse.json();
                /*console.log(content);
                console.log("asdasd");*/
                setUserData(content[0]);
                console.log(userData)
                updateArray()
            })();
        } catch (error) {
            console.log("Algo salió mal");
        }
    }, []);



    return (
        <div>
            <h1><center>REGISTROS</center></h1>
            <div className="row">
                <div className="col-8">
                    <div className="btn-group" id="Grupo" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Metano Generado</button>
                        <button type="button" className="btn btn-primary">Temperatura</button>
                        <button type="button" className="btn btn-primary">Metano</button>
                        <button type="button" className="btn btn-primary">Tiempo</button>
                    </div>
                </div>
                <div className="col">
                    <input className="form-control mr-sm-2" type="search"
                        name="Campo"
                        id="Campos"
                        placeholder="Buscar" aria-label="Search"></input>
                </div>
                <div className="col">
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </div>
            </div>
        </div>

    )
}