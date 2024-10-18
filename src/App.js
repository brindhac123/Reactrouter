import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import User from './components/User';
import NewBooks from './components/NewBooks';
import OldBooks from './components/OldBooks';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li>	<Link to="/contact-us">Contact</Link></li>
			<li><Link to="/User/1">User 1</Link></li>
			<li><Link to="/User/2">User 2</Link></li>
			<li><Link to="books-types/old_books">Old Books</Link></li>
			<li><Link to="books-types/new_books">New Books</Link></li>
		</ul>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path='/contact-us' element={<Contact/>}/>
			<Route path='/user/:id' element={<User/>}/>
			<Route path='books-types'>
			<Route path='new_books' element={<NewBooks/>}/>
			<Route path='old_books' element={<OldBooks/>}/>
			</Route>
			
		</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
