export const ShowDescriptionActivity = (description: string) => {
	if (description !== '') {
		return `- ${description}`;
	}
	return <></>;
};

export const ShowDescriptionCurrent = (description: string) => {
	if (description !== '') {
		return `- ${description}`;
	}
	return <></>;
};
