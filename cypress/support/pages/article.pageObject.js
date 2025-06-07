import PageObject from '../PageObject';

class ArticlePageObject extends PageObject {
  constructor() {
    super('/articles');
  }

  createArticle({ title, description, body }) {
    cy.contains('[data-qa=new-article-btn]', 'New Article').click();
    cy.get('[data-qa=title]').type(title);
    cy.get('[data-qa=description]').type(description);
    cy.get('[data-qa=body]').type(body);
    cy.contains('[data-qa=publish-btn]', 'Publish').click();
  }

  editArticle(newTitle) {
    cy.contains('[data-qa=article-title]', newTitle).click();
    cy.contains('[data-qa=edit-btn]', 'Edit').click();
    cy.get('[data-qa=title]').clear();
    cy.get('[data-qa=title]').type(newTitle);
    cy.contains('[data-qa=save-btn]', 'Save Changes').click();
  }

  deleteArticle() {
    cy.contains('[data-qa=delete-btn]', 'Delete').click();
  }

  assertArticleExists(title) {
    cy.get('[data-qa=article-list]').should('contain', title);
  }

  assertArticleUpdated(newTitle) {
    cy.get('[data-qa=article-list]').should('contain', newTitle);
  }

  assertArticleDeleted(title) {
    cy.get('[data-qa=article-list]').should('not.contain', title);
  }
}

export default ArticlePageObject;
