import './App.css';
import { socialData } from './data/socialData';
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation social={socialData}/>
    </div>
  );
}

export default App;
