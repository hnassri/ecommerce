import React, {useEffect,useState} from 'react';
import Detaill from '../../components/ProductDetaill';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/index';
import axios  from 'axios';
import { useAuth } from '../../context/auth';
import { useParams } from 'react-router-dom';
const Product = (props) => {
  const [data, setData] = useState("");
  const [token, setToken] = useState(useAuth().token);
  const {id} = useParams();

  console.log({id});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const api ='http://206.81.25.252:8000/article/'+id ; 
  
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
  

      console.log(res.data.item)
      setData(
        
        <>
          {res.data.item.map((detaill) => (
             <Detaill
             descption={detaill.description}
             id={detaill.id}
             prix={detaill.price}
             name ={detaill.name}
             image = {detaill.images}
             />
          ))}
        </>
      );
    })
    .catch((error) => {
      console.log(error)
    });
  },[]);

  return (
    <div class="main-wrapper">
      <Header/>
      <main className="main-content">
       {data}
      </main>
      <Footer/>
   </div>
  )
}

export default Product;