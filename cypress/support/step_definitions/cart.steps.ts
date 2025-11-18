import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import Cart from '../pages/cart.page';

const cart = new Cart();

Then('cart should contain {int} items', (count: number) => {
    cart.verifyItemCount(count);
});

Then('cart should display correct item names and prices', () => {
    cart.verifyCartItems();
});

When('user proceeds to checkout', () => {
    cart.proceedToCheckout();
});