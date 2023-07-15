export class MobilePhonesPage{

        getFilterByCategory(filterCategory){
            cy.get('.sidebar-block.ng-star-inserted')
                .find('button[class="sidebar-block__toggle ng-star-inserted"]')
                .find('.sidebar-block__toggle-title')
                .contains(filterCategory)
        }

        setFilterValue(filterValue){
            cy.get('ul[class="checkbox-filter"]')
            .find('li')
            .find(`.checkbox-filter__link[data-id=${filterValue}]`)
            .contains(filterValue)
            .click()
        }

        setRangePriceValue(minValue, maxValue){
             cy.get('div[class="slider-filter__inner"]')
                .find('input[formcontrolname="min"]').click().clear().type(minValue)

            cy.get('div[class="slider-filter__inner"]')
                .find('input[formcontrolname="max"]').click().clear().type(maxValue)

            cy.get('button[class="button button_color_gray button_size_small slider-filter__button"]')
                .should('be.visible')
                .click()
            cy.wait(3000)
        }

        verifyPriceRange(minValue, maxValue){  
            cy.get('span.goods-tile__price-value')
            .each(($price) =>{
                const price = parseInt($price.text().replace(/\s/g, ''));
                expect(price).to.be.within(minValue, maxValue);
            })
        }
}

export const mobilePhonesPage = new MobilePhonesPage()