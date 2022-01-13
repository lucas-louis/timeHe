import { CloseIcon } from '@chakra-ui/icons';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Button } from '@chakra-ui/react';

import { modalBackgroundColor, titleColor } from 'config/AppConfig';

type PopupProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: JSX.Element;
};

const Popup = ({ isOpen, onClose, title, children }: PopupProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent w="75%" bg={modalBackgroundColor}>
			<ModalHeader fontSize={{ base: '24px' }} textAlign="center" color={titleColor}>
				{title}
			</ModalHeader>
			<ModalBody mb="32px">{children}</ModalBody>

			<ModalFooter flexDirection="column" alignItems="center">
				<Button w="100%" onClick={onClose} bgColor="#DFB791" id="ipc-modal-close-button">
					<CloseIcon />
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default Popup;
