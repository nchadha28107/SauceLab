import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Checkout from '../pages/checkout.page';

const checkout = new Checkout();

When('user fills checkout information', () => {
    checkout.fillCheckoutInformation();
});

Then('checkout overview should display correct item names and prices', () => {
    checkout.verifyCheckoutItems();
});

Then('checkout overview should display correct total price', () => {
    checkout.verifyTotalPrice();
});

When('user completes the order', () => {
    checkout.completeOrder();
});

Then('order should be confirmed successfully', () => {
    checkout.verifyOrderConfirmation();
});