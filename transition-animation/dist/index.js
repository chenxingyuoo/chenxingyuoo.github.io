"use strict";
var ANIMATION = {};
var isPlainObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
var isUndefined = function (val) {
    return typeof val === 'undefined';
};
/**
 * 动画函数
 * @param {Options} options
 */
ANIMATION.animation = function (options) {
    options = options || {};
    var result = {};
    var current = options.current;
    var start = options.start;
    var end = options.end;
    var easeFn = options.easeFn;
    var form = options.form;
    var to = options.to;
    if (start > end) {
        throw Error("Start cannot be greater than the end");
    }
    if (start < 0 || end < 0) {
        throw Error("Start or end value cannot be less than 0");
    }
    var elapsed = (current - start);
    var duration = (end - start);
    easeFn = easeFn || ANIMATION.Easing.linear;
    // 处理undefined
    if (isUndefined(form) || isUndefined(to)) {
        var num = easeFn(elapsed, 0, 1, duration);
        if (num > 1) {
            num = 1;
        }
        return num;
    }
    // 处理不是对象
    if (!isPlainObject(form) || !isPlainObject(to)) {
        throw Error('form and to is not object');
    }
    // 处理对象
    for (var key in to) {
        if (to.hasOwnProperty(key)) {
            var formValue = Number(form[key]);
            var toValue = Number(to[key]);
            if (isNaN(formValue) || isNaN(toValue)) {
                throw Error('value is not number');
            }
            var change = toValue - formValue;
            var num = easeFn(elapsed, formValue, change, duration);
            result[key] = num;
            // if (formValue < toValue) {
            //   const newFormValue = formValue - formValue
            //   const newToValue = toValue - formValue
            //   num = easeFn(elapsed, newFormValue, newToValue, duration)
            //   num = num + formValue
            //   if (num > toValue) {
            //     num = toValue
            //   }
            // } else {
            //   const newFormValue = formValue - formValue
            //   const newToValue = (formValue - toValue)
            //   num = easeFn(elapsed, newFormValue, newToValue, duration)
            //   num = formValue - num
            //   if (num < toValue) {
            //     num = toValue;
            //   }
            // }
            // result[key] = num
        }
    }
    return result;
};
// 缓冲动画函数对象
ANIMATION.Easing = {
    /**
     * 线性动画
     * @param {number} elapsed 当前值
     * @param {number} initialValue 初始值
     * @param {number} amountOfChange 变化值
     * @param {number} duration 动画时长
     */
    linear: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * elapsed / duration + initialValue;
    },
    easeInQuad: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * (elapsed /= duration) * elapsed + initialValue;
    },
    easeOutQuad: function (elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue;
    },
    easeInOutQuad: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * elapsed * elapsed + initialValue;
        }
        return -amountOfChange / 2 * (--elapsed * (elapsed - 2) - 1) + initialValue;
    },
    easeInCubic: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * (elapsed /= duration) * elapsed * elapsed + initialValue;
    },
    easeOutCubic: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed + 1) + initialValue;
    },
    easeInOutCubic: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * elapsed * elapsed * elapsed + initialValue;
        }
        return amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed + 2) + initialValue;
    },
    easeInQuart: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed + initialValue;
    },
    easeOutQuart: function (elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed - 1) + initialValue;
    },
    easeInOutQuart: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * elapsed * elapsed * elapsed * elapsed + initialValue;
        }
        return -amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed * elapsed - 2) + initialValue;
    },
    easeInQuint: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed * elapsed + initialValue;
    },
    easeOutQuint: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed * elapsed + 1) + initialValue;
    },
    easeInOutQuint: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * elapsed * elapsed * elapsed * elapsed * elapsed + initialValue;
        }
        return amountOfChange / 2 * ((elapsed -= 2) * elapsed * elapsed * elapsed * elapsed + 2) + initialValue;
    },
    easeInSine: function (elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange * Math.cos(elapsed / duration * (Math.PI / 2)) + amountOfChange + initialValue;
    },
    easeOutSine: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * Math.sin(elapsed / duration * (Math.PI / 2)) + initialValue;
    },
    easeInOutSine: function (elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange / 2 * (Math.cos(Math.PI * elapsed / duration) - 1) + initialValue;
    },
    easeInExpo: function (elapsed, initialValue, amountOfChange, duration) {
        return elapsed === 0 ? initialValue : amountOfChange * Math.pow(2, 10 * (elapsed / duration - 1)) + initialValue;
    },
    easeOutExpo: function (elapsed, initialValue, amountOfChange, duration) {
        return elapsed === duration
            ? initialValue + amountOfChange
            : amountOfChange * (-Math.pow(2, -10 * elapsed / duration) + 1) + initialValue;
    },
    easeInOutExpo: function (elapsed, initialValue, amountOfChange, duration) {
        if (elapsed === 0) {
            return initialValue;
        }
        if (elapsed === duration) {
            return initialValue + amountOfChange;
        }
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * Math.pow(2, 10 * (elapsed - 1)) + initialValue;
        }
        return amountOfChange / 2 * (-Math.pow(2, -10 * --elapsed) + 2) + initialValue;
    },
    easeInCirc: function (elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange * (Math.sqrt(1 - (elapsed /= duration) * elapsed) - 1) + initialValue;
    },
    easeOutCirc: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange * Math.sqrt(1 - (elapsed = elapsed / duration - 1) * elapsed) + initialValue;
    },
    easeInOutCirc: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration / 2) < 1) {
            return -amountOfChange / 2 * (Math.sqrt(1 - elapsed * elapsed) - 1) + initialValue;
        }
        return amountOfChange / 2 * (Math.sqrt(1 - (elapsed -= 2) * elapsed) + 1) + initialValue;
    },
    easeInElastic: function (elapsed, initialValue, amountOfChange, duration) {
        var s = 1.70158;
        var p = 0;
        var a = amountOfChange;
        if (elapsed === 0) {
            return initialValue;
        }
        if ((elapsed /= duration) === 1) {
            return initialValue + amountOfChange;
        }
        if (!p) {
            p = duration * 0.3;
        }
        if (a < Math.abs(amountOfChange)) {
            a = amountOfChange;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
        }
        return -(a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p)) + initialValue;
    },
    easeOutElastic: function (elapsed, initialValue, amountOfChange, duration) {
        var s = 1.70158;
        var p = 0;
        var a = amountOfChange;
        if (elapsed === 0) {
            return initialValue;
        }
        if ((elapsed /= duration) === 1) {
            return initialValue + amountOfChange;
        }
        if (!p) {
            p = duration * 0.3;
        }
        if (a < Math.abs(amountOfChange)) {
            a = amountOfChange;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
        }
        return a * Math.pow(2, -10 * elapsed) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) + amountOfChange + initialValue;
    },
    easeInOutElastic: function (elapsed, initialValue, amountOfChange, duration) {
        var s = 1.70158;
        var p = 0;
        var a = amountOfChange;
        if (elapsed === 0) {
            return initialValue;
        }
        if ((elapsed /= duration / 2) === 2) {
            return initialValue + amountOfChange;
        }
        if (!p) {
            p = duration * (0.3 * 1.5);
        }
        if (a < Math.abs(amountOfChange)) {
            a = amountOfChange;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
        }
        if (elapsed < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p)) + initialValue;
        }
        return (a * Math.pow(2, -10 * (elapsed -= 1)) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) * 0.5 + amountOfChange + initialValue);
    },
    easeInBack: function (elapsed, initialValue, amountOfChange, duration, s) {
        if (s === void 0) { s = 1.70158; }
        return amountOfChange * (elapsed /= duration) * elapsed * ((s + 1) * elapsed - s) + initialValue;
    },
    easeOutBack: function (elapsed, initialValue, amountOfChange, duration, s) {
        if (s === void 0) { s = 1.70158; }
        return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * ((s + 1) * elapsed + s) + 1) + initialValue;
    },
    easeInOutBack: function (elapsed, initialValue, amountOfChange, duration, s) {
        if (s === void 0) { s = 1.70158; }
        if ((elapsed /= duration / 2) < 1) {
            return amountOfChange / 2 * (elapsed * elapsed * (((s *= 1.525) + 1) * elapsed - s)) + initialValue;
        }
        return amountOfChange / 2 * ((elapsed -= 2) * elapsed * (((s *= 1.525) + 1) * elapsed + s) + 2) + initialValue;
    },
    easeInBounce: function (elapsed, initialValue, amountOfChange, duration) {
        return amountOfChange - ANIMATION.Easing.easeOutBounce(duration - elapsed, 0, amountOfChange, duration) + initialValue;
    },
    easeOutBounce: function (elapsed, initialValue, amountOfChange, duration) {
        if ((elapsed /= duration) < 1 / 2.75) {
            return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
        }
        else if (elapsed < 2 / 2.75) {
            return amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) + initialValue;
        }
        else if (elapsed < 2.5 / 2.75) {
            return amountOfChange * (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) + initialValue;
        }
        else {
            return amountOfChange * (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) + initialValue;
        }
    },
    easeInOutBounce: function (elapsed, initialValue, amountOfChange, duration) {
        if (elapsed < duration / 2) {
            return ANIMATION.Easing.easeInBounce(elapsed * 2, 0, amountOfChange, duration) * 0.5 + initialValue;
        }
        return ANIMATION.Easing.easeOutBounce(elapsed * 2 - duration, 0, amountOfChange, duration) * 0.5 + amountOfChange * 0.5 + initialValue;
    }
};