describe("DataDriven",()=>{
    it("LoginCDK",()=>{
        cy.fixture('cdkmultipledata').then((data)=>{
            cy.visit('https://login.connectcdk.com/login/login')

            data.forEach((Userdata)=>{
                cy.get('[id="emailId"]').type(Userdata.u);
                cy.get('[name="password"]').type(Userdata.p);
                cy.get('[data-testid="primary-button"]').click();
                cy.get('[id="emailId"]').clear()
                cy.get('[name="password"]').clear()
            })
        })
    })
})