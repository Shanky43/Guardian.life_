import { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

const OnboardingModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    allergies: '',
    medications: '',
    conditions: '',
    emergencyContact: {
      name: '',
      phoneNumber: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      emergencyContact: { ...prevData.emergencyContact, [name]: value },
    }));
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSave = () => {
    // Handle saving the form data
    console.log(formData);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Open Onboarding</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Onboarding</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {step === 1 && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Stack>
            )}
            {step === 2 && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Allergies</FormLabel>
                  <Textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Current Medications</FormLabel>
                  <Textarea
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Medical Conditions</FormLabel>
                  <Textarea
                    name="conditions"
                    value={formData.conditions}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Stack>
            )}
            {step === 3 && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Contact Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.emergencyContact.name}
                    onChange={handleEmergencyContactChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Phone Number</FormLabel>
                  <Input
                    name="phoneNumber"
                    value={formData.emergencyContact.phoneNumber}
                    onChange={handleEmergencyContactChange}
                  />
                </FormControl>
              </Stack>
            )}
            {step === 4 && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input value={formData.name} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input value={formData.email} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input value={formData.phoneNumber} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Allergies</FormLabel>
                  <Textarea value={formData.allergies} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Current Medications</FormLabel>
                  <Textarea value={formData.medications} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Medical Conditions</FormLabel>
                  <Textarea value={formData.conditions} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Name</FormLabel>
                  <Input
                    value={formData.emergencyContact.name}
                    isReadOnly
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Phone Number</FormLabel>
                  <Input
                    value={formData.emergencyContact.phoneNumber}
                    isReadOnly
                  />
                </FormControl>
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            {step > 1 && (
              <Button mr={2} onClick={handlePreviousStep}>
                Previous
              </Button>
            )}
            {step < 4 ? (
              <Button onClick={handleNextStep}>Next</Button>
            ) : (
              <Button colorScheme="blue" onClick={handleSave}>
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OnboardingModal;
