import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Inventory from '../pages/inventory.page';

const inventory = new Inventory;

Given('user should be on inventory page', () => {
    inventory.verifyInventoryPage()
});

When('user adds {int} random items to cart', (count: number) => {
    inventory.addRandomItemsToCart(count);
    inventory.verifyCartBadge(count);
});

When('user navigates to cart', () => {
    inventory.goToCart();
});