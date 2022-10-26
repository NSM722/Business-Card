import App from '../../src/App'

// A single test that ensures that our component mounts.
describe('Test the component functionality', () => {
  it('mounts', () => {
    cy.mount(<App />)
  })
})