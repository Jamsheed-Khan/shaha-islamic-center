import logo from './logo.svg';
import './App.css';
import Navbar from './Componens/Navbar/Navbar'
import Prayertime from './Componens/Prayertime/Prayertime';
import Philosophy from './Componens/Philosophy/Philosophy';
import Donation from './Componens/Donation/Donation';
import Events from './Componens/Events/Events';
// import logo from './Images/logo.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Prayertime />
      <Philosophy />
      <Donation />
      <Events />
    </div>
  );
}

export default App;
