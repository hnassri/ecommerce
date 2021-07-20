
import React, { useEffect, useState } from 'react';
import CartArticle from '../../CartArticle/CartArticle';
import axios from 'axios';


const SearchBox = (props) => {
    const [search, setSearch] = useState('');
    const [all, setAll] = useState(false)
  
    
    
    const newsearch = (e) => {
        setSearch(e.target.value);
     
        if(e.target.value.length == 0 ){
            setAll(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const token = localStorage.getItem("token");
            const api = `http://206.81.25.252:8000/filter/name/${search}`;
            axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
                .then(res => {
                   props.setnbrArticle(res.data.items.length)
                    props.setData(
                        <>  
                            { 
                            res.data.items.map((article,key) => (
                                <CartArticle
                                    image={'http://206.81.25.252:8000' + article.image}
                                    name={article.name}
                                    prix={article.price}
                                    id={article.id}
                                    key={key}
                                />
                            ))}
                        </>
                    );
                })
                .catch((e) => {
                    console.log(e.response.status)
                    if(e.response.status ===404){
                        setAll(false);
                    }
                    else{
                        props.setData(<p>aucun article trouver...</p>)
                        props.setnbrArticle(0)
                    }
                });
        }, 100);

    }, [search])

    useEffect(() => {

        const token = localStorage.getItem("token");
        
        const api = `http://206.81.25.252:8000/article`;
     
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                props.setnbrArticle(res.data.items.length)
                props.setData(
                    <>
                        {res.data.items.map((article) => (
                            <CartArticle
                                image={'http://206.81.25.252:8000' + article.image}
                                name={article.name}
                                prix={article.price}
                                id={article.id}
                            />
                        ))}
                    </>
                );
            })
            .catch((error) => {
                console.log(error)
            });
    }, [all])



    return (
        <div className="widgets-searchbox">
            <form id="widgets-searchbox">
                <input className="input-field" type="text" value={search} placeholder="Search" onChange={e => newsearch(e)} />
                <button className="widgets-searchbox-btn" type="submit">
                    <i className="fa fa-search" />
                </button>
            </form>
        </div>
    )
}

export default SearchBox;