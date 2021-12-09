import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { CardRenderer, ElemsRenderer, Page } from '@/components';
import { createResource } from '@/api/resources';

const ResourceCreate = () => {
  const [resource, setResource] = React.useState({ description: '' });
  const [key, setKey] = React.useState('');

  const saveHandler = async () => {
    try {
      await createResource(resource, key);
    } catch (err) {
      console.log(err);
    }
  };

  const elems = [
    <TextField
      fullWidth
      label="Enter Description"
      onChange={({ target: { value } }) => setResource({ ...resource, description: value })}
      value={resource.description || ''}
      variant="outlined"
    />,
    <TextField
      fullWidth
      label="Enter Key"
      onChange={({ target: { value } }) => setKey(value)}
      value={key || ''}
      variant="outlined"
    />,
    <Button variant="contained" color="primary" onClick={saveHandler}>
      Save
    </Button>
  ];

  return (
    <Page title="Create Resource" h1="Create Resource" h2="Resources" variant="secondary">
      <CardRenderer title="Configure Resource">
        <ElemsRenderer elems={elems} />
      </CardRenderer>
    </Page>
  );
};

export default ResourceCreate;