export type ThemeSpeed = "slow" | "normal" | "fast" | number;

export interface ThemeSwitchProps {
	speed?: ThemeSpeed;
}

export const cubicBezierProgressAtX = (
	x: number,
	p1x: number,
	p1y: number,
	p2x: number,
	p2y: number
): number => {
	const bezier = (
		t: number,
		p0: number,
		p1: number,
		p2: number,
		p3: number
	) => {
		const c = 3 * (p1 - p0);
		const b = 3 * (p2 - p1) - c;
		const a = p3 - p0 - c - b;
		return ((a * t + b) * t + c) * t + p0;
	};

	let lower = 0;
	let upper = 1;
	let t = x;
	for (let i = 0; i < 12; i++) {
		const currentX = bezier(t, 0, p1x, p2x, 1);
		if (Math.abs(currentX - x) < 1e-5) break;
		if (currentX < x) lower = t;
		else upper = t;
		t = (lower + upper) / 2;
	}
	return bezier(t, 0, p1y, p2y, 1);
};

export const resolveAnimationDuration = (speed?: ThemeSpeed): number => {
	if (typeof speed === "number") return Math.max(0, speed);
	switch (speed) {
		case "slow":
			return 1000;
		case "fast":
			return 350;
		default:
			return 600;
	}
};