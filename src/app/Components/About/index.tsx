import Image from "next/image";
const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6 space-y-8 md:space-y-0 md:space-x-24">
  <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <Image 
      src="/images/Mercy.jpg" 
      alt="About Me Image" 
      width={400}
      height={400}
      className="w-[400px] h-auto rounded-md shadow-lg border-4 border-yellow-500 mr-[12%]"
    />
  </div>
  
  <div className="md:w-1/2 text-center md:text-left space-y-6">
    <h2 className="text-[30px] font-bold text-yellow-500 darker grotesque">About Me</h2>
    <p className="text-[24px] text-black leading-relaxed  mx-auto md:mx-0 darker grotesque">
      As a software developer. I pride myself on being hardworking self-driven and motivated.
      I love collaborating with others in a team environment. Where I can contribute and learn from different perspectives.
      I am passionate about continuous learning always eager to explore new technologies and improve my skills.
      This drive to grow and adapt helps me stay forward-thinking and prepared for any challenge I face.
    </p>
  </div>
</div>



      </section>
    );
};
export default About;