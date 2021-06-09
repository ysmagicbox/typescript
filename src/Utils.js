"use strict";
exports.__esModule = true;
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.checkText = function () {
        return 'hello';
    };
    Utils.prototype.add = function (numberA, numberB) {
        return numberA + numberB;
    };
    Utils.prototype.subtract = function (numberA, numberB) {
        return numberA - numberB;
    };
    Utils.prototype.calculateDayDiff = function () {
        // 7-6-2021
        // 5-7-2021
        var date1 = new Date(2010, 6, 17);
        var date2 = new Date(2013, 12, 18);
        var diff = new Date(date2.getTime() - date1.getTime());
        return diff.getUTCDate() - 1;
    };
    return Utils;
}());
exports.Utils = Utils;
console.log('test');
