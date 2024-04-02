import { Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Initial /> } />
    </Routes>
  );
}

export default App;
