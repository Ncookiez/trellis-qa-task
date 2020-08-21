/* E2E Testing w/ Cypress */

// Adding Items:
describe('Test - Adding Items', () => {
  beforeEach(() => cy.visit('/'));

  // Adding item w/ '+' button:
  it('Adding w/ Button', () => {
    cy.get('input').type('Test Item 1');
    cy.contains('+').click();
    cy.contains('Test Item 1');
  });

  // Addin item w/ Enter key:
  it('Adding w/ Enter Key', () => {
    cy.get('input').type('Test Item 2{enter}');
    cy.contains('Test Item 2');
  });

  // Adding items with complex characters:
  it('Adding More Items', () => {
    cy.get('input').type('123456789');
    cy.contains('+').click();
    cy.contains('123456789');

    cy.get('input').type('~(*^&@^%&*^*$@{}"|{[]');
    cy.contains('+').click();
    cy.contains('~(*^&@^%&*^*$@{}"|{[]');

    cy.get('input').type('😃😃😃👨‍💻👨‍💻👨‍💻');
    cy.contains('+').click();
    cy.contains('😃😃😃👨‍💻👨‍💻👨‍💻');

    cy.get('input').type('\'\'\'\'\'\'\'\'\"\"\"\"\"\"');
    cy.contains('+').click();
    cy.contains('\'\'\'\'\'\'\'\'\"\"\"\"\"\"');
  });

  // Adding item with no characters:
  it('Adding Null Item', () => {
    cy.contains('+').click();
    cy.get('p').last().should('not.have.value', '');
  });

});

// Completing Items:
describe('Test - Completing Items', () => {
  beforeEach(() => cy.visit('/'));

  // Completing item:
  it('Completing Items', () => {
    cy.get('p').first().should('not.have.class', 'completed');
    cy.get('ul').children().first().click();
    cy.get('p').first().should('have.class', 'completed');
  });

  // Uncompleting item:
  it('Uncompleting Items', () => {
    cy.get('p').first().should('have.class', 'completed');
    cy.get('ul').children().first().click();
    cy.get('p').first().should('not.have.class', 'completed');
  });

});

// Deleting Items:
describe('Test - Deleting Items', () => {
  beforeEach(() => cy.visit('/'));

  // Deleting items:
  it('Deleting Items', () => {
    cy.contains('Test Item 1');

    // This number should match the number of previously added test items:
    var numDeletions = 7;
    // It's not ideal, but conditional testing is even worse and counting children with Cypress outside an assertion is surprisingly difficult.

    for(var i = 0; i < numDeletions; i++) {
      cy.get('div > button').contains('X').first().click();
    }

    // This does not work due to a bug in Cypress (https://github.com/cypress-io/cypress/issues/205) from April. Not yet fixed:
    //cy.get('li').should('not.exist');

    // Doing this instead:
    cy.get('ul').children().should('have.length', 0);
    
  });

});