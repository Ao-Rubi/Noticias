import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import BuscarCategoria from './components/BuscarCategoria';

function App() {

  // const respuesta = fetch("GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY")

  return (
    <div className="App">
      <Titulo></Titulo>
      <BuscarCategoria></BuscarCategoria>
    </div>
  );
}

export default App;
