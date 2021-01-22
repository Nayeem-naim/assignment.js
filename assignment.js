
// https://github.com/Nayeem-naim/assignment.js

//  kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;

}

//budgetCalculator
function budgetCalculator(clock, mobile, laptop) {
    var first = clock * 50;
    var second = mobile * 100;
    var third = laptop * 500;
    total = first + second + third;
    return total;
}


//hotelCost
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var first10Day = 10 * 100;
        var extraDay = day - 10;
        var secondCost = extraDay * 80;
        totalCost = first10Day + secondCost;
    }
    else {
        var first10Day = 10 * 100;
        var second20Day = 10 * 80;
        var lastDay = day - 20;
        var lastDayCost = lastDay * 50;
        totalCost = first10Day + second20Day + lastDayCost;
    }
    return totalCost;
}


//megaFriend
function megaFriend(names) {
    var max = [0];
    for (var i = 0; i < names.length; i++) {
        if (max < names[i].length) {
            var max = names[i].length;
            element = names[i];
        }
    }
    return element;
}
