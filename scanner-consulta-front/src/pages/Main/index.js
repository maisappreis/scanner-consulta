import React, { useState } from 'react';
import Scanner from './Scanner';
import Results from './Results';

export default function Main() {
  const [isbn, setIsbn] = useState();

  return (
      <>
        <Scanner onScan={setIsbn} />
        {isbn && <Results isbn={isbn} />}
      </>
    );
}
