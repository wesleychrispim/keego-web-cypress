
import LoginPage from '../../cypress/e2e/step_definitions/login/loginPage';

before(() => {
 
  LoginPage.open();
  LoginPage.loginWithCredentials('teste2021@teste.com.br', 'teste');
  LoginPage.loginButton().click();
});
