

Cypress.Commands.add('fillMandatoryFieldAndSubmit', () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »'

    cy.get('#firstName').type('Jhonatta Matias')
    cy.get('#lastName').type('Aguiar')
    cy.get('#email').type('jhonatta.matiassqa@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('73982245157')
    cy.get('#open-text-area').type(text, {delay:0})
    //8- Foi utilizado uma refatorção do código, substituindo cy.get('button[type="submit"]').click() po cy.contains('button', 'Enviar').click()| tornando o código um pouco mais limpo e simples
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
});