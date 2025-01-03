import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="flex items-center justify-center py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <div className="w-80 h-90  overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="/Images/About1.jpg"
              alt="Yash Anil Aswale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left text-zinc-200">
            Yash Aswale
          </h2>
          <p className="text-lg mb-4 text-center lg:text-left text-zinc-300">
          Hi, I'm Yash Anil Aswale, a technology enthusiast passionate about web development and crafting innovative solutions. With hands-on experience in building dynamic web applications, I specialize in leveraging frameworks like React.js, Node.js, and MongoDB to create user-centric and efficient digital products. </p>
          <p className="text-lg mb-4 text-center lg:text-left text-zinc-300">
          My work includes developing feature-rich platforms such as a transaction manager for Roxiler Systems Pvt Ltd and StudyNotion, an educational platform enhancing learning accessibility. I have a proven track record of designing responsive, interactive websites and managing seamless front-end and back-end integrations. </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/yash-aswale-591a69249/"
              className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-zinc-700 text-zinc-100 rounded-full shadow-md hover:shadow-lg hover:bg-zinc-600 transition-all duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
