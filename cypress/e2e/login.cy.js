
describe('Login and Logout Test', () => {
  it('logs in and logs out successfully', () => {
    // Visit login page
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // Login
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()


    // Logout
    cy.get('p.oxd-userdropdown-name').click()
    cy.contains('Logout').click()

  })
})
