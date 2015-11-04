"use strict"

import chai from 'chai'
import * as FacebookLocales from "../src/FacebookLocales.js"

let should = chai.should()

describe("FacebookLocales", function() {
    it ("supports the default locale: English (United States)", function() {
		FacebookLocales.bestFacebookLocaleFor("en_US").should.equal("en_US")
    })

    it ("supports a standard locale: French (France)", function() {
		FacebookLocales.bestFacebookLocaleFor("fr_FR").should.equal("fr_FR")
    })

    it ('supports a non-standard locale: Spanish (Latin America)', function() {
		FacebookLocales.bestFacebookLocaleFor("es_AR").should.equal("es_LA")
    })

    it ('supports a non-standard locale: Arabic', function() {
		FacebookLocales.bestFacebookLocaleFor("ar_EG").should.equal("ar_AR")
    })

    it ('makes best effort to return a supported Facebook locale with the same langauge as an unsupported locale', function() {
		FacebookLocales.bestFacebookLocaleFor("fr_CG").substring(0, 2).should.equal("fr")
    })

    it ('falls back to English (United States) if all else fails', function() {
		FacebookLocales.bestFacebookLocaleFor("xx_XX").should.equal("en_US")
    })
})
