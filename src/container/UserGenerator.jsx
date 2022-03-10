import 'flowbite';

const UserGenerator = () => {
  return (
		<div>
			<div className="p-36 text-left bg-blue-100">
				<div className="pb-4">
					<h1 className="text-[60px] font-sans font-bold text-blue-500">
						Username Generator
					</h1>
					<p className="text-[18px]  leading-relaxed text-slate-800">
						Lorema, ipsum dolor sit amet consectetur adipisicing elit. Dolore
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
							id="dropdownButton"
							data-dropdown-toggle="dropdown"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							type="button"
						>
							Dropdown button{" "}
							<svg
								className="ml-2 w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</button>
						<div
							id="dropdown"
							className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
						>
							<ul className="py-1" aria-labelledby="dropdownButton">
								<li>
									<a
										href="#"
										className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Dashboard
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Settings
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Earnings
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Sign out
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pt-2">
					<button
						type="button"
						className="py-2.5 px-5 text-lg text-white bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600"
					>
						Generate
					</button>
				</div>
			</div>
		</div>
	);
}

export default UserGenerator