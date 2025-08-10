import { Mail, Linkedin, Twitter, ChevronDown } from 'react-feather';
import Github from '../components/Github'; // adjust path if needed
import { HashLink } from 'react-router-hash-link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black min-h-screen text-white flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-6xl w-full flex flex-row flex-wrap items-center justify-between gap-8">
          
          {/* Left content */}
          <div className="flex-1 min-w-[250px] text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              PUSPITA DAS
            </h1>
            <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg max-w-md">
              I am an enthusiastic Frontend Developer passionate about building responsive, accessible, and modern websites with engaging UI/UX.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gray-800 px-5 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base font-medium hover:bg-gray-700 transition"
            >
              Contact Me
            </a>

            {/* Social Links */}
            <div className="flex gap-5 sm:gap-6 mt-6 sm:mt-8 text-gray-400">
              <a href="mailto:puspitadas869@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://github.com/Ultron1507" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/puspita0015/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://x.com/puspitadas015" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* Scroll Down Button */}
            <div className="mt-8 sm:mt-10">
              <HashLink
                smooth
                to="/about#about"
                className="flex flex-col items-start text-[#5c7cfa] group cursor-pointer"
                aria-label="Scroll down to more about me"
              >
                <span className="text-xs sm:text-sm mb-0.5 group-hover:underline">
                  Learn more about me
                </span>
                <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
              </HashLink>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end flex-1 min-w-[200px]">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-900">
              <img
                src="your-image-link-here"
                alt="Puspita Das"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
