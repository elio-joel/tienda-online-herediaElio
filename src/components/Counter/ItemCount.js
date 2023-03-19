import './style.css';
import { useEffect } from 'react';




const Counter = ({counter, setCounter}) => {
    useEffect(() => {
        if (counter === 15) {
            alert('Superaste el maximo de stock');
        }
    }, [counter]);



    const onAdd = () => {
        if (counter !== 15) {
        setCounter(counter + 1);
        }
    };

    const substract = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div>
            <div className='btn-cnt'>
                <button onClick={substract}> - </button>
                <h2>{counter}</h2>
                <button onClick={onAdd}> +  </button>
            </div>
        </div>
    );  
};
export default Counter;