import React from 'react';

const Loading = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  loader: {
    border: '16px solid #f3f3f3', /* Light grey */
    borderTop: '16px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default Loading;
