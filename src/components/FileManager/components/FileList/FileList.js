/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Loader from '../Loader';
import { FileListEmptyMessage, GridFile, ListFile } from './components';
import { fileManagerView } from '../../constants';

const FileList = (props) => {
  const { fileList, selectedFiles, loading, className, onFileDoubleClick, onFileClick, onFileContextMenu, view } =
    props;

  const checkIfSelected = (fileName) => {
    return !!selectedFiles.find((x) => x.name === fileName);
  };

  const isGrid = view === fileManagerView.GRID;

  return (
    <div className={clsx(className)} style={{ margin: '0 16px 8px 16px' }}>
      {loading ? (
        <Loader />
      ) : fileList.length ? (
        <Grid spacing={isGrid ? 3 : 0} container>
          {fileList.map((file, index) => (
            <Grid item key={file.name.concat('-', index)} xs={isGrid ? 2 : 12}>
              {isGrid ? (
                <GridFile
                  isSelected={checkIfSelected(file.name)}
                  onFileDoubleClick={onFileDoubleClick}
                  onFileClick={onFileClick}
                  onFileContextMenu={onFileContextMenu}
                  file={file}
                  key={file.name.concat('-', index)}
                />
              ) : (
                <ListFile
                  isSelected={checkIfSelected(file.name)}
                  onFileDoubleClick={onFileDoubleClick}
                  onFileClick={onFileClick}
                  onFileContextMenu={onFileContextMenu}
                  file={file}
                  key={file.name.concat('-', index)}
                />
              )}
            </Grid>
          ))}
        </Grid>
      ) : (
        <FileListEmptyMessage />
      )}
    </div>
  );
};

FileList.propTypes = {
  fileList: PropTypes.instanceOf(Array),
  selectedFiles: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  className: PropTypes.string,
  onFileDoubleClick: PropTypes.func,
  onFileClick: PropTypes.func,
  onFileContextMenu: PropTypes.func,
  view: PropTypes.oneOf(Object.values(fileManagerView))
};

FileList.defaultProps = {
  fileList: [],
  selectedFiles: [],
  loading: false,
  className: '',
  onFileDoubleClick: () => {},
  onFileClick: () => {},
  onFileContextMenu: () => {},
  view: fileManagerView.GRID
};

export default FileList;
