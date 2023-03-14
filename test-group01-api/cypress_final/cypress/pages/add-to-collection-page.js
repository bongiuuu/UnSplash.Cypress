

export const AddToCollectionPage = {
    selectCollection(collectionName) {
        const LNK_SELECT_COLLECTION = `//span[text()='${collectionName}']`
        cy.xpath(LNK_SELECT_COLLECTION).click()
    }

}