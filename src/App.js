import './App.css';

import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';

function App() {
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
			</Navbar>
        <Home />
		</div>
	);
}

export default App;
