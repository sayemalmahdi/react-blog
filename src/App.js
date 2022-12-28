import './App.css';

function App() {
  const title = "Welcome to the React Blog App"
  const like = 50;
  const link = "http://google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Likes { like } times</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
