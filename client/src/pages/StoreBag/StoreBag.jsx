import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {add,deleteBag } from '../../features/counter/counterSlice'


const StoreBag = ()=>{
     
    const count = useSelector((state) => state.counter.data)
    const dispatch = useDispatch()
      
    let value ={
        id : 34,
        quantite: 33,
        name: "pomme",
        prix : 3
   }
    
    dispatch(deleteBag())
  

    return(
        <>
            
        </>

    )
}

export default StoreBag;