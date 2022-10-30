import './App.css';
import { socialData } from './data/socialData';
import { pageData } from './data/pageData';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Core from './components/Core'

function App() {
  return (
    <div>
      <Navigation social={socialData} page={pageData}/>
      <Header />
      <Core />
    </div>
  );
}

export default App;
