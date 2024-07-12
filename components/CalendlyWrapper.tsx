// components/CalendlyWrapper.tsx
'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWrapper = () => {

  return (
    <div>
      <InlineWidget url={process.env.REACT_APP_CALENDLY_URL ?? ''} />
    </div>
  );
};

export default CalendlyWrapper;
