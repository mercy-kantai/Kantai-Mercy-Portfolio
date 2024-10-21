const Footer = () => {
    return (
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <p>Contact: kantaiemilymercy@gmail.com</p>
            <p>Location: Nairobi, Kenya</p>
          </div>
          <div className="newsletter">
            <h3 className="text-lg">Message</h3>
            <input type="email" className="px-4 py-2 text-black" placeholder="kantaiemilymercy@gmail.com" />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded ml-2">Subscribe</button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;