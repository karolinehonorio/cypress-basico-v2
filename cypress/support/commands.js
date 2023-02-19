Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('George')
    cy.get('#lastName').type('Tada')
    cy.get('#email').type('george.tada@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
    //cy.get('button[type="submit"]').click()
})