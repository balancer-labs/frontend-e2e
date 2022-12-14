/// <reference types="cypress" />
import './commands';
import '@synthetixio/synpress/support';
import addContext from 'mochawesome/addContext';

// Add screenshots and video to test report
Cypress.on('test:after:run', (test, runnable) => {
  const imageUrl = `assets/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
  const videoUrl = `assets/videos/${Cypress.spec.name}.mp4`;

  const screenshot = {
    title: 'Screenshot',
    value: imageUrl,
  };

  const video = {
    title: 'Video',
    value: videoUrl,
  };

  addContext({ test }, screenshot);
  addContext({ test }, video);
});
