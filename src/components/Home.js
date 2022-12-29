import { useState } from "react";

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

  const [name, setName] = useState('Sayem');
  const handleClickUseState = () => {
    setName ('Mahdi');
  }

  const [nameAgain, setNameAgain] = useState('Sayem');
  const [age, setAge] = useState('25');
  const handleClickUseStateAgain = () => {
    setNameAgain ('Mahdi');
    setAge (30);
  }

  return (
    <div className="home">
        <h2>{ title }</h2> <br/>
        <button onClick={handleClick}>Click Me</button> &nbsp;
        <button onClick={() => handleClickAgain('Sayem')}>Click Me Again</button> &nbsp;
        <button onClick={handleClickE}>Click Me to see All Event Staff on Console</button> <br /><br />
        <button onClick={handleClickUseState}>Click Me to change your name</button> &nbsp; {name} <br /><br />
        <button onClick={handleClickUseStateAgain}>Click Me to change your name and age</button> &nbsp; {nameAgain} is {age} years old <br /><br />
    </div>
  )
}

export default Home
