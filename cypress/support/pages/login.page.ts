import { loginLocators } from '../locators/login.locators';
import loginData from '../../fixtures/login.json';

let env = Cypress.env('environment') || 'dev';
let device = Cypress.env('device');
let urls = require('../config/urls.json');

class Login {

    launchURL() {
        cy.viewport(device || 'macbook-15');
        cy.visit(urls[env]);
    }
    
    selectLoginButton() {
        cy.get(loginLocators.loginButton).click();
    }

    enterUsername() {
        cy.get(loginLocators.userName).clear().type(loginData.username);
    }

    enterPassword() {
        cy.get(loginLocators.password).clear().type(loginData.password);
    }

    enterCredentialsAndLogin() {
        this.enterUsername();
        this.enterPassword();
        this.selectLoginButton();
    }

}

export default Login;