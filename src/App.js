import './App.css';
import { useState, useEffect }  from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

import Navigation2 from './components/Navigation2'
import Header from './components/Header'
import Core from './components/Core'
import Footer from './components/Footer'

function App() {
  const [current, setCurrent] = useState("About")

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
 
  return (
    <div>
      <Navigation2 setCurrent={setCurrent} current={current}/>
      {/* <Header /> */}
      <Core setCurrent={setCurrent} current={current} />
      <Footer/>
    </div>
  );
}

export default App;
