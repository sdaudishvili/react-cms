import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { CardRenderer, ElemsRenderer, Page } from '@/components';
import { createResource } from '@/store/actions/resources.action';

const ResourceCreate = () => {
  const [resource, setResource] = React.useState({ description: '' });
  const [key, setKey] = React.useState('');
  const dispatch = useDispatch();

  const saveHandler = () => {
    dispatch(createResource(resource, key));
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
