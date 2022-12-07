export const hoursToMinutes = ( hourString: string ) => {
	const [ hours, minutes ] = hourString.split(":").map(Number);
	const minutesAmount = (hours * 60) + minutes;

	return minutesAmount;
};

export const minutesToHours = (minutesTotal: number) => {
	const hours = Math.floor(minutesTotal / 60);
	const minutes = minutesTotal % 60;
	const hoursAmount = `${padTo2(hours)}:${padTo2(minutes)}`;

	return hoursAmount;
};

const padTo2 = (num : number) => {
	return num.toString().padStart(2, "0");
};