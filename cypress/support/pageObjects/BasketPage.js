export class BasketPage{

    verifyTitlesInBasket(expectedTitles){
       cy.get('a.cart-product__title').each(($product) => {
          const title = $product.text().trim();

          cy.wrap(expectedTitles).should('include', title);
       })
    }

    verifyTotalPriceInBasket() {
        let sum = 0;
        let totalPrice = 0;
      
        cy.get('.cart-product__price').each(($item) => {
          const price = parseFloat($item.text().replace(/\s/g, ''));
          sum += price;
        })
        
        cy.get('.cart-receipt__sum-price').each(($total) =>{
            totalPrice = parseFloat($total.text().replace(/\s/g, ''));
          }).then(() => {
          expect(sum).to.equal(totalPrice);
        });
      }

    closeBasket(){
        cy.get("button[aria-label='Закрити модальне вікно']").should('be.enabled').click()
    }
}

export const basketPage = new BasketPage()