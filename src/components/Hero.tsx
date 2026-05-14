import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import profileImage from '../assets/profile.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5.5rem)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 section-padding pt-24 sm:pt-28"
    >
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center rounded-full bg-white/90 p-4 shadow-soft dark:bg-slate-900/80">
              <img
                src={profileImage}
                alt="Numan Sayyad"
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-600 shadow-xl"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-950 dark:text-white mb-4">
            Hi, I'm <span className="text-primary-600">Numan Hayyum Sayyad</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
            Full Stack Developer | BCA Student
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Passionate about building modern web experiences with clean code, strong design sense, and a growth mindset.
            I create polished digital products while learning new technologies every day.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl no-underline min-w-[160px] text-center"
            >
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-white text-primary-600 border-2 border-primary-600 px-6 sm:px-8 py-3 rounded-2xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[160px] no-underline"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/numansayyad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/numan-sayyad-bca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:numann.sayyad@gmail.com"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
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
