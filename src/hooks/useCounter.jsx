import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(0);
    function handleIncrement () {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return {
        count: count,
        handleDecrement: handleDecrement,
        handleIncrement: handleIncrement,
    }
}

export default useCounter