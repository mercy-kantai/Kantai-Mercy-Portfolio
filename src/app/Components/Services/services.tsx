import Image from "next/image";
const Services = () => {
    return (
      <section id="services" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-[30px] font-semibold mb-6">What I Can Do Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[5%]">

          <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">Web Development</h3>
         <Image 
         src="/images/web.jpg" 
         alt="Web Development" 
         width={400}
         height={400}
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm darker grotesque"                     />
            <p className="mt-2 text-black">I can develop well and interactive websites</p>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">Backend Development</h3>
         <Image
         src="/images/backend.webp" 
         width={400}
         height={400}
         alt="Web Development" 
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm darker grotesque"                     />
            <p className="mt-2 text-black">Building API Endpoints and Intergration</p>
            </div>

            
                

            <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
         <Image
         src="/images/design.png" 
         width={400}
         height={400}
         alt="Web Development" 
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm"                     />
            <p className="mt-2 text-black">Create stunning designs with user-friendly interfaces</p>
            </div>



            <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">Product Management</h3>
         <Image 
         src="/images/product.avif" 
         alt="Web Development" 
         width={400}
         height={400}
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm"                     />
            <p className="mt-2 ttext-black">Visualise data using Tableau</p>
            <p className="mt-2 text-black">Identifying users needs,goals and objectives</p>
            </div>




            <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
         <Image 
         src="/images/android.png" 
         width={400}
         height={400}
         alt="Web Development" 
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm darker grotesque"                     />
            <p className="mt-2 text-black">Ability to develop interactive mobile applications</p>
            </div>




            <div className="bg-white p-6 rounded-lg shadow-md darker grotesque">
         <h3 className="text-xl font-bold mb-4">UX Research</h3>
         <Image
         src="/images/ux-re.jpeg" 
         width={400}
         height={400}
         alt="Web Development" 
         className="w-full h-auto max-w-[400px] rounded-md shadow-sm"                     />
            <p className="mt-2 text-black">Conducting research and usability testing</p>
            </div>
            

        
         


            
            



            </div>
        </div>
      </section>
    );
  };
  
  export default Services;