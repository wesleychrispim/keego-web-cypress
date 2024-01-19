export default class LoginPage {
    static emailInput() {
      return cy.get('.login-form input:nth-child(2)');
    }
  
    static passwordInput() {
      return cy.get('input[name="password"]');
    }
  
    static loginButton() {
      return cy.get('.btn:nth-child(4)');
    }
  
    static open() {
      cy.visit('https://www.automationexercise.com/login');
      return this;
    }
  
    static loginWithCredentials(email, password) {
      this.emailInput().should('be.visible').type(email);
      this.passwordInput().should('be.visible').type(password, { log: false });
      return this;
    }
  }
  