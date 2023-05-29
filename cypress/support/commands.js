const faker = require('faker-br')

Cypress.Commands.add('fillMandatoryFieldAndSubmit', () => {
    const text = Cypress._.repeat('lorem ipsum', 15) 
    const name = faker.name.firstName()

    cy.get('#firstName').type(name)
    cy.get('#lastName').type(faker.name.lastName())
    cy.get('#email').type(faker.internet.email(name))
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type(faker.phone.phoneNumberFormat())
    cy.get('#open-text-area').type(text, {delay:0})
    //8- Foi utilizado uma refatorção do código, substituindo cy.get('button[type="submit"]').click() po cy.contains('button', 'Enviar').click()| tornando o código um pouco mais limpo e simples
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
});