/// <reference types="cypress">
describe('login',()=>{
    it('Efetuar login com usuario e senha validos',() => {
        //acesso site
        cy.visit('/');
        
        //cliclar btn            
        cy.get('.nav-link') //4 elements
          .contains('Sign in') 
          .click();
        //cy.get('[href*=login]').click()

        //inf user e pass
        const user ='chamichones@mail.com'
        const pass ='chamichones'

        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass) 
        
        //clicar btn entrar
        cy.get('button.btn-primary').click()

        // verificar se retur auth
        cy.get('.nav-pills a.nav-link')
          .should('have.length', 2)

        cy.get('.nav-pills a.nav-link')
          //posicao -eq,first ,last
          .eq(0)
          .should('contain.text','Your Feed')
          .first 

    });
});