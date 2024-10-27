


import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-8 sm:py-16 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-6 sm:py-12 px-4 sm:px-6 space-y-6 sm:space-y-8 md:space-y-0 md:space-x-24">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 sm:mb-6 md:mb-0">
          <Image
            src="/images/Mercy.jpg"
            alt="About Me Image"
            width={600}
            height={600}
            className="w-[300px] sm:w-[400px] h-auto rounded-md shadow-lg border-2 sm:border-4 border-yellow-500 mr-0 md:mr-[12%]"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h2 className="text-[30px] sm:text-[30px] font-bold text-yellow-500 darker grotesque">
            About Me
          </h2>
          <p className="text-[18px] sm:text-[20px] text-black leading-relaxed mx-auto md:mx-0 darker grotesque max-w-[100%] sm:max-w-full">
          I am a passionate designer and mobile developer dedicated to creating innovative and user-centered solutions. With a keen eye for aesthetics and a strong technical background, I thrive at the intersection of design and technology. My journey in the digital world has allowed me to develop a diverse skill set, enabling me to craft engaging user experiences that not only look great but also function seamlessly.

I believe that great design goes beyond just visuals; it is about understanding user needs and solving real-world problems. Whether I am designing intuitive interfaces or developing robust mobile applications, I am committed to delivering high-quality work that resonates with users.

When I'm not designing or coding, you can find me exploring the latest design trends, experimenting with new technologies, or contributing to open-source projects. I am excited about the future of mobile development and design, and I look forward to collaborating on projects that make a difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;