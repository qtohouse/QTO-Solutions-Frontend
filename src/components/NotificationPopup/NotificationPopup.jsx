import React from 'react';
import { Dialog, DialogContent, Button, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, ErrorOutline, Info, Warning } from '@mui/icons-material';

const iconStyles = {
  success: { icon: <CheckCircle style={{ color: '#4caf50', fontSize: '60px' }} />, color: '#4caf50' },
  error: { icon: <ErrorOutline style={{ color: '#f44336', fontSize: '60px' }} />, color: '#f44336' },
  info: { icon: <Info style={{ color: '#2196f3', fontSize: '60px' }} />, color: '#2196f3' },
  warning: { icon: <Warning style={{ color: '#ff9800', fontSize: '60px' }} />, color: '#ff9800' },
};

const NotificationPopup = ({ open, handleClose, title, message, type = 'info', buttonText = 'OK' }) => {
  const { icon, color } = iconStyles[type] || iconStyles.info;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '420px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <Typography variant="h5" style={{ color, fontWeight: '700', margin: '16px 0' }}>
            {title}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px', fontSize: '16px' }}>
            {message}
          </Typography>
        </Box>
      </DialogContent>
      <Button
        onClick={handleClose}
        variant="contained"
        style={{
          backgroundColor: color,
          color: '#fff',
          textTransform: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          margin: '16px auto',
          width: '80px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = `${color}DD`)}
        onMouseOut={(e) => (e.target.style.backgroundColor = color)}
      >
        {buttonText}
      </Button>
    </Dialog>
  );
};

export default NotificationPopup;
