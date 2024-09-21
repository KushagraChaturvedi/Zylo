import Routes from "./routes";

function App() {
  const isLoggedIn = false;
  return (
    <Routes isLoggedIn={isLoggedIn}/>
  )
}

export default App