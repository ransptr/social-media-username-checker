import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<div className="container mx-auto p-4">
			<nav className="bg-white border-gray-500">
				<div className="space-x-2">
					<Link to="/">Socmed Checker</Link>
					<Link to="/random">Username Generator</Link>
					<Link to="/faq">FAQ</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar