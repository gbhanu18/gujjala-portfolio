import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const projects = [
  {
    title: "AI-Based Crop Disease Detection Platform",
    description:
      "Deep learning platform for detecting off-type sunflower plants from leaf images and enabling real-time predictions.",
    technologies: [
      "Python",
      "DenseNet121",
      "CNN",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "FastAPI",
      "React",
    ],
    role:
      "Built a deep learning model using DenseNet121 and developed the FastAPI backend for image ingestion, preprocessing, and prediction.",
    outcome:
      "Implemented a real-time image prediction pipeline with transfer learning and React-based visualization.",
  },
  {
    title: "FashFit – AI-Based Personalized Outfit Recommendation",
    description:
      "Computer vision-based outfit recommendation system that analyzes user images and recommends suitable outfit combinations.",
    technologies: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "OpenCV",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    role:
      "Built the recommendation logic, image feature extraction pipeline, and Flask backend APIs.",
    outcome:
      "Developed an interactive web interface for image upload and personalized outfit recommendations.",
  },
];

export default function Projects() {
  const sectionRef = useScrollFadeIn<HTMLDivElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white text-[#172554] px-6 md:px-10 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-semibold text-indigo-500 mb-20">
          Projects
        </h2>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-slate-200 rounded-3xl p-8 md:p-10
                         shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-7">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-5 py-2 rounded-full
                               bg-indigo-50 text-indigo-500
                               text-base md:text-lg font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Role */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-2">
                <strong className="text-slate-700">My role:</strong>{" "}
                {project.role}
              </p>

              {/* Outcome */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                <strong className="text-slate-700">Outcome:</strong>{" "}
                {project.outcome}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}