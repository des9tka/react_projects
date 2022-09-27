import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import './css/css.css'
import {Todos} from './components/Pages/todos';
import {Albums} from "./components/Pages/albums";
import {Comments} from "./components/Pages/comments";
import {Home} from "./components/Pages/home";
import {CheckPost} from './components/Pages/checkPost'

function App() {
  return (
    <div className="App">
      <div className={'wrap'}>
          <div><Link to={'/'}>home</Link></div>
          <div><Link to={'/todos'}>todos</Link></div>
          <div><Link to={'/albums'}>albums</Link></div>
          <div><Link to={'/comments'}>comments</Link></div>
      </div>
      <hr/>

      <Routes>
          <Route index element={<Home/>}/>
          <Route path={'todos'} element={<Todos/>}/>
          <Route path={'albums'} element={<Albums/>}/>
          <Route path={'comments'} element={<Comments/>}>
            <Route path={'posts/:id'} element={<CheckPost/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
