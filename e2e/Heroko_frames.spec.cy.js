///<reference types='cypress'/>

import 'cypress-iframe'

describe('Frames',()=>{

    it('frame',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe().clear().type("Hello Raju").type('{selectall}').clear()
    })
})