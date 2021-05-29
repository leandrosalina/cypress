// articles_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', ()=>{

  it('criar_artigo', function() {
      cy.login();

      cy.get('a[href$=editor]').click();
      //cy.get('input[placeholder="Article title"]').clear();
      cy.get('input[placeholder="Article title"]').type('Artigo de testes');
      //cy.get('input[placeholder="What is this article about?"]').clear();
      cy.get('input[placeholder="What is this article about?"]').type('teste de criação de artigo');
      cy.get('form textarea').type('Lorem Ipsum Solum Lorem')
      //cy.get(':nth-child(4) > .form-control').clear();
      cy.get('input[placeholder="Enter tags"]').type('lorem ipsum');
      cy.get('button.btn-primary').contains('Publish article').click();
      cy.get('h1')
        .should('contain.text','Artigo de testes')
        //.click();
      /* ==== End Cypress Studio ==== */
      //comment add
      cy.get('form textarea').type('abra cadabra pé de carbra');
      cy.get('button.btn-primary').contains('Post Comment').click();

      //curtir feed
      cy.get('a.author').eq(0).click();

      cy.get('button.btn.btn-sm.btn-outline-primary').click();
  
  });

  ///it.only('Request para login', () =>{

   // cy.login();
  //})
});