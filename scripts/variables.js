export const laptopView = 1024; // 1024px standard
export const mobileLandscapeView = 640; // 640px standard
export const tabletView = 768;
export let clientWidth = document.documentElement.clientWidth;

export function setClientWidth(value) {
	clientWidth = value;
}
