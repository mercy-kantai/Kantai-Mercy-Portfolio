

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
     
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between">
          <div className="text-center lg:text-left">
            <p>Contact: kantaiemilymercy@gmail.com</p>
            <p>Location: Nairobi, Kenya</p>
          </div>
          
          <div className="newsletter text-center lg:text-left">
            <h3 className="text-lg mb-2">Message</h3>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0">
              <input 
                type="email" 
                className="px-4 py-2 text-black rounded w-full lg:w-auto" 
                placeholder="kantaiemilymercy@gmail.com" 
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded lg:ml-2 hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;