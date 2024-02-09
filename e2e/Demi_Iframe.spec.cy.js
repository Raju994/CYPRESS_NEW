import 'cypress-iframe';

it("frame",()=>{

    cy.visit('https://www.hyrtutorials.com/p/frames-practice.html');
    cy.wait(10000)
    cy.get('#frm1').should('be.visible');

})