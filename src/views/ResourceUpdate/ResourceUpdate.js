import React from 'react';
import { useParams } from 'react-router';
import { TextField, Button, CardContent, CardHeader, Card, Divider } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { ElemsRenderer, Page } from '@/components';
import { getResource, updateResource } from '@/store/api/resources';
import { ResourceProperties } from './components';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';

// "name": "string",
// "key": "string",
// "placeholder": "string",
// "type": "text",
// "isRequired": true

const ResourceUpdate = () => {
  const { key } = useParams();

  const [resource, setResource] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const fetchResource = async () => {
    setLoading(true);
    const res = await getResource(key);
    setResource(res);
    setLoading(false);
  };

  React.useEffect(() => {
    if (key) {
      fetchResource();
    }
  }, [key]);

  const title = loading ? 'Loading...' : resource.description || 'New ResourceUpdate';
  const { properties = [] } = resource;
  const { enqueueSnackbar } = useSnackbar();

  const propertiesChangeHandler = async (newProperties) => {
    const updatedResource = { ...resource, properties: newProperties };

    try {
      await updateResource(updatedResource, key);
      setResource(updatedResource);
    } catch (err) {
      if (err.data?.errors) {
        err.data.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
      } else {
        enqueueSnackbar(JSON.stringify(err), { variant: 'error' });
      }
    }
  };

  const saveHandler = async () => {
    try {
      await updateResource(resource, key);
    } catch (err) {
      if (err.data?.errors) {
        err.data.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
      } else {
        enqueueSnackbar(JSON.stringify(err), { variant: 'error' });
      }
    }
  };

  const elems = [
    <Card>
      <CardHeader
        action={
          <Button color="primary" variant="contained" onClick={saveHandler}>
            Save
          </Button>
        }
        title={title}
      />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          label="Enter Description"
          onChange={({ target: { value } }) => setResource({ ...resource, description: value })}
          value={resource.description || ''}
          variant="outlined"
        />
      </CardContent>
    </Card>,

    <ResourceProperties properties={properties} onChange={(newProperties) => propertiesChangeHandler(newProperties)} />
  ];

  return (
    <Page variant="secondary" title={title} h1={title} h2="Browse ResourceUpdate">
      <ElemsRenderer elems={elems} />
    </Page>
  );
};

export default ResourceUpdate;
