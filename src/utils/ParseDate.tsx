export const ParseEventDate = (fullDate: string) => {
	const date = new Date(fullDate.split('T')[0]).toDateString();
	const currentDate = new Date().toDateString();
	if (date !== currentDate) {
		const time = fullDate.split('T')[1];
		return `${date} - ${time}`;
	}
	return fullDate.split('T')[1];
};
