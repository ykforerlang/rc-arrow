'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Arrow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _computeTransform = require('./computeTransform');

var _computeTransform2 = _interopRequireDefault(_computeTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Arrow(props) {
    var className = props.className,
        style = props.style,
        color = props.color,
        size = props.size;

    var trans = (0, _computeTransform2.default)(props);
    var finalStyle = _extends({
        borderStyle: 'solid',
        borderTopColor: color,
        borderRightColor: color,
        borderWidth: '1px 1px 0 0',
        width: size,
        height: size

    }, style, {

        transform: trans // cannot override
    });

    return _react2.default.createElement('div', {
        style: finalStyle,
        className: className
    });
}

Arrow.propTypes = {
    degree: _propTypes2.default.number,
    offsetDegree: _propTypes2.default.number,
    size: _propTypes2.default.string,
    color: _propTypes2.default.any
};