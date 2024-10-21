// import Image from "next/image";
// const Hero = () => {
//     return (
     
//       <section className="bg-green-800 text-white py-20">
//         <div className="container mx-auto flex items-center gap-12 p-8">
//   <div className="w-1/2 flex justify-center">
//     <Image
//       src="/images/Mercy.jpg"
//       width={400}
//       height={400}
//       className="w-[350px] h-[350px] rounded-full shadow-lg bg-white border-4 border-yellow-500"
//       alt="Mercy Kantai"
//     />
//   </div>

//   <div className="w-1/2 text-right flex flex-col items-center justify-center space-y-6">
//     <h1 className="text-5xl font-extrabold text-white darker grotesque">
//       Hello, My name is Mercy
//     </h1>
//     <h2 className="text-4xl font-bold text-white darker grotesque">A Software Developer</h2>
    
//     <p className="text-xl mt-4 text-center text-white max-w-md darker grotesque">
//       With a keen interest in Android Development and UI/UX Design
//     </p>
    
//     <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 darker grotesque rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 mt-6">
//       Contact Me
//     </button>
//   </div>
// </div>

//       </section>
//     );
//   };
//   export default Hero;

"use client";
import Image from "next/image";
import { useState, FormEvent } from 'react';

const Hero = () => {


  const [isOpen, setIsOpen] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      subject: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    
    const subject = encodeURIComponent(formElements.subject.value);
    const body = encodeURIComponent(formElements.message.value);
    window.location.href = `mailto:kantaiemilymercy@gmail.com?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };
  return (
    <section className="bg-green-800 text-white py-10 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4 md:p-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/Mercy.jpg"
            width={400}
            height={400}
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full shadow-lg bg-white border-4 border-yellow-500"
            alt="Mercy Kantai"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center justify-center space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white darker grotesque">
            Hello, My name is Mercy
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white darker grotesque">
            A Software Developer
          </h2>
          <p className="text-lg md:text-xl mt-2 md:mt-4 text-center text-white max-w-md darker grotesque">
            With a keen interest in Android Development and UI/UX Design
          </p>
        
          <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 md:py-3 px-4 md:px-6 darker grotesque rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 mt-4 md:mt-6"
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Send Email</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter email subject"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-md transition-colors duration-200"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;