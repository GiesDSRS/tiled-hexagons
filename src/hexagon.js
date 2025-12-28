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
	const { sideLength, borderRadius, elevation, shadow, img, text, textStyle, href, target, onClick, fill, stroke, strokeWidth, styles, learnMoreText, learnMoreHref } = props
	
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
	const [showLearnMore, setShowLearnMore] = useState(false)
	
	const width = useMemo(() => Math.sqrt(3) * sideLength, [sideLength])
	const height = useMemo(() => 2 * sideLength, [sideLength])
	const fontSizeOffset = textStyle.fontSize ? 0.3 * parseInt(textStyle.fontSize) : 0
	
	// Memoize the hexagon path
	const hexagonPath = useMemo(() => generateHexSVG(sideLength, borderRadius), [sideLength, borderRadius])
	
	// Unique mask ID for this hexagon instance
	const maskId = useMemo(() => `hex-mask-${Math.random().toString(36).substr(2, 9)}`, [])
	
	// Simple rectangle for banner - the mask will cut it to shape
	const bannerRect = useMemo(() => {
		const bannerStartY = height * 0.70
		return {
			x: 0,
			y: bannerStartY,
			width: width,
			height: height - bannerStartY
		}
	}, [width, height])
	
	// Text position
	const bannerTextY = useMemo(() => height * 0.78, [height])
	
	const handleMouseOver = () => {
		setThHexagonStyle(thHexagonStyleHover)
		if (learnMoreHref) {
			setShowLearnMore(true)
		}
	}
	
	const handleMouseLeave = () => {
		setThHexagonStyle(thHexagonStyleNormal)
		setShowLearnMore(false)
	}
	
	const handleBannerClick = (e) => {
		if (learnMoreHref) {
			e.stopPropagation()
			window.open(learnMoreHref, target || '_blank')
		}
	}
	
	const hexagon = (
		<React.Fragment>
			<path fill={fill} d={hexagonPath} />
			<image href={img} width={0.7 * width} height={0.7 * height} x={0.15 * width} y={0.12 * height} />
			<text fill="#bbb" strokeWidth="0" style={textStyle}>
				<tspan x={width/2} y={height/2 + fontSizeOffset} textAnchor="middle">
					{text}
				</tspan>
			</text>
		</React.Fragment>
	)
	
	return (
		<div 
			style={{ 
				position: 'relative', 
				display: 'inline-block', 
				width: `${width}px`, 
				height: `${height + elevation}px` 
			}}
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseLeave}>
			<svg
				viewBox={`0 0 ${width} ${height + elevation}`}
				width={width}
				height={height + elevation}>
				
				{/* Define mask using exact hexagon shape */}
				<defs>
					<mask id={maskId}>
						<path d={hexagonPath} fill="white" />
					</mask>
				</defs>
				
				<svg y={elevation}>
					<path fill={shadow} d={hexagonPath} />
				</svg>
				
				<g
					style={thHexagonStyle}
					onMouseDown={() => setThHexagonStyle(thHexagonStyleActive)}
					onMouseUp={() => setThHexagonStyle(thHexagonStyleHover)}
					onClick={onClick}>
					{!href ? hexagon : <a href={href} target={target || '_blank'}>{hexagon}</a>}
				</g>
				
				{/* Learn More banner - simple rectangle with mask */}
				{learnMoreHref && showLearnMore && (
					<g 
						mask={`url(#${maskId})`}
						onClick={handleBannerClick}
						style={{ cursor: 'pointer' }}>
						<rect 
							x={bannerRect.x}
							y={bannerRect.y}
							width={bannerRect.width}
							height={bannerRect.height}
							fill="rgba(0, 0, 0, 0.75)"
						/>
						<text 
							x={width / 2}
							y={bannerTextY}
							textAnchor="middle"
							dominantBaseline="middle"
							style={{
								fill: '#fff',
								fontSize: `${Math.max(10, sideLength * 0.13)}px`,
								fontWeight: 'bold',
								pointerEvents: 'none',
								userSelect: 'none'
							}}>
							{learnMoreText || 'Learn More'}
						</text>
					</g>
				)}
			</svg>
		</div>
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
	onClick: () => {},
	learnMoreText: 'Learn More',
	learnMoreHref: null
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
	onClick: PropTypes.func,
	learnMoreText: PropTypes.string,
	learnMoreHref: PropTypes.string
}