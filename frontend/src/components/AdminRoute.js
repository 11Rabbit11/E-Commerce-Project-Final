import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export default function AdminRoute({ children }) {
  // useContext hook allows you to access the state from the context
  const { state } = useContext(Store);
  // Destructuring the `userInfo` object from the state
  const { userInfo } = state;

  // If userInfo exists and userInfo.isAdmin is true,
  // render the `children` prop (nested components),
  // otherwise redirect to the '/signin' route using the Navigate component
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
