import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { generateHexSVG } from './generateHexSVG'

const elevationStyleHover = (elevation) => {
	return {
		cursor: 'pointer',
		transform: `translateY(${elevation/2}px)`
	}
}

const elevationStyleActive = (elevation) => {
	return {
		cursor: 'pointer',
		transition: 'all 0.1s ease',
		transform: `translateY(${elevation}px)`
	}
}

const Hexagon = (props) => {
	const { sideLength, borderRadius, elevation, shadow, img, text, textStyle, href, target, onClick, fill, stroke, strokeWidth, styles } = props
	
	const thHexagonStyleBase = useMemo(() => ({
		userSelect: 'none',
		stroke,
		strokeWidth: `${strokeWidth}px`, 
		transition: 'all 0.2s ease',
	}), [stroke, strokeWidth])

	const thHexagonStyleNormal = useMemo(() => 
		Object.assign({}, thHexagonStyleBase, styles.normal),
		[thHexagonStyleBase, styles.normal]
	)
	
	const thHexagonStyleHover = useMemo(() => 
		Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleHover(elevation) : {}, styles.hover),
		[thHexagonStyleBase, elevation, styles.hover]
	)
	
	const thHexagonStyleActive = useMemo(() => 
		Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleActive(elevation) : {}, styles.active),
		[thHexagonStyleBase, elevation, styles.active]
	)

	const [thHexagonStyle, setThHexagonStyle] = useState(thHexagonStyleNormal)

	const width = Math.sqrt(3) * sideLength
	const height = 2 * sideLength + elevation

	const fontSizeOffset = textStyle.fontSize ? 0.3 * parseInt(textStyle.fontSize) : 0
	
	const hexagon = (
		<React.Fragment>
			<path fill={fill} d={generateHexSVG(sideLength, borderRadius)} />
			<image href={img} width={0.7 * width} height={0.7 * height} x={0.15 * width} y={0.12 * height} />
			<text fill="#bbb" strokeWidth="0" style={textStyle}>
				<tspan x={width/2} y={height/2 + fontSizeOffset} textAnchor="middle">
					{text}
				</tspan>
			</text>
		</React.Fragment>
	)

	return (
		<svg
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			height={height}>
			<svg y={elevation}><path fill={shadow} d={generateHexSVG(sideLength, borderRadius)} /></svg>
			<g
				style={thHexagonStyle}
				onMouseOver={() => setThHexagonStyle(thHexagonStyleHover)}
				onMouseLeave={() => setThHexagonStyle(thHexagonStyleNormal)}
				onMouseDown={() => setThHexagonStyle(thHexagonStyleActive)}
				onMouseUp={() => setThHexagonStyle(thHexagonStyleHover)}
				onClick={onClick}>
				{!href ? hexagon : <a href={href} target={target || '_blank'}>{hexagon}</a>}
			</g>
		</svg>
	)
}

export default Hexagon

Hexagon.defaultProps = {
	sideLength: 100,
	borderRadius: 12,
	fill: 'white',
	stroke: '#bbb',
	strokeWidth: 0,
	elevation: 12,
	shadow: '#e2e2e2',
	img: '',
	text: '',
	textStyle: {},
	styles: {
		normal: {},
		hover: {},
		active: {}
	},
	href: null,
	target: null,
	onClick: () => {}
}

Hexagon.propTypes = {
	sideLength: PropTypes.number,
	borderRadius: PropTypes.number,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	strokeWidth: PropTypes.number,
	elevation: PropTypes.number,
	shadow: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
	textStyle: PropTypes.object,
	styles: PropTypes.shape({
		normal: PropTypes.object,
		hover: PropTypes.object,
		active: PropTypes.object
	}),
	href: PropTypes.string,
	target: PropTypes.string,
	onClick: PropTypes.func
}
