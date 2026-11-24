/* global Reveal */

Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0,
  minScale: 0.1,
  maxScale: 2,
  center: false,
  hash: true,
  controls: true,
  controlsTutorial: false,
  controlsLayout: 'edges',
  progress: true,
  slideNumber: 'c/t',
  showSlideNumber: 'speaker',
  transition: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  // Keep the same slide-by-slide controls on phones and classroom projectors.
  scrollActivationWidth: null,
  pdfSeparateFragments: false,
});
