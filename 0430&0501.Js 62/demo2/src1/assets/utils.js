


export function delay(interval = 3000) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, interval);
	});
}