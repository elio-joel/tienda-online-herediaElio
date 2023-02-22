import { stockProducts } from "../data/stockProducts";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(stockProducts);
    }, 3000);
  });

  useEffect (() => {
    getProducts
      .then ((response) => { 
        ///console.log(response);
        setProductList (response);
      })
      .catch((error) => {
      console.log(error);
    });
  }, []);

  return  (
    <div>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;