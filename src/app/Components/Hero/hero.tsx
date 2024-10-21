import Image from "next/image";
const Hero = () => {
    return (
     
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto flex items-center gap-12 p-8">
  <div className="w-1/2 flex justify-center">
    <Image
      src="/images/Mercy.jpg"
      width={400}
      height={400}
      className="w-[350px] h-[350px] rounded-full shadow-lg bg-white border-4 border-yellow-500"
      alt="Mercy Kantai"
    />
  </div>

  <div className="w-1/2 text-right flex flex-col items-center justify-center space-y-6">
    <h1 className="text-5xl font-extrabold text-white darker grotesque">
      Hello, My name is Mercy
    </h1>
    <h2 className="text-4xl font-bold text-white darker grotesque">A Software Developer</h2>
    
    <p className="text-xl mt-4 text-center text-white max-w-md darker grotesque">
      With a keen interest in Android Development and UI/UX Design
    </p>
    
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 darker grotesque rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 mt-6">
      Contact Me
    </button>
  </div>
</div>

      </section>
    );
  };
  export default Hero;