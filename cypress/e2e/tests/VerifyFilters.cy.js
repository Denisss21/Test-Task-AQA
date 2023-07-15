import { basePage } from "../../support/pageObjects/BasePage.js"
import { smartphonesTVElectronicsPage } from "../../support/pageObjects/smartphonesTVElectronicsPage/SmartphonesTVAndElectronicsPage.js"
import { mobilePhonesPage } from "../../support/pageObjects/smartphonesTVElectronicsPage/MobilePhonesPage.js"

describe('Check Filters', () =>{

    const firstCategoryName = 'Смартфони, ТВ і електроніка'
    const firstSubCategoryName = 'Мобільні телефони'
    const filterType = 'Продавець'
    const filterValue = "Rozetka"
    const secondfilterType = 'Бренд'
    const secondFilterName = "Apple"
    const thirdFilerType = ' Цiна'
    const minValue = 30000;
    const maxValue = 50000;

    it('Verify the price filter working correctly', () =>{
        basePage.goToMainPage()
        basePage.chooseCategoryByName(firstCategoryName)

        smartphonesTVElectronicsPage.chooseCategoryByName(firstSubCategoryName)

        mobilePhonesPage.getFilterByCategory(filterType)
        mobilePhonesPage.setFilterValue(filterValue)

        mobilePhonesPage.getFilterByCategory(secondfilterType)
        mobilePhonesPage.setFilterValue(secondFilterName)

        mobilePhonesPage.getFilterByCategory(thirdFilerType)
        mobilePhonesPage.setRangePriceValue(minValue, maxValue)

        mobilePhonesPage.verifyPriceRange(minValue, maxValue)

        basePage.sortItemsFromCheapToExpensive()
    })
})