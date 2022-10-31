import './App.css';
import { socialData } from './data/socialData';
import { pageData } from './data/pageData';
import { projectData } from './data/projectData';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Core from './components/Core'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navigation social={socialData} page={pageData}/>
      <Header />
      <Core project={projectData}/>
      <Footer social={socialData}/>
    </div>
  );
}

export default App;
