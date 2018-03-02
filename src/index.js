import React from 'react'
import PropTypes from 'prop-types'
import computeTransform from './computeTransform'

export default function Arrow(props) {
    const { className, style, color, size } = props
    const trans = computeTransform(props)
    const finalStyle = {
        borderStyle: 'solid',
        borderTopColor: color,
        borderRightColor: color,
        borderWidth: `1px 1px 0 0`,
        width: size,
        height: size,

        ...style,

        transform: trans, // cannot override
    }

    return (
        <div
            style={finalStyle}
            className={className}
        />
    )
}

Arrow.propTypes = {
    degree: PropTypes.number,
    offsetDegree: PropTypes.number,
    size: PropTypes.string,
    color: PropTypes.any
}