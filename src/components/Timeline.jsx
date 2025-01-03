import React from "react";
import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
  
  const data = [
    {
      title: "StudyNotion",
      content: (
        <div>
          {/* Technologies Used Section */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-2xl font-semibold">Technologies Used</h3>
            <a
              href="https://studynotion-frontend.vercel.app/" // Replace with your live project link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-black"
              onMouseEnter={(e) => (e.target.innerText = "Link")}
              onMouseLeave={(e) => (e.target.innerText = "Live")}
            >
              Live
            </a>
          </div>
    
          {/* Technologies Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              React
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Tailwind
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Redux
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              JWT
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Node.js
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Express
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              MongoDB
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Mongoose
            </span>
          </div>
    
          {/* Content Lines with Cool Bullet Points */}
          <ul className="list-none text-white text-xs md:text-lg font-normal mb-8 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Enabled users to create, consume, and rate educational content, enhancing accessibility and engagement.
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              StudyNotion allows instructors to create and manage courses, while students can browse and purchase them.
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Secured authentication and authorization with JWT, protecting routes based on user roles.
            </li>
          </ul>
    
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Images/Project_Section/StudyNotion1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/StudyNotion2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Studynotion3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Studynotion4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    
    
    {
      title: "Tech Start Automation",
      content: (
        <div>
          {/* Technologies Used Section */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-2xl font-semibold">Technologies Used</h3>
            <a
              href="https://www.techstarautomation.in/" // Replace with your live project link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-black"
              onMouseEnter={(e) => (e.target.innerText = "Link")}
              onMouseLeave={(e) => (e.target.innerText = "Live")}
            >
              Live
            </a>
          </div>
    
          {/* Technologies Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              React
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Tailwind
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Redux
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Postman API
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              UI/UX
            </span>
          </div>
    
          {/* Content Lines with Cool Bullet Points */}
          <ul className="list-none text-white text-xs md:text-lg font-normal mb-8 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Developed a responsive company website with dynamic UI components using React.
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Leveraged states and props for seamless functionality and user interaction.
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Ensured an intuitive design and optimized performance across devices.
            </li>
          </ul>
    
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Images/Project_Section/Techstar1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Techstar2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Techstar3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Techstar4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Roxiler Transaction Manager",
      content: (
        <div>
          {/* Technologies Used Section */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-2xl font-semibold">Technologies Used</h3>
            <a
              href="https://niraj-challenge-1.vercel.app/" // Replace with your live project link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-black"
              onMouseEnter={(e) => (e.target.innerText = "Link")}
              onMouseLeave={(e) => (e.target.innerText = "Live")}
            >
              Live
            </a>
          </div>
    
          {/* Technologies Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              React
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Tailwind
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Node.Js
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Express
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              MongoDB
            </span>
            <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              Axios
            </span>
          </div>
    
          {/* Content Lines with Cool Bullet Points */}
          <ul className="list-none text-white text-xs md:text-lg font-normal mb-8 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Developed a web application for Roxiler Systems Pvt Ltd, integrating their API to manage and track financial transactions effectively.            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Implemented a Transaction Manager feature that offers comprehensive statistics for transaction data.            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
              Enhanced user experience by incorporating interactive data visualizations, including dynamic charts for clear insights.            </li>
          </ul>
    
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Images/Project_Section/Roxiler1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Roxiler2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Roxiler3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Images/Project_Section/Roxiler4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "StudyNotion",
    //   content: (
    //     <div>
    //       {/* Technologies Used Section */}
    //       <div className="flex items-center justify-between mb-6">
    //         <h3 className="text-white text-2xl font-semibold">Technologies Used</h3>
    //         <a
    //           href="https://your-live-project-link.com" // Replace with your live project link
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-black"
    //           onMouseEnter={(e) => (e.target.innerText = "Link")}
    //           onMouseLeave={(e) => (e.target.innerText = "Live")}
    //         >
    //           Live
    //         </a>
    //       </div>
    
    //       {/* Technologies Section */}
    //       <div className="flex flex-wrap gap-4 mb-6">
    //         <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
    //           React
    //         </span>
    //         <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
    //           Tailwind
    //         </span>
    //         <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
    //           Redux
    //         </span>
    //         <span className="inline-block border border-white text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
    //           JWT
    //         </span>
    //       </div>
    
    //       {/* Content Lines with Cool Bullet Points */}
    //       <ul className="list-none text-white text-xs md:text-lg font-normal mb-8 space-y-2">
    //         <li className="flex items-start">
    //           <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
    //           Developed a web application for Roxiler Systems Pvt Ltd, integrating their API to manage and track financial transactions effectively.            </li>
    //         <li className="flex items-start">
    //           <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
    //           Implemented a Transaction Manager feature that offers comprehensive statistics for transaction data.            </li>
    //         <li className="flex items-start">
    //           <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mt-1 mr-3"></span>
    //           Enhanced user experience by incorporating interactive data visualizations, including dynamic charts for clear insights.            </li>
    //       </ul>
    
    //       {/* Image Section */}
    //       {/* <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="/Images/Project_Section/StudyNotion1.png"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="/Images/Project_Section/StudyNotion2.png"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="/Images/Project_Section/StudyNotion3.png"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <img
    //           src="/Images/Project_Section/StudyNotion4.png"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div> */}
    //     </div>
    //   ),
    // },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
