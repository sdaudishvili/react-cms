import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Tooltip, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { FileIcon, defaultStyles } from 'react-file-icon';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    display: 'flex'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    width: 15,
    height: 15,
    flexShrink: 0,
    '& img': {
      maxWidth: '100%',
      borderRadius: 3
    },
    '& svg': {
      fontSize: 'inherit'
    }
  },
  file: {
    padding: '4px 8px',
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#fafafa'
    },
    '&[data-selected="true"]': {
      backgroundColor: '#e8f0fe'
    }
  },
  fileName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    wordBreak: 'break-word',
    fontSize: 12
  },
  dirIcon: {
    color: theme.palette.icon
  },
  selected: {
    boxShadow: '0 0 0 1px rgb(63 81 181), 0 1px 3px 0 hsl(231deg 48% 48%)'
  }
}));

const ListFile = (props) => {
  const { file, isSelected, onFileDoubleClick, onFileClick, onFileContextMenu } = props;
  const classes = useStyles();

  const { name, url = '', type, path } = file;

  const [extension] = name.split('.').reverse();

  // eslint-disable-next-line no-unused-vars
  const renderFileIcon = (e, u, n) => {
    return <FileIcon extension={e} {...defaultStyles[e]} />;
  };

  return (
    <div
      aria-hidden="true"
      role="button"
      tabIndex="0"
      onClick={(e) => onFileClick(e, { name, url, type, path })}
      onDoubleClick={() => onFileDoubleClick({ type, name, url, path })}
      onContextMenu={(e) => onFileContextMenu(e, { name, url, type, path })}
      data-selected={isSelected}
      className={clsx(classes.file)}
    >
      <Tooltip title={name} arrow>
        <Box className="box" alignItems="center" display="flex">
          <Box mr={2} className={classes.icon}>
            {type === 'dir' ? <FolderIcon className={classes.dirIcon} /> : renderFileIcon(extension, url, name)}
          </Box>
          <Typography className={classes.fileName} variant="h6">
            {name}
          </Typography>
        </Box>
      </Tooltip>
    </div>
  );
};

ListFile.propTypes = {
  file: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onFileDoubleClick: PropTypes.func,
  onFileClick: PropTypes.func,
  onFileContextMenu: PropTypes.func
};

ListFile.defaultProps = {
  isSelected: false,
  onFileDoubleClick: () => {},
  onFileClick: () => {},
  onFileContextMenu: () => {}
};

export default ListFile;
