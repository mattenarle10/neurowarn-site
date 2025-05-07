export interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface FloatingElementProps {
  delay: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  duration: number;
  id: number;
  type: 'arrow' | 'neuron' | 'wave';
  opacity: number;
}
