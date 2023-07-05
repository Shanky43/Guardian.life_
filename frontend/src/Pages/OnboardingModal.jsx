import { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { BsFileTextFill } from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { postGuardiansData } from '../Redux/HospitalData/action';

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
  const toast = useToast();
  const dispatch = useDispatch()
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

  // ...

  const handleNextStep = () => {
    if (step < 4) {
      if (
        (step === 1 && formData.phoneNumber.length >= 10 && /^[6-9]/.test(formData.phoneNumber)) ||
        (step === 2 && formData.allergies.length > 0 && formData.medications.length > 0 && formData.conditions.length > 0) ||
        (step === 3 && formData.emergencyContact.phoneNumber.length >= 10 && /^[6-9]/.test(formData.emergencyContact.phoneNumber))
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        toast({
          title: 'Invalid Information',
          description: 'Please fill in all the required fields correctly.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    }
  };

  // ...

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSave = () => {
    // Handle saving the form data
    dispatch(postGuardiansData(formData))
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}><Flex> <BsFileTextFill size={18} /> <Text pl="3">Enroll</Text></Flex></Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enroll</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {step === 1 && (
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input
                      type='number'
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      minLength={10}
                      required
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
            )}
            {step === 2 && (
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Allergies</FormLabel>
                  <Textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Current Medications</FormLabel>
                  <Textarea
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Medical Conditions</FormLabel>
                  <Textarea
                    name="conditions"
                    value={formData.conditions}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Stack>
            )}
            {step === 3 && (
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Contact Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.emergencyContact.name}
                    onChange={handleEmergencyContactChange}
                    required
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Contact Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input type='tel' placeholder='phone number...'
                      value={formData.emergencyContact.phoneNumber}
                      onChange={handleEmergencyContactChange}
                      required
                      minLength={10}
                      name="phoneNumber"
                    />
                  </InputGroup>
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
                <FormControl >
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
