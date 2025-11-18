import { inventoryLocators } from '../locators/inventory.locators';
import loginData from '../../fixtures/login.json';

class Inventory {

    verifyInventoryPage() {
        cy.url().should('include', '/inventory.html');
        cy.get(inventoryLocators.inventoryList).should('be.visible');
    }

    addRandomItemsToCart(count: number) {
        const addedItems: Array<{name: string, price: string}> = [];
        
        cy.get(inventoryLocators.inventoryItem).then(($items) => {
            const itemCount = $items.length;
            const randomIndices = this.getRandomIndices(itemCount, count);
            
            randomIndices.forEach((index) => {
                cy.get(inventoryLocators.inventoryItem).eq(index).within(() => {
                    cy.get(inventoryLocators.inventoryItemName).invoke('text').then((name) => {
                        cy.get(inventoryLocators.inventoryItemPrice).invoke('text').then((price) => {
                            addedItems.push({ 
                                name: name.trim(), 
                                price: price.trim() 
                            });
                        });
                    });
                    cy.get(inventoryLocators.addToCartButton).click();
                });
            });
        }).then(() => {
            cy.wrap(addedItems).as('addedItems');
        });
    }

    private getRandomIndices(max: number, count: number): number[] {
        const indices = new Set<number>();
        while (indices.size < count) {
            indices.add(Math.floor(Math.random() * max));
        }
        return Array.from(indices);
    }

    verifyCartBadge(count: number) {
        cy.get(inventoryLocators.shoppingCartBadge).should('have.text', count.toString());
    }

    goToCart() {
        cy.get(inventoryLocators.cartLink).click();
    }

}

export default Inventory;