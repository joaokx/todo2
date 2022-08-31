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
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const [tel, setTel] = useState(dataEdit.tel || "");
    const [lastname, setLastName] = useState(dataEdit.lastname || "");
    const handleSave = () => {
      if (!name || !email ||!tel ||!lastname) return;
  
      if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, email,tel,lastname};
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, email,tel,lastname }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const emailAlreadyExists = () => {
      if (dataEdit.email !== email && data?.length) {
        return data.find((item) => item.email === email);
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
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Sobrenome</FormLabel>
                  <Input
                    type="name"
                    value={lastname}
                    onChange={(e) =>setLastName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Telefone</FormLabel>
                  <Input
                    type="telephone"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
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