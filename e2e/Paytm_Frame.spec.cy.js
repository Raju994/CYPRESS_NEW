///<reference types="cypress"/>
import "cypress-iframe"
describe('frame',()=>{

    it('frame',()=>{
        cy.visit('https://paytm.com')

        cy.get('[class="_1YPz_"]').click()

       cy.frameLoaded('#oauth-iframe')
       cy.wait(10000)
       cy.iframe().find('_1pkd1-42eg5l4h6b11QpTd').then((res)=>{
        var tex=res.text()
        cy.log(tex)

       })
       
        

    })



})