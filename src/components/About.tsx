const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover the experience and mindset that shape my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                I'm a final-year BCA student at Vidya Pratishthan Arts Science and Commerce College in Baramati.
                I love turning ideas into clean, functional digital experiences.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                I enjoy learning new concepts, exploring modern development tools, and building projects that
                sharpen my skills while delivering real user value.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My focus is full-stack development, and I aim to grow in a collaborative, innovation-driven team.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 text-center">
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-3xl p-6 shadow-soft dark:bg-slate-900/90">
                  <h4 className="text-xl font-bold text-primary-600 mb-2">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 font-medium">
                    Vidya Pratishthan Arts Science and Commerce College
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Baramati</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Final year student</p>
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
