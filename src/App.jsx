import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ReviewFormPage from './pages/ReviewFormPage';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importiamo lo stile

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<DetailPage />} />
          <Route path="/film/:id/recensione" element={<ReviewFormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
