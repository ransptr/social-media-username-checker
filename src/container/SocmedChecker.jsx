import 'flowbite';

const SocmedChecker = () => {
	return (
		<div className="p-36 text-left bg-blue-100">
			<div className="container mx-auto">
				<div className="pb-4">
					<h1 className="text-[60px] font-sans font-bold text-blue-500">
						Social Media Name Checker
					</h1>
					<p className="text-[18px]  leading-relaxed text-slate-800">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
						perspiciatis consequatur eaque <br /> facilis eveniet possimus esse
						doloremque!
					</p>
				</div>

				<div className="flex items-center">
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fillRule="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="username-search"
							className="bg-gray-50 border border-blue-500 text-gray-900 text-lg rounded-lg block w-80 pl-10 mr-2 p-2.5"
							placeholder="Search for username"
						></input>
					</div>
					<div>
						<button
							type="button"
							className="py-2.5 px-5 text-lg text-white bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600"
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocmedChecker;