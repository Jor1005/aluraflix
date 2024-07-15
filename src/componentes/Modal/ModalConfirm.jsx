import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #000000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled(Button)`
  background: #d9534f;
  color: white;
`;

const CancelButton = styled(Button)`
  background: #ccc;
  color: black;
`;

const ModalConfirm = ({show, title, children, onConfirm, onClose }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalConfirm;
