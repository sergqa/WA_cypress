export default url => ({
    
    //LOCATORS
    elements: {
        signUpButton: ".ShadowButton-kPGGiw > .ButtonCircle-fOFuwx",
        signInButton: ".styles__TopButton-bHnXnR > .ButtonCircle-fOFuwx",
        username: ":nth-child(1) > .styles__Input-emtRGF",
        password: ":nth-child(2) > .styles__Input-emtRGF",
        submitButton: '.ShadowButton-kPGGiw > .ButtonCircle-fOFuwx',
    },

    //Regular LOGIN
    login(username = 'login', password = 'password') {
    cy.get(this.elements.signUpButton).should('have.text', 'Sign up');
    cy.get(this.elements.signInButton).should('have.text', 'Sign in').click();
    cy.get('h1').should('have.text', 'Sign in to WorkAxle');
    cy.get(this.elements.username).type(username).should('have.value', username);
    cy.get(this.elements.password).type(password).should('have.value', password);
    cy.get(this.elements.submitButton).should('have.text', 'Continue').click();
    },

    navigate() {
        cy.visit(url);
        this.waitUntilVisible();
    },

    waitUntilVisible() {
        cy.get(this.elements.username);
    },
});
