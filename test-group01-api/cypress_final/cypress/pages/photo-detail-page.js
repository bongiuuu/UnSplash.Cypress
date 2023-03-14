const BTN_FOLLOW = "//a[contains(text(),'View profile')]/preceding-sibling::div//button"
const IMG_ICON = "(//div[@data-test='photos-route']//img)[1]"

export const PhotoDetailPage = {
    hoverOnImageIcon() {
        cy.hover(IMG_ICON)
    },
    clickFollowButton() {
        cy.xpath(BTN_FOLLOW).click()
    },
    getIcon() {
        return cy.xpath(BTN_FOLLOW)
    }
}