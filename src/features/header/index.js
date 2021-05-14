import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeader, changeHeaderAsync } from './store';
import { increment } from '../counter/counterSlice';

export function Header() {
  const headerStore = useSelector((state) => state.header);
  const dispatch = useDispatch();

  function changeHeaderFn({ target }) {
    dispatch(changeHeader(target.value));
  }

  function incrementFn() {
    dispatch(increment()); 
  }

  function incrementAsyncFn() {
    dispatch(changeHeaderAsync('hello Duong!!')); 
  }

  return (
    <div>
      <input value={headerStore.header} onChange={changeHeaderFn} />
      <button onClick={incrementFn}>increment</button>
      <div>{ headerStore.status }</div>
      <button onClick={incrementAsyncFn}>increment async</button>
    </div>
  );
}
