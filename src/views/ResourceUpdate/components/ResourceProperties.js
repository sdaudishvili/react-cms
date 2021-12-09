import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField
} from '@material-ui/core';
import { ElemsRenderer, ListRenderer, ListWrapper, Popup } from '@/components';
import deepClone from '@/utils/deepClone';
import { propertyKeyToLabel } from '@/utils/base';
import { PropertyTypes } from '@/utils/constants/PropertyTypes';

const DEFAULT_STATE = {
  name: '',
  key: '',
  placeholder: '',
  type: 'text',
  isRequired: false
};

const ResourceProperties = ({ properties, onChange }) => {
  const [currentItem, setCurrentItem] = React.useState({ index: null, details: deepClone(DEFAULT_STATE) });
  const [popupOpened, setPopupOpened] = React.useState(false);

  const cancelClickHandler = () => {
    setPopupOpened(false);
    setCurrentItem({ index: null, details: deepClone(DEFAULT_STATE) });
  };

  const editHandler = (index) => {
    setCurrentItem({ index, details: deepClone(properties[index]) });
    setPopupOpened(true);
  };

  // const deleteHandler = (index) => {
  //   const pinsCopy = Array.prototype.slice.call(items, 0);
  //   pinsCopy.splice(index, 1);
  //   onListChange(pinsCopy);
  // };

  const popupSaveHandler = () => {
    if (currentItem.index !== null) {
      const cpy = Array.prototype.slice.call(properties, 0);
      cpy[currentItem.index] = currentItem.details;
      onChange([...cpy]);
    } else {
      onChange([...properties, currentItem.details]);
    }
    setCurrentItem({ index: null, details: deepClone(DEFAULT_STATE) });
    setPopupOpened(false);
  };
  const handleValueUpdate = (field, value) => {
    setCurrentItem((val) => ({
      index: val.index,
      details: { ...val.details, [field]: value }
    }));
  };

  const generateTextFieldProps = (key) => ({
    fullWidth: true,
    label: propertyKeyToLabel(key),
    name: key,
    onChange: ({ target: { value } }) => handleValueUpdate(key, value),
    value: currentItem.details[key],
    variant: 'outlined'
  });

  const popupElems = [
    <TextField {...generateTextFieldProps('name')} />,
    <TextField {...generateTextFieldProps('key')} />,
    <TextField {...generateTextFieldProps('placeholder')} />,
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Type</InputLabel>
      <Select value={currentItem.details.type || ''} label="Type">
        {PropertyTypes.map((option) => (
          <MenuItem key={option.key} value={option.key} onClick={() => handleValueUpdate('type', option.key)}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <FormControlLabel
      control={
        <Switch
          checked={currentItem.details.isRequired}
          onChange={() => handleValueUpdate('isRequired', !currentItem.details.isRequired)}
        />
      }
      label="Required"
    />
  ];

  return (
    <>
      <ListWrapper
        title="Properties"
        pagination={false}
        action={
          <Button color="primary" variant="contained" onClick={() => setPopupOpened(true)}>
            Add property
          </Button>
        }
      >
        {properties && (
          <ListRenderer
            items={properties}
            onEditClick={(_value, index) => editHandler(index)}
            displayKeys={[
              { prop: 'name' },
              { prop: 'key' },
              { prop: 'placeholder' },
              { prop: 'type' },
              { prop: 'isRequired' }
            ]}
          />
        )}
      </ListWrapper>
      <Popup
        open={popupOpened}
        title="Add/Edit Property"
        onSave={popupSaveHandler}
        onClose={cancelClickHandler}
        onCancel={cancelClickHandler}
      >
        <ElemsRenderer elems={popupElems} />
      </Popup>
    </>
  );
};

ResourceProperties.propTypes = {
  properties: PropTypes.array,
  onChange: PropTypes.func
};

ResourceProperties.defaultProps = {
  properties: [],
  onChange: () => {}
};

export default ResourceProperties;
