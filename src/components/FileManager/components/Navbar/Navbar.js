import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, IconButton } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ViewListIcon from '@material-ui/icons/ViewList';
import AppsIcon from '@material-ui/icons/Apps';
import RefreshIcon from '@material-ui/icons/Refresh';
import { SearchField } from './components';
import { fileManagerView } from '@/utils/constants/fileManagerView';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: theme.palette.black,
    color: 'white'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}));

const NavBar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { onCreateFolder, onUploadFile, onSearchWordChange, onViewChange, view } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton onClick={onCreateFolder} color="inherit" title="New Folder">
          <CreateNewFolderIcon />
        </IconButton>
        <IconButton onClick={onUploadFile} color="inherit" title="Upload File">
          <CloudUploadIcon />
        </IconButton>

        <IconButton color="inherit" title="Refresh">
          <RefreshIcon />
        </IconButton>

        <div className={classes.grow} />
        <IconButton
          color={view === fileManagerView.LIST ? 'default' : 'inherit'}
          title="List View"
          onClick={() => onViewChange(fileManagerView.LIST)}
        >
          <ViewListIcon />
        </IconButton>
        <IconButton
          color={view === fileManagerView.GRID ? 'default' : 'inherit'}
          title="Grid View"
          onClick={() => onViewChange(fileManagerView.GRID)}
        >
          <AppsIcon />
        </IconButton>
        <SearchField onChange={onSearchWordChange} />
      </Toolbar>
    </div>
  );
};

NavBar.propTypes = {
  onUploadFile: PropTypes.func,
  onCreateFolder: PropTypes.func,
  onSearchWordChange: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.oneOf(Object.values(fileManagerView))
};

NavBar.defaultProps = {
  onUploadFile: () => {},
  onCreateFolder: () => {},
  onSearchWordChange: () => {},
  onViewChange: () => {},
  view: fileManagerView.GRID
};

export default NavBar;
