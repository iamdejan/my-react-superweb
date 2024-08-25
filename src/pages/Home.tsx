import { useEffect, useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.css";

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

export default function Home(): JSX.Element {
  const [count, setCount] = useState(1);
  const hasClickedButton = useRef(false);

  function onClick(): void {
    setCount((count) => count+1);
    hasClickedButton.current = true;
  }

  console.log(`Has clicked increment button? ${hasClickedButton.current}`);

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
        <button onClick={onClick}>
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
          <div key={item.link}><a href={item.link} target="_blank">{item.text}</a></div>
        ))}
      </div>
    </>
  );
}
