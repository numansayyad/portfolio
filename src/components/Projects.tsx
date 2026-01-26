import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'GPTflow Chatbot',
      description:
        'A full-stack AI chatbot with real-time conversations, chat history, and OpenAI integration..',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Open AI'],
      githubUrl: 'https://github.com/numansayyad/GPTflow-Chatbott',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=E-Commerce+Platform',
    },
    {
      title: 'ATM Banking System ',
      description:
        'A desktop-based ATM Banking System built using Core Java, Java Swing, JDBC, and MySQL. This project simulates real-world ATM operations with a clean GUI and secure database-backed transactions.',
      technologies: ['Java Swing', 'Core Java', 'AWT', 'JDBC', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '/assets/atm.png',
    },
    {
      title: 'Doctor Appointment System',
      description:
        'built Sanjivani+ web-based Doctor Appointment System to make the booking process simple, fast, and paperless.in this project, patients can easily choose a doctor and book appointments online, while doctors can log in to view and manage their scheduled appointments. ',
      technologies: ['Python', 'Flask', 'CSS', 'HTML', 'MongoDB'],
      githubUrl: 'https://github.com/numansayyad/doctor_appointment_system',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Weather+Dashboard',
    },
    {
      title: 'Post Management Application  ',
      description:
        'a full-stack Post Management web application called “Post Verse” using Node.js, Express, and EJS.This project helped me understand how backend and frontend work together.',
      technologies: ['Node.js', 'EJS', 'CSS', 'Express.js', 'RESTAPI'],
      githubUrl: 'https://github.com/numansayyad/versapost-project',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Analytics+Dashboard',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium no-underline"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium no-underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
