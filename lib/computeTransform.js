"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = computeTransform;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function computeTransform(_ref) {
    var _ref$degree = _ref.degree,
        degree = _ref$degree === undefined ? 90 : _ref$degree,
        offsetDegree = _ref.offsetDegree;

    var hdeg = degree / 180 * Math.PI;

    var m = Matrix.getRotateMatrix(0.25 * Math.PI);
    var kx = Math.cos(hdeg / 2) * Math.pow(2, 0.5);
    var ky = Math.sin(hdeg / 2) * Math.pow(2, 0.5);
    m.setScala(kx, ky);

    if (offsetDegree) {
        var hodeg = offsetDegree / 180 * Math.PI;
        m.setRotate(hodeg);
    }

    var a = m.a,
        b = m.b,
        c = m.c,
        d = m.d,
        e = m.e,
        f = m.f;

    return "matrix(" + a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + f + ")";
}

var Matrix = function () {
    function Matrix() {
        _classCallCheck(this, Matrix);
    }

    _createClass(Matrix, [{
        key: "setScala",
        value: function setScala(kx, ky) {
            var m = this;
            m.a = m.a * kx;
            m.b = m.b * ky;
            m.c = m.c * kx;
            m.d = m.d * ky;
            m.e = m.e * kx;
            m.f = m.f * ky;
        }
    }, {
        key: "setRotate",
        value: function setRotate(hd) {
            var m = this;
            var a = m.a,
                b = m.b,
                c = m.c,
                d = m.d,
                e = m.e,
                f = m.f;

            var cosv = Math.cos(hd);
            var sinv = Math.sin(hd);

            m.a = cosv * a - sinv * b;
            m.b = sinv * a + cosv * b;
            m.c = cosv * c - sinv * d;
            m.d = sinv * c + cosv * d;
            m.e = cosv * e - sinv * f;
            m.f = sinv * e + cosv * f;
        }
    }], [{
        key: "getRotateMatrix",
        value: function getRotateMatrix(hd) {
            var m = new Matrix();
            m.a = Math.cos(hd);
            m.b = Math.sin(hd);
            m.c = -Math.sin(hd);
            m.d = Math.cos(hd);
            m.e = 0;
            m.f = 0;
            return m;
        }
    }]);

    return Matrix;
}();