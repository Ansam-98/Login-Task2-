
describe('Map Demo',function(){
    it('Map senario',function(){
        cy.visit('http://localhost:4200/login')
        cy.get('[name="map"]').click()

    })
})