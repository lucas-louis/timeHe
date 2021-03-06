import { VStack, Text, Divider } from '@chakra-ui/react';

import { ActivityProps } from 'types/Activities';

import { ParseEventDate } from 'utils/ParseDate';
import { ShowDescriptionCurrent } from 'utils/ShowDescription';

import { secondaryColor } from 'config/AppConfig';

const CurrentModalCard = ({ activity }: ActivityProps): JSX.Element => (
	<VStack pt="8px" pb="16px" w="100%">
		<Text fontWeight="700" fontSize="20px" fontFamily="Sora" color={secondaryColor}>
			{ParseEventDate(activity.endingDate)}
		</Text>
		<VStack spacing="1px">
			<Text fontWeight="500" fontSize="16px" fontFamily="Sora" color={secondaryColor}>
				{activity.name}
			</Text>

			<Text fontWeight="500" fontSize="16px" fontFamily="Sora" color={secondaryColor}>
				{ShowDescriptionCurrent(activity.description)}
			</Text>
		</VStack>
		<Divider pt="24px" color="black" />
	</VStack>
);

export default CurrentModalCard;
