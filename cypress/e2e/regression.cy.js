import '@percy/cypress';

describe('YouTube Home Page', () => {
    it('should display correctly', () => {
      cy.visit('https://www.youtube.com');
  
      // Assuming there's a specific element you expect to be loaded
      // Replace 'elementSelector' with a real selector for something on the YouTube home page
      cy.get('elementSelector', { timeout: 10000 }).should('be.visible');
  
      cy.percySnapshot('YouTube Home Page');
    });
  });