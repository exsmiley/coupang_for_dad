import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Coupang from '../coupang.png';
import CoupangEats from '../coupangEats.png';

import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #333',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

function OderModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          쿠팡 이츠로 음식 주문
        </Typography> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 2,
          }}
        >
            <Link to="/ingre">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="subtitle1">주문 완료</Typography>
                <Box
                component="img"
                src={Coupang}
                alt="Coupang"
                sx={{ width: '100px', height: '100px', mt: 1 }}
                />
            </Box>
          </Link>
        </Box>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          쿠팡으로 재료 주문
        </Typography>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
          닫기
        </Button> */}
      </Box>
    </Modal>
  );
}

export default OderModal;