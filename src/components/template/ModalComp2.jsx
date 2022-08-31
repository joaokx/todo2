import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [cep, setCep] = useState(dataEdit.cep || "");
    const [endereco1, setEndereco1] = useState(dataEdit.endereco1 || "");
    const [endereco2, setEndereco2] = useState(dataEdit.endereco2|| "");
   
    const handleSave = () => {
      if (!cep || !endereco1 ||!endereco2) return;
  
      if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { cep, endereco1,endereco2};
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), {cep, endereco1,endereco2}]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const emailAlreadyExists = () => {
      if (dataEdit.cep !== cep && data?.length) {
        return data.find((item) => item.cep === cep);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Clientes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Cep</FormLabel>
                  <Input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>endereco 1</FormLabel>
                  <Input
                    type="text"
                    value={endereco1}
                    onChange={(e) =>setEndereco1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>endereco 2</FormLabel>
                  <Input
                    type="email"
                    value={endereco2}
                    onChange={(e) => setEndereco2(e.target.value)}
                  />
                </Box>
                
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;