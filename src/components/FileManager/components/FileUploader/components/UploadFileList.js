import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileIcon from '@material-ui/icons/InsertDriveFile';

const UploadFileList = (props) => {
  const { files } = props;

  const list = files.map((f, i) => (
    <ListItem dense key={f.name.concat('-', i)}>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>
      <ListItemText primary={`${f.name}`} />
    </ListItem>
  ));

  return (
    <div>
      <List component="nav">{list}</List>
    </div>
  );
};

UploadFileList.propTypes = {
  files: PropTypes.array
};

UploadFileList.defaultProps = {
  files: []
};

export default UploadFileList;
