// import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <h1>Hello {counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button> */}
      <NavBar />
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
