import { stockProducts } from "../../data/stockProducts";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  // const getProducts = new Promise((res, rej) => {

  //   if (categoryId) {
  //     const filtroProd = stockProducts.filter(
  //       (item) => item.category === categoryId
  //     );
  //     setTimeout(() => {
  //       res(filtroProd);
  //     }, 1000);
  //   } else {
  //     setTimeout(() => {
  //       res(stockProducts);
  //     }, 1000);
  //   }

  // });

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'productos');

    getDocs(querySnapshot)
      .then((response) => {
        const list = response.docs.map((doc) =>{
          return doc.data()
        })
        console.log(list);
    })
      .catch((error) => console.log(error))
  };


  useEffect(() => {
    getProducts ();

      // .then((response) => {
      //   setProductList(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  }, [categoryId]);

  return (
    <div>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;