import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'service_jfgqy8a',
        'template_5fzhsvb',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'BH1j19ToF2jMJBd2l'
      )
      .then(() => {
        alert('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary-50 to-gray-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I’m available for freelance work and long-term collaborations. Let’s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FaEnvelope className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-950 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:numann.sayyad@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors no-underline"
                  >
                    numann.sayyad@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FaPhoneAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-950 dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:+917058151583"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors no-underline"
                  >
                    +91-7058151583
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-950 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Baramati, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I’m always open to discussing new ideas and opportunities. Drop a message and I’ll respond soon.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="mb-6">
              <label className="block text-slate-900 dark:text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-900 dark:text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-900 dark:text-white font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Subject"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-900 dark:text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-2xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
