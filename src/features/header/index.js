import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeader } from './store';

export function Header() {
  const headerStore = useSelector((state) => state.header);
  const dispatch = useDispatch();

  return (
    <div>
      <input value={headerStore.header} onChange={({ target }) => dispatch(changeHeader(target.value))} />
    </div>
  );
}
