import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import FilmInformation from './components/FilmInformation/FilmInformation';
import Header from './components/Header/Header';
import RandomFilm from './components/RandomFilm/RandomFilm';
import {FilmContextProvider} from './components/context/context'
import SearchFilms from './components/SearchFilms/SearchFilms';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <FilmContextProvider>
          <Header/>
          <Routes>
            <Route path='/search' element={<SearchFilms/>}/>
            <Route path='/films' element={<RandomFilm/>}/>
            <Route path='/films/:id' element={<FilmInformation/>}/>
            <Route path='/' element={<Navigate to='/films'/>}/> 
          </Routes>
          </FilmContextProvider>
        </div>
      </BrowserRouter>
  );
}

export default App;
