import React from 'react';
import { Navigate } from "react-router-dom";

function PrivateRoute({ condition, children, fallback }) {
  return (
    condition ? children : <Navigate to={fallback} replace />
  );
}

export { PrivateRoute };