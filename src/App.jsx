import './App.css';
import Toast from './components/Toast';
import AddContact from './pages/AddContact';
import Contactspage from './pages/Contactspage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/contacts" element={<Contactspage />} />
					<Route path="/add-contact" element={<AddContact />} />
				</Routes>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
