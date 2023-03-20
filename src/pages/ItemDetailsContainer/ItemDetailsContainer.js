import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { stockProducts } from "../../data/stockProducts";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [detailObject, setDetailObject] = useState({});
  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'productos', id);

    getDoc(querySnapshot)
      .then((res) =>{
        setDetailObject({
          id: res.id, 
          ...res.data(),
        })

      })
      .catch(error => console.log(error))
  }


  useEffect(() => {
    
  //     .then((response) => {
  //       setDetailObject(response); 
      
  //     })
  //     .catch((error) => { 
  //       console.log(error);
  //     });
    getProduct();
  }, []);
 
  return <div><ItemDetail detail={detailObject} /></div>;
};

export default ItemDetailsContainer