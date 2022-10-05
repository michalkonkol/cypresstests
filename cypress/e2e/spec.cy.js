/// <reference types="cypress" />
it('should open qloc', () => {
  cy.visit('https://q-loc.com')
  // const navbarHeight = 85
  // const logo = cy.get('a[class="navbar-brand text-hide logo"]').invoke('css', 'top').then(width => Number(width.slice(0, -2))).should('lt', navbarHeight)
  // console.log(logo)
  // cy.get('#moove_gdpr_cookie_info_bar')
  //   .should('be.visible')
  // cy.get('#moove_gdpr_cookie_info_bar > div > div > div.moove-gdpr-button-holder > button').click()
  // cy.get('#moove_gdpr_cookie_info_bar')
  //   .should('not.be.visible')

  cy.get('#menu-item-35 > a').click()
  cy.url().should('equal', 'https://q-loc.com/about-us/')

})
