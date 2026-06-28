import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import studentEnrollmentImage from '../assets/student-enrollment.svg'
import studentManagementImage from '../assets/student-management.svg'
import atmImage from '../assets/atm.svg'
import employeeManagementImage from '../assets/employee-management.svg'

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
      title: 'Student Enrollment Management System',
      description:
        'Developed a web-based enrollment management system using Java, Spring Boot, Spring MVC, Hibernate (JPA), JSP, and MySQL for student registration, updates, deletion, and record management.',
      technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JSP', 'MySQL'],
      githubUrl: 'https://github.com/numansayyad/studentenrollmentform',
      liveUrl: 'https://github.com/numansayyad/studentenrollmentform',
      image: studentEnrollmentImage,
    },
    {
      title: 'ATM Banking System',
      description:
        'A desktop ATM banking system built with Java Swing, JDBC, and MySQL to simulate secure account operations.',
      technologies: ['Java Swing', 'Core Java', 'AWT', 'JDBC', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: atmImage,
    },
    {
      title: 'Employee Management System (Console-Based)',
      description:
        'Developed a console-based employee management system using Core Java, JDBC, and MySQL with layered DAO, Service, and Controller architecture for CRUD operations and database connectivity.',
      technologies: ['Core Java', 'JDBC', 'MySQL', 'DAO', 'Service', 'Controller'],
      githubUrl: '',
      liveUrl: '',
      image: employeeManagementImage,
    },
    {
      title: 'Student Management System',
      description:
        'Developed a desktop-based student management system using Core Java, Swing, MySQL, and JDBC with role-based authentication, CRUD operations, and interactive dashboards.',
      technologies: ['Core Java', 'Swing', 'MySQL', 'JDBC', 'PreparedStatement'],
      githubUrl: 'https://github.com/numansayyad/student-management-system',
      liveUrl: '',
      image: studentManagementImage,
    },
  ]

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of work that demonstrates my design and development approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium no-underline"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium no-underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
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
