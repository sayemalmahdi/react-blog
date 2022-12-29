const Home = () => {
    
  const title = "Home Page"
  const handleClick = () => {
    console.log ('Helloo world !');
  }
  const handleClickAgain = (name) => {
    console.log ('Hello ' + name)
  }
  const handleClickE = (e) => {
    console.log (e);
  }

  return (
    <div className="home">
        <h2>{ title }</h2> <br/>
        <button onClick={handleClick}>Click Me</button> &nbsp;
        <button onClick={() => handleClickAgain('Sayem')}>Click Me Again</button> &nbsp;
        <button onClick={handleClickE}>Click Me to see All Event Staff on Console</button> 
    </div>
  )
}

export default Home
