export const staggerContainer = (staggerChildren, delayChildren) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const fadeIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0,
	},
	show: {
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
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: delay,
			ease: 'easeInOut',
		},
	},
});

export const spanFade = (delay) => ({
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: 0.2 *  Math.floor(delay),
			ease: 'easeInOut',
		},
	},
});