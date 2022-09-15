import './App.css';
import './css_components/main.css'
import Simpsons from "./components/Simpsons";
import AllChar from './components/allChar';


function App() {
  return (
      <div>
        <Simpsons name={'Bart Simpson'}
                  age={10}
                  img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

        <Simpsons name={'Liza Simpson'}
                  age={8}
                  img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>

        <Simpsons name={'Meggie Simpson'}
                  age={1}
                  img={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>

        <Simpsons name={'Marge Simpson'}
                  age={34}
                  img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>

        <Simpsons name={'Homer Simpson'}
                  age={39}
                  img={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F08%2Fsimp_homersingle08_f_hires2-2000.jpg&q=60'}/>

          <AllChar url={'https://rickandmortyapi.com/api/character'}/>

      </div>
  );
}

export default App;
