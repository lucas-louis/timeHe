import { eventName, eventSubName } from '../../src/config/AppConfig';

describe('Good front for HomePage', () => {
	it('Go to home view', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);
	});

	it('Good title', () => {
		cy.get('#timeHe-title').should('contain', eventName);
	});

	it('Good sub title', () => {
		cy.get('#timeHe-subtitle').should('contain', eventSubName);
	});
});
