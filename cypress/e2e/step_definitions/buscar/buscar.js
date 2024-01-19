import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscarPage from './buscarPage';

Given('que eu abro a página inicial', () => {
  
});

When('eu realizo uma busca por {string}', (productName) => {
  BuscarPage.clickProductsLink();
  BuscarPage.inputSearchProduct(productName);
  BuscarPage.clickSubmitSearchButton();
  BuscarPage.clickViewProductLink();
});

And('a lista de resultados deve conter produtos relacionados a {string}', (productName) => {
 
  cy.get('h2').should('contain', productName);
});

And('o usuario colocar o produto no carrinho', () => {
  BuscarPage.clickAddToCartButton();
});

Then('o usuario devera validar se esta tudo certo com o que foi adicionado no carrinho', () => {
  BuscarPage.clickViewCartButton();
  BuscarPage.clickViewProductName();
  
});
