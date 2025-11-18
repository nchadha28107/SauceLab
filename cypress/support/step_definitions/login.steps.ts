import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Login from '../pages/login.page';

const login = new Login;

Given('user lands on login page', () => {
    login.launchURL();
});

Given('user logs in with valid credentials', () => {
    login.enterCredentialsAndLogin();
});