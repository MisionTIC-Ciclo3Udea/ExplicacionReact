import Layout from 'layouts/Layout';
import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import BorderCollie from 'pages/bordercollie';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Routes>
                <Route path='/rhodesian' element={<RhodesianInfoPage />} />
                <Route path='/bordercollie' element={<BorderCollie />} />
                <Route path='/' element={<Index />} />
            </Routes>
          </Layout>
            
        </Router>
    </div>
  );
}

export default App;
