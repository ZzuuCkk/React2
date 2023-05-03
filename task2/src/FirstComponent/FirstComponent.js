
import React from 'react';
import SecondComponent from '../SecondComponent/SecondComponent';

function FirstComponent() {
  const arr = ['Bmw','Lexus','Honda','Ferrari','Porsche','Subaru','Mercedes'];
  return (
    <div>
      <SecondComponent secondArr={arr} />
    </div>
  );
}

export default FirstComponent;



