import { Routes } from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styled-components';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
