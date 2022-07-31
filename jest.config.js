module.exports = {
	collectCoverageFrom: [ "src/**" ],
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest"
	},
	coverageThreshold: {
		global: {
			statements: 95,
			branches: 95,
			functions: 95,
			lines: 95,
		}
	}
};
