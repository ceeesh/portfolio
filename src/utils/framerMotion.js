export const staggerContainer = (staggerChildren, delayChildren) => ({
	offscreen: {},
	onscreen: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const fadeIn = (direction, type, delay, duration) => ({
	offscreen: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: 'easeIn',
		},
	},
});

export const fade = (duration, delay) => ({
	offscreen: { opacity: 0 },
	onscreen: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: delay,
			ease: 'easeInOut',
		},
	},
});

export const spanFade = (delay) => ({
	offscreen: { opacity: 0 },
	onscreen: {
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: 0.2 *  Math.floor(delay),
			ease: 'easeInOut',
		},
	},
});

export const bounceIn = (direction, type, duration, bounce) => ({
	offscreen: {
		x: direction
	},
	onscreen: {
		x: 0,
		transition: {
			type: type,
			duration: duration,
			bounce: bounce
		},
	},
});