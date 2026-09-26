const skillGroups = [
  {
    category: "Data Science & ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "DenseNet121",
      "Transfer Learning",
      "Computer Vision",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
  },
  {
    category: "Data Analysis",
    items: [
      "MySQL",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistics",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "Python (Advanced)",
      "SQL (Intermediate)",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "FastAPI",
      "Flask",
      "REST API Development",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Google Colab",
      "Jupyter Notebook",
      "Linux",
      "Windows",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white text-[#172554] px-6 md:px-10 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-semibold text-indigo-500 mb-20">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

          {skillGroups.map((group) => (
            <div key={group.category}>

              {/* Category */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                {group.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 rounded-full bg-slate-100 text-[#1e3a5f] text-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}