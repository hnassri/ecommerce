
import React, {useState,useEffect} from 'react'
import Lien from './Lien'
import {useAuth} from '../../../../context/auth';
import axios from'axios'


const Categories = ()=>{
 
  const [token, settoken] = useState(useAuth().token)
  const [categories, setCategories] = useState('')
 

   useEffect(() => {
 
    const api = 'http://206.81.25.252:8000/category'; 
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
      setCategories(
        
           <>
          {res.data.items.map((categorie) => (
             <Lien
             name={categorie.name}
             count=""
           />
          ))}
          </>
      );
    })
    .catch((error) => {
      console.log(error)
    });
  }, []) 
        

  
    return (
        <div className="widgets-item pt-0">
        <h2 className="widgets-title mb-4">Categories</h2>
        <ul className="widgets-category">
         {categories}
        </ul>
      </div>
    )
}

export default Categories;