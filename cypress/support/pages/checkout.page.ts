import { checkoutLocators } from '../locators/checkout.locators';
import checkoutData from '../../fixtures/checkout.json';
import { generateRandomFirstName, generateRandomLastName, generateRandomZipCode } from '../helper/utils';

class Checkout {
    fillCheckoutInformation() {
        cy.get(checkoutLocators.firstName).type(generateRandomFirstName());
        cy.get(checkoutLocators.lastName).type(generateRandomLastName());
        cy.get(checkoutLocators.postalCode).type(generateRandomZipCode());
        cy.get(checkoutLocators.continueButton).click();
    }

    verifyCheckoutItems() {
        cy.get('@addedItems').then((expectedItems: any) => {
            expectedItems.forEach((expectedItem: any) => {
                cy.contains(checkoutLocators.cartItem, expectedItem.name).within(() => {
                    cy.get(checkoutLocators.inventoryItemName).should('have.text', expectedItem.name);
                    cy.get(checkoutLocators.inventoryItemPrice).should('have.text', expectedItem.price);
                });
            });
        });
    }

    verifyTotalPrice() {
        cy.get('@addedItems').then((expectedItems: any) => {
            const total = expectedItems.reduce((sum:any, item: any) => {
                return sum + parseFloat(item.price.replace('$', ''));
            }, 0);
            
            cy.get(checkoutLocators.itemTotal).should('contain', total.toFixed(2));
        });
    }

    completeOrder() {
        cy.get(checkoutLocators.finishButton).click();
    }

    verifyOrderConfirmation() {
        cy.get(checkoutLocators.completeHeader).should('have.text', checkoutData.checkoutSuccessMessage);
        cy.get(checkoutLocators.completeText).should('be.visible');
    }
}

export default Checkout;