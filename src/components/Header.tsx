import { VStack, Image } from '@chakra-ui/react';

export const Header = (): JSX.Element => (
	<VStack w="100%" mt={{ base: '16px', md: '32px' }}>
		<Image
			src="https://raw.githubusercontent.com/lucas-louis/timeHe/3b35df9a2ff83411f21a283a43932ca51142a20e/.github/assets/timeHe-white-logo.svg"
			w="125px"
		/>
	</VStack>
);
