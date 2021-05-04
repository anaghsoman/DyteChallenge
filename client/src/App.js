import './App.css';
import Leftsidebar from './Leftsidebar';
import './Topbar';
import Topbar from './Topbar';
import './register';
import Button from '@material-ui/core/Button';
import Bodypart from './bodyPart';

function App() {
  
  return (
    <div className="Setup">
      <div className="Leftsidebar"><Leftsidebar />;</div>
      <div className="Topbar"><Topbar/>;
        <div className="Bodypart"><Bodypart /></div>
      </div>
    </div>
  );
}

export default App;
