import './App.css';
import {useState} from 'react'
import { socialData } from './data/socialData';
import { pageData } from './data/pageData';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Core from './components/Core'
import Footer from './components/Footer'

function App() {
  const [current, setCurrent] = useState("About")
 
  return (
    <div>
      <Navigation social={socialData} page={pageData} setCurrent={setCurrent} current={current}/>
      <Header />
      <Core current={current} />
      <Footer social={socialData}/>
    </div>
  );
}

export default App;
