import { expect } from 'chai'
import * as util from '../src/util'

describe('Util', () => {
	describe('#getUrlParams', () => {
		let longUrl = 'http://www.abc.com/#/blogs?q=es6&month=9'

		it('should return object', () => {
			expect(util.getUrlParams(longUrl)).to.be.a('object')
		})

		it('should get hashName', () => {
			expect(util.getUrlParams(longUrl).path).to.be.equal('/blogs')
		})

		it('should get query', () => {
			expect(util.getUrlParams(longUrl).query).to.deep.equal({
				month: '9',
				q: 'es6'	
			})
		})

		let shortUrl = 'http://www.abc.com'

		it('should not get hashName while it not present', () => {
			expect(util.getUrlParams(shortUrl).path).to.be.undefined
		})

		it('should return empty object while query not present', () => {
			expect(util.getUrlParams(shortUrl).query).to.deep.equal({})
		})

	})	
})