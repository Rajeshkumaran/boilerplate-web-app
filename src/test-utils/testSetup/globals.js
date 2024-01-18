/* global jest */

// Setting blank secrets manually to use in msal.js beacuse jest can't load secrets directly from VaultService
window.secrets = {};
window.projectTerm = 'default';

window.performance.getEntriesByName = jest.fn().mockImplementation(() => {});
window.performance.mark = jest.fn().mockImplementation(() => {});

beforeAll((done) => {
  done();
});
