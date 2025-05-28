import logo from './logo.svg';
import './App.css';
import GeneralRoutes from './Routes/GeneralRoutes';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
