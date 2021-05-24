
it('goole test', function(){
cy.visit('https://google.com')
cy.get('[name="q"]')
          .type('mali')
          .type('{enter}')


})