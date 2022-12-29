const Home = () => {
    
    const title = "Home Page From Home Components"
    const like = 50;
    const link = "http://google.com"
  return (
    <div className="home">
        <h1>{ title }</h1>
        <p>Likes { like } times</p>
        <a href={link}>Google Site</a>
    </div>
  )
}

export default Home
