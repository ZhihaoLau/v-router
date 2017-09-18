let assert = require('assert')
import * as util from '../src/util'

describe('Util', () => {
	describe('getUrlParams', () => {
		it('should return object', () => {
			let url = 'https://abc.com#abc'

			assert.deepEqual(util.getUrlParams(url), {
				path: 'abc',
				query: {}
			})
		})
	})	
})