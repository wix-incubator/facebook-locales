"use strict"

import chai from 'chai'
import * as FacebookLocales from "../src/FacebookLocales.js"

let should = chai.should()

describe("FacebookLocales", function() {
    it ('maps en_US to en_US', function() {
		FacebookLocales.bestFacebookLocaleFor("en_US").should.equal("en_US")
    })
})
