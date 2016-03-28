import { expect } from 'chai'
import { bestFacebookLocaleFor } from '../src/FacebookLocales'

describe('FacebookLocales', () => {
    it ('supports the default locale: English (United States)', () => {
		expect(bestFacebookLocaleFor('en_US')).to.equal('en_US')
    })

    it ('supports a standard locale: French (France)', () => {
		expect(bestFacebookLocaleFor('fr_FR')).to.equal('fr_FR')
    })

    it ('supports a non-standard locale: Spanish (Latin America)', () => {
		expect(bestFacebookLocaleFor('es_AR')).to.equal('es_LA')
    })

    it ('supports a non-standard locale: Arabic', () => {
		expect(bestFacebookLocaleFor('ar_EG')).to.equal('ar_AR')
    })

    it ('makes best effort to return a supported Facebook locale with the same langauge as an unsupported locale', () => {
		expect(bestFacebookLocaleFor('fr_CG').substring(0, 2)).to.equal('fr')
    })

    it ('falls back to English (United States) if all else fails', () => {
		expect(bestFacebookLocaleFor('xx_XX')).to.equal('en_US')
    })
})
