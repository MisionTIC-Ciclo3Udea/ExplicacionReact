import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/rhodesian' element={<RhodesianInfoPage />} />
                <Route path='/' element={<Index />} />
            </Routes>
            

        </Router>
      
    </div>
  );
}

export default App;
