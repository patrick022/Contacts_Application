import ParticlesBackground from './components/design/ParticlesBackground';
import ContactCards from './components/ContactCards';

const App = () => {
	return (
		<div>
			<ParticlesBackground />
			<h2 className="text-white text-7xl m-5 text-center">My Contacts</h2>
			<section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
				<ContactCards />
			</section>
		</div>
	);
};

export default App;
