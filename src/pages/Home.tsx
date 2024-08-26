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
  return (
    <>
      <h1>My React Superweb</h1>
      <div className="read-the-docs">
        List of links for further references:
        {referenceList.map(item => (
          <div key={item.link}><a href={item.link} target="_blank">{item.text}</a></div>
        ))}
      </div>
    </>
  );
}
