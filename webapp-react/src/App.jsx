import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetail />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;