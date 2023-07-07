import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from "axios";

export const filterCards = (gender)=>{
    return{type:FILTER, payload:gender }
}

export const orderCards = (order)=>{
    return{type:ORDER, payload: order}
}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const { data } = axios.post(endpoint, character);

         if(!data.length) throw Error("No hay favoritos")

            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
         }
         
       catch (error) {
         return error.message
      }
};
}


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/${id}'
    try {
       const { data } = axios.delete(endpoint);

       if(!data.length) throw Error("No hay favoritos")

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
       });
       }
      
   catch (error) {
      return error.message
      
    } 
 };