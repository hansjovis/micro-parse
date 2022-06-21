module.exports = {
	collectCoverageFrom: [ "src/**" ],
	coverageThreshold: {
		global: {
			statements: 95,
			branches: 95,
			functions: 95,
			lines: 95,
		}
	}
};
