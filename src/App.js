import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import './css/css.css'

function App() {
  return (
    <div className="App">
      <div className={'wrap'}>
          <div><Link to={'/todos'}>todos</Link></div>
          <div><Link to={'/albums'}>albums</Link></div>
          <div><Link to={'/comments'}>comments</Link></div>
      </div>
      <hr/>

      <Routes>
        <Route path={'todos'} element={<Todos/>}

      </Routes>
    </div>
  );
}

export default App;
