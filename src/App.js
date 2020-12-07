import logo from './logo.svg';
import './App.css';
import Image from './compent/profile/profilePhoto'
import Name from './compent/profile/FullName'
import Adress from './compent/profile/Address'

function App() {
  return (
   <div className="wissem">
   <Image />
   <div className="ahabik">
   <Name />
   <Adress/>
   </div>
   </div>
  ); 
}

export default App;
