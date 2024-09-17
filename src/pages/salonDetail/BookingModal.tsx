// BookingModal.tsx
import React from 'react';
import { Modal, Button } from 'antd';
import { Bed } from '@/types'; // Định nghĩa kiểu Bed

interface BookingModalProps {
  isModalOpen: boolean;
  pickedBed: Bed;
  onConfirm: () => void;
  onCancel: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isModalOpen, pickedBed, onConfirm, onCancel }) => {
  return (
    <Modal
      title="Xác nhận đặt giường"
      visible={isModalOpen}
      onOk={onConfirm}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={onConfirm} style={{ backgroundColor: '#86664B', borderColor: '#86664B' }}>
          Đồng ý
        </Button>,
      ]}
    >
      <p>Bạn đang đặt giường: {pickedBed.name}</p>
      <p>Mô tả: {pickedBed.description}</p>
      <p>Trạng thái: {pickedBed.status}</p>
    </Modal>
  );
};

export default BookingModal;
