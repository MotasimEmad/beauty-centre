import './App.css';
import NavBar from './components/NarBar';
import Header from './components/Header';
import Why from './components/Why';
import Products from './components/Products';
import Services from './components/Services';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App font-ubuntu pattern">
      <NavBar />
      <Header />
      <Clients />
      <Why />
      <Products />
      <Services />
      <Contact />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
