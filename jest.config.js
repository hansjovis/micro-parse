/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverageFrom: [ "src/**" ],
	// Index files do not contain any logic, so can be ignored for code coverage.
	coveragePathIgnorePatterns: [ "index\.ts" ],
	coverageThreshold: {
		global: {
			statements: 95,
			branches: 95,
			functions: 95,
			lines: 95,
		}
	}
};
