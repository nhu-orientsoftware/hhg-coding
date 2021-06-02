import './styles/App.scss';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import RouterApp from './routes/index';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
