import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';

function App() {

  // const respuesta = fetch("GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY")

  return (
    <div className="App">
      <Titulo></Titulo>
    </div>
  );
}

export default App;
