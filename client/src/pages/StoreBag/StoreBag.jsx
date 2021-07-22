import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {add } from '../../features/counter/counterSlice'


const StoreBag = ()=>{
     
    const count = useSelector((state) => state.counter.data)
    const dispatch = useDispatch()
      
    let value ={ 
        3: {
        quantite: 20,
        name: "pomme",
        prix : 15

    }
   }
    
    dispatch(add(value))
  

    return(
        <>
            
        </>

    )
}

export default StoreBag;