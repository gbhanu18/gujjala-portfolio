import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

export default function Experience() {
  const sectionRef = useScrollFadeIn<HTMLElement>()

  return (
    <section ref={sectionRef} className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-display text-3xl font-bold text-primary mb-8">Experience</h2>
      <div className="border-l-2 border-primary/30 pl-6">
        <h3 className="font-display text-xl font-semibold text-gray-800">
          Python Development Intern
        </h3>
        <p className="font-body text-sm text-gray-500 mb-3">Techoctanet Services Pvt. Ltd.</p>
        <ul className="font-body text-gray-600 list-disc list-inside space-y-1">
          <li>Worked on Python-based development tasks as part of the internship program.</li>
          <li>Applied core programming concepts to real project tasks.</li>
        </ul>
      </div>
    </section>
  )
}