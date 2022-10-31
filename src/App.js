import './App.css';
import {useState} from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Core from './components/Core'
import Footer from './components/Footer'

function App() {
  const [current, setCurrent] = useState("About")
 
  return (
    <div>
      <Navigation setCurrent={setCurrent} current={current}/>
      <Header />
      <Core current={current} />
      <Footer/>
    </div>
  );
}

export default App;
