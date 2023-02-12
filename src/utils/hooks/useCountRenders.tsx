import { useRef } from 'react';

export const useCountRenders = () => {
  const renders = useRef(0);
  console.warn('renders: ', renders.current++);
};
