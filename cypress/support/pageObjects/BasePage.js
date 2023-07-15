export class BasePage{

    goToMainPage(){
        cy.viewport('macbook-15')
        cy.visit(Cypress.env('url'))
        cy.url().should('eq' ,'https://rozetka.com.ua/ua/').and('include', 'rozetka.com.ua')
    }

    goToBasket(){
        cy.get("rz-cart[class='header-actions__component'] button[type='button']")
            .should('be.visible')
            .click()
    }
    
    verifyItemsAfterSearch(name){
        cy.get('.goods-tile__title')
          .each((productItem) => {
            expect(productItem).to.contain(name);
        })
    }

    checkforSuccessWindowAddToBucket(){
        cy.get('div.notification__block')
        .should('be.visible')
        .and('contain', 'Товар додано до кошика')
    }

    chooseCategoryByName(name){
        cy.get("div.menu-wrapper.menu-wrapper_state_static.ng-star-inserted").
            find('ul').
            find('li').
            find('a').
            contains(name).click({force: true});

        cy.wait(5000)

        cy.get('div[class="ng-star-inserted"]').find('h1').contains(name, { matchCase: false })
    }

    addItemToTheCardByIcon(itemName){
        cy.contains('.goods-tile__title', itemName)
            .closest('.goods-tile')
            .find('.buy-button')
            .click()
    }

    sortItemsFromCheapToExpensive(){
        cy.get('select.select-css')
            .select('Від дешевих до дорогих');

            cy.wait(5000)
            
            cy.get('.goods-tile:not(.goods-tile_state_disabled) .goods-tile__price-value')
            .invoke('text')
            .then((prices) => {
              const parsedPrices = prices
                .trim()
                .split('₴')
                .map((price) => parseInt(price.replace(/\s/g, ''), 10));
      
              for (let i = 0; i < parsedPrices.length - 2; i++) {
                expect(parsedPrices[i]).to.be.at.most(parsedPrices[i + 1]);
              }
            })
    }

    searchItem(itemName){
        cy.get("input[placeholder='Я шукаю...']").type(itemName)
    }

    clickSearchButton(){
        cy.get('.button.button_color_green.button_size_medium.search-form__submit').click()
    }
}

export const basePage = new BasePage()