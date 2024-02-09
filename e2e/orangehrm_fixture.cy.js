describe("Fixtures",()=>{
    it("OrangeHrmLogin",()=>{

        cy.fixture('example').then((data)=>{


            cy.visit(data.Url);
            cy.get('[name="username"]').type(data.Username);
            cy.get('[name="password"]').type(data.Password);
            cy.get('[type="submit"]').click();
            cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
            .should('have.text',data.Validation)

        })
    })
})