import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import PageContext from './components/context/context';
import FilmInformation from './components/FilmInformation/FilmInformation';
import Header from './components/Header/Header';
import RandomFilm from './components/RandomFilm/RandomFilm';
import {FilmContextProvider} from './components/context/context'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <FilmContextProvider>
          <Header/>
          <Routes>
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
