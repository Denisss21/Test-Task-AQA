import { basketPage } from "./BasketPage.js"

export class ItemPage{

    clickBuyButton(){
        cy.get('app-buy-button.mode-slim.toOrder.ng-star-inserted').find('button').find('span').should('have.text', ' Купити ').click()
        basketPage.closeBasket()
        cy.get('app-buy-button.mode-slim.toOrder.ng-star-inserted').find('button').find('span').should('have.text', ' В кошику ')
    }
}

export const itemPage = new ItemPage()