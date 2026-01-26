import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              {/* © {currentYear} Portfolio. All rights reserved. */}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Numan Sayyad</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/numansayyad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/numan-sayyad-bca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:numann.sayyad@gmail.com"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
