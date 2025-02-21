import useMemoise from "./customhooks/MemorizingHook";

const UseMemoise = () => {
    const { text: custID, setText: setCustID } = useMemoise("CustomerID", "");
    const { text: pass, setText: setPass } = useMemoise("Password", "");

    return (
        <div>
            <h1>This is a custom hook</h1>
            CustomerID: <input type="text" value={custID} onChange={(e) => setCustID(e.target.value)} />
            <br />
            Password: <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
            <br />
            <button>Login</button>
        </div>
    );
};

export default UseMemoise;
3