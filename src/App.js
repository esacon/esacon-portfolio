import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/home/Banner';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Resume />
      <Footer /> 
    </div>
  );
}

export default App;
