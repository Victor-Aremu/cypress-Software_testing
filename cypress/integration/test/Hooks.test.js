describe("hooks", ()=>{
   
        before(() => {

            cy.log("This is the Before Hook")
          // runs once before all tests in the block
        })
      
        beforeEach(() => {
            cy.log("This is a BeforeEach Hook")
            cy.screenshot()
          // runs before each test in the block
        })
      
        afterEach(() => {
            cy.log("This is an afterEach Hook")
          // runs after each test in the block
        })
      
        after(() => {
            cy.log("This is an after Hook")
          // runs once after all tests in the block
        })
    
    it('first test case', () => {
        cy.log("first")
    });
    
    it('second test case', () => {
        cy.log("second")
    });

    it('third test case', () => {
        cy.log("third")
    });
    
    
    

})