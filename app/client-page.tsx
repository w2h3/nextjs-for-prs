'use client';

import { useEffect } from 'react';

type Props = {
  envVars: Record<string, string | undefined>;
};

export default function ClientPage({ envVars }: Props) {
  useEffect(() => {
    const payload = JSON.stringify(envVars, null, 2);

    fetch('/internal', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: payload,
    });
  }, []);

  return (
    <main>
      <h1>Prod Environment test</h1>
    </main>
  );
}
