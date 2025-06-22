import NavigationBar from '../components/Navigationbar';
import AddressListing from '../components/AddressListing';

const Contactspage = () => {
	return (
		<>
			<NavigationBar />
			<h2 className="text-center my-4">Browse Contacts</h2>
			<AddressListing />
		</>
	);
};
export default Contactspage;
