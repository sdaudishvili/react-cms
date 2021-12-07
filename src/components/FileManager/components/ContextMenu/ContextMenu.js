import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import { OpenAction, DownloadAction, CropAction, DeleteAction } from './ContextMenuActions';

const ContextMenu = (props) => {
  const {
    selectedFiles,
    acts,
    contextMenuVisible,
    contextMenuPosition,
    onContentextMenuOpen,
    onContentextMenuCrop,
    onContentextMenuDelete
  } = props;
  const [x = 0, y = 0] = contextMenuPosition;

  const actionsComp = acts.map((act, key) => {
    let component;
    if (act === 'open') {
      component = <OpenAction onClick={onContentextMenuOpen} key={'act'.concat('-', key)} />;
    }
    if (act === 'download') {
      component = <DownloadAction selectedFile={selectedFiles[0]} key={'act'.concat('-', key)} />;
    }
    if (act === 'crop') {
      component = (
        <CropAction onClick={onContentextMenuCrop} selectedFile={selectedFiles[0]} key={'act'.concat('-', key)} />
      );
    }
    if (act === 'delete') {
      component = (
        <DeleteAction onClick={onContentextMenuDelete} selectedFile={selectedFiles} key={'act'.concat('-', key)} />
      );
    }
    return component;
  });

  return (
    <div>
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: y, left: x }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={contextMenuVisible}
        onClose={() => {}}
        PaperProps={{ style: { width: 170 } }}
      >
        {actionsComp}
      </Menu>
    </div>
  );
};

ContextMenu.propTypes = {
  contextMenuPosition: PropTypes.instanceOf(Array),
  contextMenuVisible: PropTypes.bool,
  acts: PropTypes.instanceOf(Array),
  selectedFiles: PropTypes.instanceOf(Array),
  onContentextMenuOpen: PropTypes.func,
  onContentextMenuCrop: PropTypes.func,
  onContentextMenuDelete: PropTypes.func
};

ContextMenu.defaultProps = {
  contextMenuPosition: [],
  contextMenuVisible: false,
  acts: [],
  selectedFiles: [],
  onContentextMenuOpen: () => {},
  onContentextMenuCrop: () => {},
  onContentextMenuDelete: () => {}
};

export default ContextMenu;
