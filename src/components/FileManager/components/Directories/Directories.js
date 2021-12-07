/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { TreeItem, TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Directories = (props) => {
  const { directories } = props;

  return (
    <div>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {directories.map((dir) => (
          <TreeItem nodeId={dir.path} label={dir.name} onLabelClick={() => {}}>
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
};

Directories.propTypes = {
  directories: PropTypes.instanceOf(Array)
};

Directories.defaultProps = {
  directories: []
};

export default Directories;
