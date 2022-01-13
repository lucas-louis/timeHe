import { VStack, Box, Divider, Button, useDisclosure } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import Clock from 'react-live-clock';

import { useEffect, useState } from 'react';

import ActivityCard from 'components/ActivityCard';
import CurrentCard from 'components/CurrentCard';
import Modal from 'components/Modal';
import CurrentModalCard from 'components/CurrentModalCard';
import ActivityModalCard from 'components/ActivityModalCard';

import { ActivityElement } from 'types/Activities';

import { CheckEndingEvent } from 'utils/CheckEndingEvent';

const HomePage = (): JSX.Element => {
	const [events, setEvents] = useState([{ name: '', startingDate: '', endingDate: '', description: '' }]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		const interval = setInterval(() => {
			setEvents(CheckEndingEvent());
		});
		return () => clearInterval(interval);
	}, []);

	const currentActivity = (activity: ActivityElement) => {
		const currentDate = new Date().getTime();
		const startingDate = new Date(activity.startingDate).getTime();
		const endingDate = new Date(activity.endingDate).getTime();
		if (currentDate >= startingDate && currentDate <= endingDate) return true;
		return false;
	};

	return (
		<VStack w="100%" mt="32px">
			<Divider />
			<VStack fontSize={{ base: '56px', sm: '80px' }} fontFamily="Sora" fontWeight="600" color="white">
				<Clock format="HH:mm:ss" ticking timezone="Europe/Paris" />
			</VStack>
			<Box w="100%" m={{ base: '0 0 24px 0 !important', sm: '32px !important' }}>
				<VStack w="100%" maxH="512px" spacing="16px" pt={{ base: '8px', sm: '40px' }} overflow="hidden">
					{events.map((event) => {
						if (event.name !== '') {
							if (currentActivity(event)) return <CurrentCard activity={event} />;
							return <ActivityCard activity={event} />;
						}
						return <></>;
					})}
				</VStack>
			</Box>
			<Button
				onClick={() => {
					onOpen();
				}}
				borderRadius="100px"
				w="32px"
			>
				<ArrowDownIcon w="24px%" h="24px" />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} title="All the events">
				<VStack w="100%" spacing="16px" pt="40px">
					{events.map((event) => {
						if (event.name !== '') {
							if (currentActivity(event)) return <CurrentModalCard activity={event} />;
							return <ActivityModalCard activity={event} />;
						}
						return <></>;
					})}
				</VStack>
			</Modal>
		</VStack>
	);
};

export default HomePage;
