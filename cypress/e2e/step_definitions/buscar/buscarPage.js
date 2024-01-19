
export default class BuscarPage {
    static clickProductsLink() {
      cy.contains('Products').click(); 
    }
  
    static inputSearchProduct(productName) {
      cy.get('#search_product').type(productName); 
    }
  
    static clickSubmitSearchButton() {
      cy.get('#submit_search').click(); 
    }
  
    static clickViewProductLink() {
      cy.contains('View Product').click(); 
      cy.contains('Winter Top').should('exist');
    }
    static clickViewProductName() {
      cy.contains('Winter Top').should('exist');
      }

    static clickAddToCartButton() {
      cy.get('.cart').click(); 
    }
    static clickViewCartButton() {
      cy.get('u').click(); 
    }
}
