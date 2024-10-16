import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path='/contact-us' element={<Contact/>}/>
		</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
