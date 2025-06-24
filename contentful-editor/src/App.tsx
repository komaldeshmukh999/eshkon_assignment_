import React, { useEffect, useState } from 'react';
import { init } from '@contentful/app-sdk';
import type { EntryAPI } from '@contentful/app-sdk';

const App: React.FC = () => {
  const [entryId, setEntryId] = useState<string | null>(null);

  useEffect(() => {
    init((sdk) => {
      if (sdk.location.is('entry')) {
        const entrySdk = sdk as { entry: EntryAPI };
        const id = entrySdk.entry.getSys().id;
        setEntryId(id);
      }
    });
  }, []);

  if (!entryId) return <div>Loading Contentful App...</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🔧 Drag-and-Drop Layout Builder</h1>
      <p>Connected to Entry ID: <strong>{entryId}</strong></p>
    </div>
  );
};

export default App;



