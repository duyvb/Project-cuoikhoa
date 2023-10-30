import React from 'react';
import UserDeleteAction from './UserDeleteAction';
import UserEditAction from './UserEditAction';

function UserAction({data}) {
  return (
    <>
      <UserDeleteAction data={data} />
      <UserEditAction data={data} />
    </>
  );
}

export default UserAction;
