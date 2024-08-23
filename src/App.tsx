import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type ReferenceLink = {
  link: string,
  text: string
};

const referenceList: ReferenceLink[] = [
  {
    link: "https://roadmap.sh/react",
    text: "React Roadmap"
  },
  {
    link: "https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/",
    text: "React component lifecycle: React lifecycle methods & hooks"
  },
  {
    link: "https://www.robinwieruch.de/react-list-component/",
    text: "React List Component"
  },
];

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if(count % 15 === 0) {
      console.log(`Current count ${count} is FizzBuzz.`);
    } else if(count % 5 === 0) {
      console.log(`Current count ${count} is Buzz.`);
    } else if(count % 3 === 0) {
      console.log(`Current count ${count} is Fizz.`);
    } else {
      console.log(`Current count: ${count}`);
    }
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button onClick={() => setCount(1)}>
            Reset
          </button>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        List of links for further learning:
        {referenceList.map(item => (
          <div key={item.link}><a href={item.link}>{item.text}</a></div>
        ))}
      </div>
    </>
  );
}

export default App;
