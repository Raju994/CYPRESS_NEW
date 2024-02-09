describe("Data",()=>{

    it("OrangeData",()=>{

        cy.fixture('orangedatadriven').then((data)=>{
            
            
            data.forEach((Userdata)=>{
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            cy.get('[name="username"]').type(Userdata.User);
            cy.get('[name="password"]').type(Userdata.Pass);
            cy.get('[type="submit"]').click();
                cy.wait(2000)

                if(Userdata.User=="Admin" && Userdata.Pass=="admin123"){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }else{
                    cy.get('.oxd-alert-content > .oxd-text').should('contain','Invalid')
                }
            })


        })


    })


})