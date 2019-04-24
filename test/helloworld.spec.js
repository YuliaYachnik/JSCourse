const { describe, it } = require('mocha');
const logger = require('../utils/log.util');
const dateTime = require('../utils/dateTime.util')
const { assert } = require('chai');

describe('Hello world TestSuite', () => {
    it('Should write "Hello world"', () => {
        logger.info('Hello world');
    });
});


describe('DateTime TestSuite', () => {
    it('Should write todays date', () => {
        var currentDate = new Date().setMilliseconds(0);
        assert.equal(dateTime.today(), currentDate, 'Days are not equals');
    });

    it('Should set year', () => {
        var year = 2020;
        var curDate = new Date();
        var specialDate = new Date(curDate.setFullYear(year)).setMilliseconds(0);
        assert.equal(dateTime.setYear(curDate, year), specialDate, 'Days are not equals');
    });

    it('Should calculate days difference', () => {
        var difference = 5;
        var dayLeft = new Date();
        var dayRight = new Date(new Date().setDate(dayLeft.getDate() + difference));
        assert.equal(dateTime.daysDifference(dayLeft, dayRight), difference, 'Differences between days are not equals');
    });
});