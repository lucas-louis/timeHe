import { VStack, Image } from '@chakra-ui/react';

export const Header = (): JSX.Element => (
	<VStack w="100%" mt={{ base: '16px', md: '32px' }}>
		<Image src="./timeHe-white-logo.svg" w="125px" />
	</VStack>
);
