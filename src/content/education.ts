import type { Education, Research } from './types'

export const education: Education[] = [
  {
    school: 'UNC Charlotte',
    degree: 'MS Computer Science',
    detail: 'Concentration in AI, Robotics, Gaming',
    start: 'Aug 2024',
    end: 'Dec 2025',
  },
  {
    school: 'Duke University',
    degree: 'BS Computer Science and BS Mathematics',
    start: 'Aug 2020',
    end: 'May 2024',
  },
]

export const research: Research = {
  title: 'Memorization in variational autoencoders',
  context: "Master's research · UNC Charlotte",
  body: [
    'A variational autoencoder (VAE) is a generative model that learns to compress images and reconstruct them. The question was whether it quietly memorizes individual training examples instead of learning the dataset.',
    'I wrote a custom VAE for retinal images from a diabetic retinopathy dataset and measured memorization per image. High memorization scores (above the 95th percentile) typically flag outliers from the rest of the dataset.',
  ],
  stack: ['PyTorch', 'NumPy', 'Pandas', 'scikit-learn'],
}
