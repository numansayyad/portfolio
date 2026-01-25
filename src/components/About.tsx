const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Who I Am
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I am a last-year BCA student at Vidya Pratishthan Arts Science and Commerce College, Baramati.
                I have a strong interest in technology, problem-solving, and creativity.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I enjoy learning new concepts, exploring programming, and working on practical projects
                that help me improve my skills. My goal is to build a successful career in the IT field
                and contribute with dedication, discipline, and innovative thinking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing my Bachelor of Computer Application (BCA) degree, I'm constantly
                expanding my knowledge in full-stack development and modern web technologies.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-primary-600 mb-2">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <p className="text-gray-700 font-medium">
                    Vidya Pratishthan Arts Science and Commerce College
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Baramati</p>
                  <p className="text-gray-600 text-sm mt-2">Last Year Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
