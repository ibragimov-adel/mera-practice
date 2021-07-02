describe('Initial Test', () => {
	it('index.html should be loaded', () => {
		cy.request('http://localhost:5000/132')
			.then((response) => {
				expect(response.status).to.be.equal(200);
			})
	})
})