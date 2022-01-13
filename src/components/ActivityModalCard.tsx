import { VStack, Text } from '@chakra-ui/react';

import { ActivityProps } from 'types/Activities';

import { ParseEventDate } from 'utils/ParseDate';
import { ShowDescriptionActivity } from 'utils/ShowDescription';

const ActivityModalCard = ({ activity }: ActivityProps): JSX.Element => (
	<VStack pt="8px" w="100%">
		<Text fontWeight="700" fontSize="20px" fontFamily="Sora">
			{ParseEventDate(activity.startingDate)}
		</Text>
		<VStack spacing="1px">
			<Text fontWeight="700" fontSize="16px" fontFamily="Sora">
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="16px" fontFamily="Sora">
				{ShowDescriptionActivity(activity.description)}
			</Text>
		</VStack>
	</VStack>
);

export default ActivityModalCard;
