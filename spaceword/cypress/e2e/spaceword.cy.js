describe('SpaceWord', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('la page se charge correctement', () => {
    cy.get('canvas').should('exist');
  });

  it('le titre de la page est correct', () => {
    cy.title().should('not.be.empty');
  });

  it('le canvas est visible', () => {
    cy.get('canvas').should('be.visible');
  });
});
