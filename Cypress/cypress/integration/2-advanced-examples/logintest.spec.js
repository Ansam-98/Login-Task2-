  
describe(' Login Demo',function(){
    it('login senerio',function(){
cy.visit('http://localhost:4200/login')
cy.get('[name="email"]').type('ansam.hiary@gmail.com')
cy.get('[name="password"]').type('123456')
cy.get('[name="post-user"]').click()
    })
})