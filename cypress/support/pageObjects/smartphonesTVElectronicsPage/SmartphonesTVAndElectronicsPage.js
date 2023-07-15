export class SmartphonesTVAndElectronicsPage{


    chooseCategoryByName(name){
        cy.get('a[class="tile-cats__heading tile-cats__heading_type_center ng-star-inserted"]')
            .contains(name)
            .click()
    }

    backToCategories(){
        cy.get("li[class='breadcrumbs__item breadcrumbs__item--last ng-star-inserted'] a[class='breadcrumbs__link'] span").click()
    }

    clickItemByName(itemName){
        cy.contains('.goods-tile__title', itemName).click()
        cy.wait(10000)
    }
}

export const smartphonesTVElectronicsPage= new SmartphonesTVAndElectronicsPage()