
import HelloWord from "./components/HelloWord";
import Header from "./components/Header";
import CounterExample from "./components/CounterExample";
import Footer from "./components/Footer";
import Routes from './routes'
import { BrowserRouter as Roter } from 'react-router-dom';

function App() {

 

  const data = 'random';
  return (
    <>
    <Roter>
    <Header />
    </Roter>
    <HelloWord name={data}/>

    <Routes/>

    <CounterExample/>
    <Footer/>
    </>
  )
}

export default App
