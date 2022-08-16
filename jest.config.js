/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
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
