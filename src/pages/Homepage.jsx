import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Navigationbar from '../components/Navigationbar';

const Homepage = () => {
	return (
		<>
			<Navigationbar />
			<Hero />
			<HomeCards />
		</>
	);
};
export default Homepage;
