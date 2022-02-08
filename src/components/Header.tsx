import { VStack, Image } from '@chakra-ui/react';

import { logoURL } from 'config/AppConfig';

export const Header = (): JSX.Element => (
	<VStack w="100%" mt={{ base: '16px', md: '32px' }}>
		<Image src={logoURL} w="125px" />
	</VStack>
);
