import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const User = ({ onClose, onLogout, onGoToDashboard, firstname, lastname, email }) => {
  return (
    <div className="fixed top-20 right-10 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-md shadow-lg p-6 w-80 flex flex-col items-center"
      >
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-semibold text-primary ">{firstname} {lastname}</h2>
        <p className="text-md font-semibold text-primary mb-4">{email}</p>

        <div className="flex flex-col gap-4 w-full">
          <Button
            variant="contained"
            color="primary"
            onClick={onGoToDashboard}
            className="w-full bg-primary hover:bg-secondary"
          >
            Go to Dashboard
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onLogout}
            className="w-full border-2 bg-white border-primary border-solid text-primary hover:text-secondary hover:border-secondary"
          >
            Log Out
          </Button>
          
        </div>
      </motion.div>
    </div>
  );
};

export default User;
