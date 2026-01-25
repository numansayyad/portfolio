import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode,
  FaGitAlt,
  FaBootstrap,
  FaCode
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql,
  SiExpress
} from 'react-icons/si'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
    { name: 'React.js', icon: FaReact, color: 'text-blue-500' },
  ]

  const backendSkills = [
    { name: 'Java', icon: FaCode, color: 'text-orange-600' },
    { name: 'Advance Java', icon: FaCode, color: 'text-orange-700' },
    { name: 'REST API', icon: SiExpress, color: 'text-gray-700' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
  ]

  const databaseSkills = [
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  ]

  const toolsSkills = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGitAlt, color: 'text-gray-800' },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {frontendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-gray-800 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {backendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-gray-800 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Database</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
              {databaseSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-gray-800 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
              {toolsSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-gray-800 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-900 mb-2">Frontend Development</h4>
                <p className="text-gray-600 text-sm">
                  Creating responsive, beautiful UIs with React.js, HTML, CSS, Tailwind CSS, and Bootstrap
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-bold text-gray-900 mb-2">Backend Development</h4>
                <p className="text-gray-600 text-sm">
                  Building robust APIs and server-side applications with Java, Advance Java, and Node.js
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💾</div>
                <h4 className="font-bold text-gray-900 mb-2">Database Management</h4>
                <p className="text-gray-600 text-sm">
                  Working with MySQL and MongoDB for efficient data storage and retrieval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
