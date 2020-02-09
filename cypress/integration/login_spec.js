import loginPageFactory from '../../support/LoginPage';

describe('Login', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    const LoginPage = loginPageFactory('/#/login');

    // afterEach(() => {
    //   cy.logout();
    // });

    it('Open WA with valid login and password', () => {
        LoginPage.login('slendqa@gmail.com', 'password1');

        cy.contains('Owner', { timeout: 20000 });
        cy.contains('Welcome to WorkAxle!');

        // cy.get('.top-settings__TopSettingsIcon-jNsnuo')
        //     .click();
            
        // cy.get('.styles__DropdownOptions-dqzucP > :nth-child(2)')
        //     .click();
            
        // cy.get(':nth-child(1) > .sc-ifAKCX > .Input-hxTtdt')
        //     .should('have.value', 'Black');

        // cy.get(':nth-child(2) > .sc-ifAKCX > .Input-hxTtdt')
        //     .should('have.value', 'Joker');

        // cy.get('.ShadowButton-kPGGiw > .ButtonCircle-fOFuwx')
        //     .should('have.text', 'Save')
        //     .click();
            
        // cy.get('.rrt-middle-container')
        //     .should('have.text', 'Settings updated successfully')
    });
});