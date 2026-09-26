import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

export default function About() {
  const sectionRef = useScrollFadeIn<HTMLElement>()

  return (
    <section ref={sectionRef} className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-display text-3xl font-bold text-primary mb-4">About</h2>
      <p className="font-body text-lg text-gray-700 leading-relaxed">
        Recent B.Tech Computer Science graduate specializing in Artificial Intelligence and Machine Learning, with a strong interest in Data Science, Machine Learning, and Data Analytics. Hands-on experience with Python, SQL, statistics, data analysis, machine learning, and developing ML-based projects. Skilled in transforming data into actionable insights and building practical AI/ML solutions. Currently strengthening expertise in data analytics, machine learning, and model development through hands-on projects and training..
      </p>
    </section>
  )
}