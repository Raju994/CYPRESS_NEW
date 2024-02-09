it.skip("API",()=>{

    cy.request('get','https://reqres.in/api/users?page=2').its('status').should('eq',200);


})

it.skip("Post",()=>{
cy.request('Post','https://reqres.in/api/users').its('status').should('eq',201);

})
it.skip('post',()=>{
    cy.request({method:'POST', url: 'https://reqres.in/api/users', body:{
        'Name':'Raju',
        'Cell':"123"
    }}).its('status').should('eq',201)
})
it.skip('PUT',()=>{
    cy.request({method:'PUT' , url:'https://reqres.in/api/users/663', body:{
        'Name':'Raju111111'
    }}).its('status').should('eq',200)
})

it.skip('PATCH',()=>{
    cy.request({method:'PATCH' , url:'https://reqres.in/api/users/663', body:{
        'Name':'Raju11111122'
    }}).its('status').should('eq',200)
})

it('Delete',()=>{
    cy.request({method:'DELETE' , url:'https://reqres.in/api/users/2' }).its('status').should('eq',204)
})