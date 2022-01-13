import { VStack, HStack, Text } from '@chakra-ui/react';

import { ActivityProps } from 'types/Activities';

import { ParseEventDate } from 'utils/ParseDate';
import { ShowDescriptionActivity } from 'utils/ShowDescription';

const ActivityCard = ({ activity }: ActivityProps): JSX.Element => (
	<VStack pt="24px" w="100%">
		<Text fontWeight="700" fontSize="20px" fontFamily="Sora">
			{ParseEventDate(activity.startingDate)}
		</Text>
		<HStack display={{ base: 'none', sm: 'flex' }}>
			<Text fontWeight="500" fontSize="16px" fontFamily="Sora">
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="16px" fontFamily="Sora">
				{ShowDescriptionActivity(activity.description)}
			</Text>
		</HStack>
		<VStack display={{ base: 'flex', sm: 'none' }}>
			<Text fontWeight="500" fontSize="16px" fontFamily="Sora">
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="16px" fontFamily="Sora">
				{ShowDescriptionActivity(activity.description)}
			</Text>
		</VStack>
	</VStack>
);

export default ActivityCard;
