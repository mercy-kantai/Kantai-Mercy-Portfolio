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
              <a href="https://www.figma.com/design/vWoKfBRcJSUupm2gYvYzg3/Umoja-Mentorship-Project?node-id=0-1&t=CiotVitmfUWIqBLA-1" target="_blank" rel="noopener noreferrer">
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 ml-8">
      View
    </button>
  </a>
            </div>
            
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-4 darker grotesque">Event Booking App</h3>
              <Image src="/images/corktail.png" alt="corktail" width={400} height={400}/>
              <p className="text-lg darker grotesque">A platform that allow users to view upcoming events and they can book an event</p>
              <a href="https://www.figma.com/design/dLzpN04yroJcpbashrrN6G/Event-Booking-Management-App?node-id=0-1&t=2Nz2kDcaUXcD116M-1" target="_blank" rel="noopener noreferrer">
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 mr-8">
      View
    </button>
  </a>
            </div>
            
            <div className="bg-white p-6 rounded shadow-lg darker grotesque">
              <h3 className="text-2xl font-bold mb-4">Bheta Solutions</h3>
              <Image src="/images/bheta.png" alt="bheta" width={400} height={400}/>
              <p className="text-lg darker grotesque" >An Progressive Web App that allows users to verify medication safety by capturing or uploading images of batch numbers.</p>
              <a href="https://www.figma.com/design/M6hluRiqAMYZIhHoIgpHBZ/Bheta-PWA-designs?node-id=265-2&t=66gbIXrbJbXzVlDZ-1" target="_blank" rel="noopener noreferrer">
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