import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/reducer';
import { RootState, AppDispatch } from '../store/index';

const UserComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user, status, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser(5)); // Fetch user with ID 1
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>{user ? `Hello, ${user.name}` : 'No user data'}</p>
    </div>
  );
};

export default UserComponent;