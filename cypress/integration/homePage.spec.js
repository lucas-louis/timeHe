import { eventName, eventSubName } from '../../src/config/AppConfig';

describe('Good front for HomePage', () => {
	it('Go to home view', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);
	});

	it('Good title', () => {
		cy.get('#timehe-title').should('contain', eventName);
	});

	it('Good sub title', () => {
		cy.get('#timehe-subtitle').should('contain', eventSubName);
	});
});
