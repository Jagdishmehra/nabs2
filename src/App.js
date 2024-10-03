import React, { useState } from 'react';

import CreateAccountForm from './components/CreateAccountForm';
import BusinessInformationForm from './components/BusinessInformationForm';

function App() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/311/935/small_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg')" }}>
      {step === 1 && <CreateAccountForm handleNextStep={handleNextStep} />}
      {step === 2 && <BusinessInformationForm handlePreviousStep={handlePreviousStep} handleNextStep={handleNextStep} />}
    </div>
  );
}

export default App;
