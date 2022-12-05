describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  xit('should have the number being display update running total', () => {
    const displayRunningTotal = cy.get('#running-total');
    displayRunningTotal.should('contain', 0);
    cy.get('#number2').click();
    displayRunningTotal.should('contain', 2);

  });

  xit('should update display based on the result of operation', () => {
    const displayRunningTotal = cy.get('#running-total');
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total');
    displayRunningTotal.should('contain', 7);
    
  });

  xit('should be able to chain multiple operators', () => {
    const displayRunningTotal = cy.get('#running-total');
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total');
    displayRunningTotal.should('contain', 4);

  });

  xit('should calculate and display large number', () => {
    const displayRunningTotal = cy.get('#running-total');
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total');
    displayRunningTotal.should('contain', 855855)

  });
  it('should display error when dividing by 0', () =>{
    const displayRunningTotal = cy.get('#running-total');
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total');
    // displayRunningTotal.should('contain', Infinity)
    // This is from the original code and it says infinity when you divide by 0
    displayRunningTotal.should('contain', 'Error');

  });


});