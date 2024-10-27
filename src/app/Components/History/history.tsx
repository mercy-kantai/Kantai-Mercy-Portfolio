import Image from "next/image";
const History = () => {
    return (
      <div>
      <section id="history" className="py-16 text-center bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-[30px] font-semibold mb-6 darker grotesque">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-4 darker grotesque"> Umoja Mentorship</h3>
              <Image src="/images/mentor.png" alt="mentor" width={400} height={400}/>
              <p className="text-lg darker grotesque">A mentorship platform that allows mentees to view their mentors profile
                        and update and track their accomplishments and tasks they need to
                        achieve</p>
              <a href="https://akirachix-mentorship-program.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 ml-8">
      View
    </button>
  </a>
            </div>
            
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-4 darker grotesque">CorkTail Recipe</h3>
              <Image src="/images/corktail.png" alt="corktail" width={400} height={400}/>
              <p className="text-lg darker grotesque">A platform that allow users to search for their favorite cocktail and
             display all the information about the cocktail</p>
              <a href="https://cock-tail-project-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 mr-8">
      View
    </button>
  </a>
            </div>
            
            <div className="bg-white p-6 rounded shadow-lg darker grotesque">
              <h3 className="text-2xl font-bold mb-4">Bheta Solutions</h3>
              <Image src="/images/bheta.png" alt="bheta" width={400} height={400}/>
              <p className="text-lg darker grotesque" >An Progressive Web App that allows users to verify medication safety by capturing or uploading images of batch numbers.</p>
              <a href="https://bheta.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 mr-8">
      View
    </button>
  </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  };
  export default History;