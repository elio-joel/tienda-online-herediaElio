import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { stockProducts } from "../../data/stockProducts";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [detailObject, setDetailObject] = useState({});
  const getProduct = new Promise((res, rej) => {
    setTimeout(() => {
      const findProduct = stockProducts.find((item) => item.id == id);
      res(findProduct);
    }, 1000)
  });


  useEffect(() => {
    getProduct
      .then((response) => {
        setDetailObject(response); 
      
      })
      .catch((error) => { 
        console.log(error);
      });
  }, []);
  return <div><ItemDetail detail={detailObject} /></div>;
};

export default ItemDetailsContainer