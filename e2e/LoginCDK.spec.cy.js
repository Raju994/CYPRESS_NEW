describe("Fixtures",()=>{
    let Userdata;
    before(()=>{
        cy.fixture('CDK').then((data)=>{
            Userdata=data;
        })

    })

it('Orange',()=>{
cy.visit(Userdata.url);
cy.get('[id="emailId"]').type(Userdata.username);
cy.get('[name="password"]').type(Userdata.pass);
cy.get('[data-testid="primary-button"]').click();
cy.get('.sc-eJocfa').should('contain','Username');
})


})