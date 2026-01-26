import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding"
      style={{ paddingTop: '100px' }}
    >
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-block rounded-full bg-primary-100 p-4 mb-6">
              {/* <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto flex items-center justify-center text-5xl font-bold text-white">
                NH
              </div> */}

              {/* <img
  src="/assets/numan.jpeg"
  alt="Numan Sayyad"
  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-600 shadow-lg"
/> */}

<img
  src="/assets/numan.jpeg"
  alt="Numan Sayyad"
  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-primary-600 shadow-xl"
/>


            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-primary-600">Numan Hayyum Sayyad</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 font-medium">
            Fresher | Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Last-year BCA student passionate about technology, problem-solving, and creativity.
            Eager to build a successful career in IT with dedication, discipline, and innovative thinking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/numansayyad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/numan-sayyad-bca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:numann.sayyad@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
