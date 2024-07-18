// SpinnerComponent.jsx
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default SpinnerComponent;
