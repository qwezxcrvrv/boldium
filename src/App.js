import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Page from './pages/pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Page />
      </BrowserRouter>  
    </div>
  );
}

export default App;
