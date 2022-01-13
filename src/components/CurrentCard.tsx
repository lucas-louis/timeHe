import { VStack, HStack, Text, Divider } from '@chakra-ui/react';

import { ActivityProps } from 'types/Activities';

import { ParseEventDate } from 'utils/ParseDate';
import { ShowDescriptionCurrent } from 'utils/ShowDescription';

const CurrentCard = ({ activity }: ActivityProps): JSX.Element => (
	<VStack pt="24px" pb="16px" w="100%">
		<Text fontWeight="700" fontSize="40px" fontFamily="Sora" color="#DFB791">
			{ParseEventDate(activity.endingDate)}
		</Text>
		<HStack display={{ base: 'none', sm: 'flex' }}>
			<Text fontWeight="500" fontSize="24px" fontFamily="Sora" color="#DFB791">
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="24px" fontFamily="Sora" color="#DFB791">
				{ShowDescriptionCurrent(activity.description)}
			</Text>
		</HStack>
		<VStack display={{ base: 'flex', sm: 'none' }}>
			<Text fontWeight="500" fontSize="22px" fontFamily="Sora" color="#DFB791">
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="22px" fontFamily="Sora" color="#DFB791">
				{ShowDescriptionCurrent(activity.description)}
			</Text>
		</VStack>
		<Divider pt="24px" color="black" />
	</VStack>
);

export default CurrentCard;
