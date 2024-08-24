import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Coupang from '../coupang.png';
import CoupangEats from '../coupangEats.png';

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

function ProductModal({ open, handleClose }) {
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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1">쿠팡으로 재료 주문</Typography>
            <Box
              component="img"
              src={Coupang}
              alt="Coupang"
              sx={{ width: '100px', height: '100px', mt: 1 }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1">쿠팡 이츠로 음식 배달</Typography>
            <Box
              component="img"
              src={CoupangEats}
              alt="Coupang Eats"
              sx={{ width: '100px', height: '100px', mt: 1, borderRadius:7 }}
            />
          </Box>
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

export default ProductModal;