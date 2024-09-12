import React from 'react';

const Filter = () => {
  return (
    <form action='/search'>
      <input name='query' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Filter;
