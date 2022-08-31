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
    const [datanasc, setCep] = useState(dataEdit.datanasc|| "");
    const [cpf, setEndereco1] = useState(dataEdit.cpf || "");
    const [renda, setEndereco2] = useState(dataEdit.renda|| "");
   
    const handleSave = () => {
      if (!datanasc|| !cpf ||!renda) return;
  
      if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { datanasc, cpf,renda};
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), {datanasc, cpf,renda}]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const emailAlreadyExists = () => {
      if (dataEdit.cep !== cpf && data?.length) {
        return data.find((item) => item.cep === cpf);
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
                  <FormLabel>CPF</FormLabel>
                  <Input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <Input
                    type="text"
                    value={datanasc}
                    onChange={(e) =>setEndereco1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Renda Mensal</FormLabel>
                  <Input
                    type="email"
                    value={renda}
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