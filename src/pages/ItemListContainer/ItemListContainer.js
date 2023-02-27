import { stockProducts } from "../../data/stockProducts";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams () ;
  const getProducts = new Promise((res, rej) => {
    
    if (categoryId) {
      const filtroProd = stockProducts.filter(
        (item) => item.category === categoryId
        );
    setTimeout(() => {
      res(filtroProd);
    }, 1000);
  } else {
    setTimeout (() => {
      res(stockProducts);
    }, 1000);
  }

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
  }, [categoryId]);

  return  (
    <div>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;