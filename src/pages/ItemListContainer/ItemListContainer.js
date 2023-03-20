import { stockProducts } from "../../data/stockProducts";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'productos');

    getDocs(querySnapshot)
      .then((response) => {
        const list = response.docs.map((doc) => {
          console.log(doc);
          return {
            id: doc.id, 
            ...doc.data(),
          };
        });
        setProductList(list);
      })
      .catch((error) => console.log(error))
  };


  useEffect(() => {
    getProducts();

  }, [categoryId]);

  return (
    <div>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;