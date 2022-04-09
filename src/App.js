import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Bar from './components/01-Bar';
import Stopwatch from './components/02-Stopwatch';


function App() {
  return (
    <div className="">
      <header className="">
        <Bar />
        <Stopwatch />

      </header>
    </div>
  );
}

export default App;
