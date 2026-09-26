export interface Project {
  title: string
  problem: string
  stack: string[]
  role: string
  outcome: string
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'AI-Based Crop Disease Detection Platform',
    problem: 'Detect crop diseases from leaf images so farmers can act early and reduce yield loss.',
    stack: ['DenseNet121', 'FastAPI', 'Python'],
    role: 'Built the image classification model and the API layer serving predictions.',
    outcome: 'Trained model classifies leaf images by disease with a working FastAPI backend.',
    githubUrl: '',
    demoUrl: '',
  },
  {
    title: 'FashFit — Outfit Recommendation',
    problem: 'Recommend outfit combinations based on visual input using computer vision.',
    stack: ['OpenCV', 'Flask', 'Python'],
    role: 'Built the recommendation logic and the Flask app serving it.',
    outcome: 'Working prototype that recommends outfits from image input.',
    githubUrl: '',
    demoUrl: '',
  },
]