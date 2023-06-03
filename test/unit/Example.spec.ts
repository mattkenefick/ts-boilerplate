import { configureServer } from '../mock/server/test';
import { expect } from 'chai';
// import { Example } from '../../src/index';

/**
 * @author Matt Kenefick<matt@polymermallard.com>
 * @package Boilerplate Utilities
 */
describe('Example', () => {
	it('should do a thing', async () => {
		const example: Example = new Example();

		expect(example).to.equal(undefined);
	});
});
