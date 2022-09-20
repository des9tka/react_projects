import './App.css';

import Builder from "./components/Builder";
import {useEffect, useState} from "react";
import './css/css.css'
import {axiosGet} from "./services/axios.service";


function App() {
    let [data, setData] = useState([]);


    useEffect(() => {
        axiosGet().then(value => setData(value.data.filter(value => value.launch_year !== '2020')))
    }, [])

  return (
      <div>
          {data.map((value, index) => <Builder item={value} key={index}/>)}
      </div>
  );
}

export default App;