import React from "react";

const AboutMe = () => {
  return (
    <div className="container min-h-screen mx-auto p-8">
      <h1 className="text-4xl p-2 font-bold mb-4">How I Built This Project</h1>
      
      <p className="text-2xl p-2 font-bold text-gray-700">
        Here, I will explain how I developed this project step by step...
      </p>
      
      <p className="text-lg p-2 text-gray-700">
        Welcome to KehribarOne! I designed this e-commerce platform to showcase and sell unique amber jewelry. In this project, I created a responsive, feature-packed and user-friendly application using modern tools and libraries. Below you can find information about the main technologies and tools I used to create this project.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Technologies Used</h2>
      
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li><strong>React</strong>: Used for building the user interface.</li>
        <li><strong>TypeScript</strong>: Added type safety to the JavaScript code.</li>
        <li><strong>React Router</strong>: Managed page navigation within the app.</li>
        <li><strong>i18next & react-i18next</strong>: Implemented multilingual support for a global audience. The integration of i18next and react-i18next allows me to easily manage translations and switch between languages such as English, Polish, and German at runtime, ensuring the app supports multiple languages.</li>
        <li><strong>Flowbite & Tailwind CSS</strong>: Used for creating UI components and styling.</li>
        <li><strong>Swiper</strong>: Implemented a carousel for displaying products.</li>
        <li><strong>FontAwesome & React Icons</strong>: Provided scalable icons for better UI design.</li>
        <li><strong>React Testing Library</strong>: Ensured component testing for reliability and performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">How the Project Works</h2>
      
      <p className="text-lg text-gray-700">
        The application is built using React to create a dynamic, interactive user experience. I utilized React Router to handle routing between different pages like Home, Products, About, and Contact. The UI is styled with Tailwind CSS, and for added component functionality and design, Flowbite was used.
      </p>

      <p className="text-lg text-gray-700 mt-4">
        For the product display, I used Swiper, an amazing library that allows me to create a responsive and interactive carousel. The multilingual feature is powered by i18next, ensuring that users can switch between languages seamlessly.
      </p>

      <p className="text-lg text-gray-700 mt-4">
        Additionally, I made sure the application is fully responsive, providing a great user experience across various screen sizes. Testing was performed using React Testing Library to ensure the application's reliability.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Future Plans</h2>
      
      <p className="text-lg text-gray-700">
        I plan to continue enhancing this platform by adding more features such as user authentication, a review system for products, and integrating a payment gateway to complete the e-commerce functionality.
      </p>
      
      <p className="text-lg text-gray-700 mt-4">
        I hope you find this project informative and enjoyable. If you'd like to know more about the development process or have any questions, feel free to reach out!
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Acknowledgements</h2>
      
      <p className="text-lg text-gray-700">
        This project was built under the mentorship of Yusuf Küçükçopur, with valuable advice and suggestions from Fatih Sarıkaya.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Find Me Online</h2>
      
      <div className="space-y-3 text-lg text-gray-700">
        <p>
          You can check out more of my work and connect with me on the following platforms:
        </p>
        <ul className="list-none">
          <li>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/your-linkedin-profile/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://your-portfolio-link.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-400"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
