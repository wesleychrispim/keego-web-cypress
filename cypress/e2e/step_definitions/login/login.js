import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('que eu abro a página de login', () => {
  LoginPage.open();
});

When('eu insiro credenciais válidas', () => {
  cy.log('Inserindo credenciais válidas');
  LoginPage.loginWithCredentials('teste2021@teste.com.br', 'teste');
});

When('eu clico no botão de login', () => {
  LoginPage.loginButton().click();
});

Then('eu devo ser redirecionado para a página inicial', () => {
  cy.url().should('eq', 'https://www.automationexercise.com/');
});

Then('deve exibir o texto "Category" na página inicial', () => {
  cy.get('h2').should('contain', 'Category');
});
