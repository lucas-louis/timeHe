import { activities } from 'config/DataActivities';

export const CheckEndingEvent = () => {
	const activitiesList = [{ name: '', startingDate: '', endingDate: '', description: '' }];

	activities.map((activity) => {
		const currentDate = new Date().getTime();
		const endingDate = new Date(activity.endingDate).getTime();
		if (currentDate <= endingDate) return activitiesList.push(activity);
		return false;
	});

	return activitiesList;
};
