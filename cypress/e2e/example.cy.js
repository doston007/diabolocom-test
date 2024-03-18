describe('Example page', () => {
  beforeEach(() => {
    const baseUrl = '/nested/example.html'
    cy.visit(baseUrl)
  })

  it("should show 'Example' as title", () => {
    cy.title().should('eq', 'Example')
  })

  const counterWithInitial = 'base-counter[initial-count="4"]'

  it('Initial count check', () => {
    cy.get('i18n-host')
      .shadow()
      .get(counterWithInitial)
      .shadow()
      .get('metrics-display')
      .shadow()
      .find('.metrics strong')
      .should('contain.text', '4')
  })

  it('Increment count', () => {
    cy.get('i18n-host')
      .shadow()
      .get(counterWithInitial)
      .shadow()
      .find('.plus')
      .click()
      .click()
      .get('metrics-display')
      .shadow()
      .find('.metrics strong')
      .should('contain.text', '6')
  })

  it('Decrement count', () => {
    cy.get('i18n-host')
      .shadow()
      .get(counterWithInitial)
      .shadow()
      .find('.minus')
      .click()
      .click()
      .get('metrics-display')
      .shadow()
      .find('.metrics strong')
      .should('contain.text', '2')
  })

  it('Reset button check', () => {
    cy.get('i18n-host')
      .shadow()
      .get(counterWithInitial)
      .shadow()
      .get(`${counterWithInitial} control-panel`)
      .shadow()
      .find('.reset')
      .click()
      .get(`${counterWithInitial} metrics-display`)
      .shadow()
      .find('.metrics strong')
      .should('contain.text', '0')
  })

  it('Reset to initial button check', () => {
    cy.get('i18n-host')
      .shadow()
      .get(counterWithInitial)
      .shadow()
      .get(`${counterWithInitial} control-panel`)
      .shadow()
      .find('.reset-initial')
      .click()
      .get(`${counterWithInitial} metrics-display`)
      .shadow()
      .find('.metrics strong')
      .should('contain.text', '4')
  })
})
