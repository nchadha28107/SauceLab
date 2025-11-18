import { cartLocators } from '../locators/cart.locators';

class Cart {

    verifyItemCount(count: number) {
        cy.get(cartLocators.cartItem).should('have.length', count);
    }

    verifyCartItems() {
        cy.get('@addedItems').then((expectedItems: any) => {
            expectedItems.forEach((expectedItem: any) => {
                cy.contains(cartLocators.cartItem, expectedItem.name).within(() => {
                    cy.get(cartLocators.inventoryItemName).should('have.text', expectedItem.name);
                    cy.get(cartLocators.inventoryItemPrice).should('have.text', expectedItem.price);
                });
            });
        });
    }

    proceedToCheckout() {
        cy.get(cartLocators.checkoutButton).click();
    }
}

export default Cart;