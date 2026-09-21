
import "./Counter.css";
import useCounter from "../../hooks/useCounter";

function Counter() {
    const useCounterResult= useCounter()
    
    return (
        <div className="counter-wrap">
            <h2>Contador</h2>
            {useCounterResult.count === 0 && (
            <button className= "btn_buy" 
                onClick={useCounterResult.handleIncrement} 
                disable = {useCounterResult.count !== 0}
            >Comprar</button>
            )}
            {useCounterResult.count !== 0 && (
                <div>
                    <button className= "btn_resta" 
                        onClick={useCounterResult.handleDecrement}
                    >-</button>
                    <span> {useCounterResult.count}</span>
                    <button className= "btn_suma" 
                        onClick={useCounterResult.handleIncrement} 
                        disabled = {useCounterResult.count >= 10}
                    >+</button>
                </div>
            )}
            {useCounterResult.count === 10 && (
                <span>¡Haz alcanzado el límite!</span>
            )}
        </div>
    );
}

export default Counter;