
it('learning assertions', function(){
    cy.visit('https://example.cypress.io/')

    cy.contains('get').click()
    //assertion with should()
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    //have.tag   etc 
    .should('be.visible')
    .should('be.enabled')
    
    cy.get('#query-btn').invoke('attr','id')
    .should('equal','query-btn')

    //and() make chain of assertions (implicite assertion up to now)
    cy.get('#query-btn')
    .should('contain','Button')
    .and('be.visible')

    //explicite assertion
    //expect
    expect(true).to.be.true;

    let name = 'mali'; //i declare a variable here you can get any text from app
    expect(name).to.be.equal('mali')

    //assert
    assert.equal(4,4,'Equal')

    //assert.equal(4,5,'Not equal')
    assert.notEqual(4,5,'Not equal')
    assert.strictEqual(4,4)
    //type scricpt has complie time error but JS not
    

})