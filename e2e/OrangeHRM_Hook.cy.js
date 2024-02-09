describe("Hook_Fixtures",()=>{
    let Userdata;
    before(()=>{
        cy.fixture('example').then((data)=>{
            Userdata=data;
        })
    })

    it("Orange",()=>{

        cy.visit(Userdata.Url);
        cy.get('[name="username"]').type(Userdata.Username);
            cy.get('[name="password"]').type(Userdata.Password);
            cy.get('[type="submit"]').click();
            cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
            .should('have.text',Userdata.Validation)

    })

})