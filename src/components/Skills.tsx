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
    { name: 'REST API', icon: SiExpress, color: 'text-slate-700' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
  ]

  const databaseSkills = [
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  ]

  const toolsSkills = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGitAlt, color: 'text-slate-800' },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 to-primary-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to deliver polished projects.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 text-center">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {frontendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-6 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 text-center">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {backendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-6 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 text-center">Database</h3>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {databaseSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-6 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 text-center">Tools</h3>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {toolsSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-6 flex flex-col items-center justify-center group"
                  >
                    <IconComponent
                      className={`${skill.color} text-5xl mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-slate-950 dark:text-white mb-2">Frontend Development</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Building responsive, polished interfaces with React, Tailwind, and Bootstrap.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-bold text-slate-950 dark:text-white mb-2">Backend Development</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Developing APIs and backend solutions with Java, Node.js, and modern architectures.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💾</div>
                <h4 className="font-bold text-slate-950 dark:text-white mb-2">Database Management</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Designing data-driven solutions using MySQL and MongoDB for reliable storage.
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
