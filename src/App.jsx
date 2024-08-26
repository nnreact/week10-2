import { useRef } from "react"

function App() {

    const usernameRef = useRef(null);

    const handleSubmit = () => {
        console.log(usernameRef.current.attributes["data-id"].value)
    }

    return (
        <>
            <input type="text" data-id="0" ref={usernameRef} />
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}


export default App