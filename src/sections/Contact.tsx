import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

export default function Contact() {
  const sectionRef = useScrollFadeIn<HTMLElement>()

  return (
    <section ref={sectionRef} className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h2 className="font-display text-3xl font-bold text-primary mb-4">Get in Touch</h2>
      <p className="font-body text-gray-600 mb-8">
        Open to Data Scientist / Data Analyst / Machine Learning internship and fresher roles.
      </p>
      <div className="flex justify-center gap-6 font-body text-primary underline flex-wrap">
        <a href="mailto:gujjalabhanu94@gmail.com">Email</a>
        <a href="tel:+918143183793">Phone</a>
        <a href="https://www.linkedin.com/in/gbhanu18/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/gbhanu18" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/resume.pdf" download>Download Resume</a>
      </div>
    </section>
  )
}