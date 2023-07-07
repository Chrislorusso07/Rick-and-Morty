import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import About from './components/About';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail';
import Error from "./components/Errors";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Nav from './components/Nav';
const email = "richards@gmail.com"
const password = "contra83"
const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const location= useLocation();
   const [characters, setCharacters] = useState([]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };
      } catch (error) {
         alert("¡No hay personajes con ese ID")
      }
   };
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(data);
         access && navigate('/home');
         
      } catch (error) {
         return error.message
         
      }
      }

     
     useEffect(() => {
        !access && navigate('/');
     }, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path ="/home" element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='/:error' element={<Error/>}> </Route>
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
         </Routes>
      </div>
   );
}


export default App;
