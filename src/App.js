import "./styles.css";

const NetflixHeader = () => {
  return <h3>넷플릭스 추천작</h3>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NetflixHeader />
      <NetflixHeader />
    </div>
  );
}
