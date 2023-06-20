import "./SearchBar.css";
import React, { useState } from "react";

export default function SearchBar( { onSearch }) {
   const [id, setId] = useState("")
   function handleChange(event){
      setId(event.target.value)
   }
   return (
      <div className = "searchBar">
         <input type='search' placeholder="ID..." onChange={handleChange} value = {id} />
         <button onClick={()=>{onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}