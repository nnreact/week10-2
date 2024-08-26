import { useReducer } from "react"

const initialState = {
    count: 0,
    error: ""
}


const countReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count >= 5 ? state.count : state.count + action.payload,
                error: state.count >= 5 ? "Count cannot be greater than 5" : ""
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count <= 0 ? state.count : state.count - 1,
                error: state.count <= 0 ? "Count cannot be less than 0" : ""
            }
        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(countReducer, initialState);


    return (
        <div className="container">
            <p>Count: {state.count}</p>
            <p className="error">{state.error}</p>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>Decrement</button>
        </div>
    )
}

export default App



// import { useState } from "react"

// function App() {
//     const [count, setCount] = useState(0);
//     const [error, setError] = useState("");

//     const handleCount = (type) => {

//         if (type === "increment") {
//             if (count >= 5) {
//                 setError("Count cannot be greater than 5")
//             } else {
//                 setError("")
//                 setCount(count + 1)
//             }
//         } else if (type === "decrement") {
//             if (count <= 0) {
//                 setError("Count cannot be less than 0")
//             } else {
//                 setError("")
//                 setCount(count - 1)
//             }
//         }

//     }

//     return (
//         <div className="container">
//             <p>Count: {count}</p>
//             <p className="error">{error}</p>
//             <button onClick={() => handleCount("increment")}>Increment</button>
//             <button onClick={() => handleCount("decrement")}>Decrement</button>
//         </div>
//     )
// }

// export default App