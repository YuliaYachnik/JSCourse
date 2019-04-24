class DateTimeUtil {

    today() {
        return new Date().setMilliseconds(0);
    }

    setYear(date, year) {
        return new Date(new Date(date).setFullYear(year)).setMilliseconds(0);
    }

    daysDifference(dayLeft, dayRight) {
        var timeDiff = Math.abs(new Date(dayRight).getTime() - new Date(dayLeft).getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}

module.exports = new DateTimeUtil();