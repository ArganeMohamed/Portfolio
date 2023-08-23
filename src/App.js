import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Competence } from './Components/Competence';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/competence" element={<Competence/>}/>
        <Route path="/frontend" element={<About />}/>
      </Routes>
    
    </div>
  );
}

export default App;
