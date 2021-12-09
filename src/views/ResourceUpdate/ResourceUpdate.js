import { useParams } from 'react-router';
import { TextField, Button, CardContent, CardHeader, Card, Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ElemsRenderer, Page } from '@/components';
import { ResourceProperties } from './components';
import { getResource, updateResource } from '@/store/actions/resources.action';

const ResourceUpdate = () => {
  const { key } = useParams();

  const [resource, setResource] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const fetchResource = async () => {
    setLoading(true);
    const res = await dispatch(getResource(key));
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

  const saveHandler = async () => {
    dispatch(updateResource(resource, key));
  };

  const propertiesChangeHandler = (newProperties) => {
    const updatedResource = { ...resource, properties: newProperties };
    dispatch(updateResource(updatedResource, key));
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
