export default function About() {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
      
      {/* About Me Box */}
      <section className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a passionate Frontend Developer dedicated to building responsive, 
          accessible, and visually engaging websites. With a strong foundation in 
          React.js, Tailwind CSS, and modern JavaScript, I focus on creating seamless 
          user experiences and high-performance applications. I enjoy working with 
          animations, optimizing performance, and collaborating in fast-paced, 
          creative environments to deliver impactful digital solutions.
        </p>
      </section>

      {/* Education & Certificates */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Education Box */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Education</h2>
          <ul className="space-y-4 text-gray-400">
            <li>
              <span className="font-semibold">Diploma in Computer Science</span><br />
              National Board of Computer Education (2022–2023)
            </li>
            <li>
              <span className="font-semibold">12th Grade (Arts Focus)</span><br />
              Junior College (2021–2023)
            </li>
          </ul>
        </div>

        {/* Certificates Box */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Certificates</h2>
          <ul className="space-y-4 text-gray-400">
            <li>Front-End Domination – Sheryians Coding School</li>
            <li>Wealth Management – Tata Consultancy Services</li>
            <li>Introduction to Artificial Intelligence – LinkedIn Learning</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
