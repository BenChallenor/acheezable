describe('Add new acheezement', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
  })

  it('checks title is `Acheezable`', function() {
    cy.get('title').contains('Acheezable')
  })

  it('checks header is `Create Acheezements`', function() {
    cy.get('h1').contains('Create Acheezements')
  })

  it('displays a suggested goal when the user clicks "Need a suggestion"', function(){
    cy.get('#goalSuggestion').click()
    expect('#suggestedGoal').to.be.a('string')
  })

  it('adds the suggestion when the accept button is clicked', function() {
    cy.get('#goalSuggestion').click()
    cy.get('#acceptSuggestion').click()
    cy.get('#viewGoals').click()
    expect('li').to.be.a('string')
  })

  it('allows user to input a goal and view it on the "View Acheezements" page', function() {
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click()
    cy.get('#viewGoals').click()
    cy.get('body').contains("Meditate")
  })

  it('allows user to input and submit a second goal and view both goals on the "View Acheezements" page', function() {
    cy.get('#inputGoal').type('Go for a run')
    cy.get('#addGoal').click()
    cy.get('#viewGoals').click()
    cy.get('body').contains("Meditate")
    cy.get('body').contains("Go for a run")
  })
});
