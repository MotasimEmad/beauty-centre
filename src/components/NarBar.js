const NavBar = () => {
  return (
    <nav className="relative bg-white shadow border-b-4 border-primary">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <img className="w-auto h-7 md:h-14" src='https://d2pi0n2fm836iz.cloudfront.net/323767/02142022104531620a32cb40c23.png' alt="logo" />

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div className="flex flex-col md:flex-row md:mx-6">
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0" href="/">Home</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0" href="/">Products</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0" href="/">Services</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0" href="/">Trusted by</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0" href="/">Reviews</a>
                </div>

                <div className="flex justify-center md:block">
                    <img src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg" className="w-6 h-6" alt="instagram" />
                </div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
