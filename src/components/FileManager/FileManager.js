/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Box, Divider, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { makeStyles } from '@material-ui/styles';
import FileList from './components/FileList';
import Navbar from './components/Navbar';
import ContextMenu from './components/ContextMenu/ContextMenu';
import { useFileManager } from './hooks/useFileManager';
import { FileInfo, Directories, PathBreadcrumb } from './components';
import { fileManagerView } from '@/utils/constants/fileManagerView';

const useStyles = makeStyles(() => ({
  fileList: {
    borderLeft: '1px solid lightgrey',
    borderRight: '1px solid lightgrey'
  }
}));

function pathToArr(path, name) {
  let string = '';
  const arr = [];
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === '/') {
      arr.push(string);
      string = '';
      // eslint-disable-next-line no-continue
      continue;
    }
    string += path[i];
  }
  arr.push(name);
  return arr;
}

const FileManager = () => {
  const { directories, files: fileList, totalFiles, page, setPage, selectedFiles, setSelectedFiles } = useFileManager();
  const classes = useStyles();

  const [view, setView] = React.useState(fileManagerView.GRID);

  const path = [];

  const acts = ['crop'];
  const loading = false;

  const handleFileClick = (event, file) => {
    event.stopPropagation();
    setSelectedFiles([file]);
  };

  const handleFileDoubleClick = ({ type, name, url, path }) => {
    pathToArr(path, name);
    console.log(url);
    if (type === 'file') {
      // if (isImageFilePattern.test(name)) {
      //   dispatch(setFileContent(url));
      // }
    }
    // dispatch(enterToDirectory(pathToArr(path, name)));
    // dispatch(changePage(1));
  };

  const [contextMenuVisible, setContextMenuVisibility] = React.useState(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState([0, 0]);

  const handleContextMenu = (event, file) => {
    event.preventDefault();
    event.stopPropagation();

    const x = event.clientX || (event.touches && event.touches[0].pageX);
    const y = event.clientY || (event.touches && event.touches[0].pageY);

    // if (event.shiftKey) {
    //   dispatch(setSelectedFileFromLastTo(file));
    // } else {
    //   dispatch(rightClickOnFile(file));
    // }

    setSelectedFiles([file]);
    setContextMenuVisibility(true);
    setContextMenuPosition([x, y]);

    // dispatch(setContextMenuVisible(true));
    // dispatch(setContextMenuPosition(x, y));
  };

  const handleHideContextMenu = () => {
    setContextMenuVisibility(false);
  };

  const handleContentextMenuOpen = () => {
    if (selectedFiles[0].type === 'dir') {
      // dispatch(enterToDirectory(selectedFiles[0].name));
    }
  };

  return (
    <div>
      <div onClick={handleHideContextMenu} onContextMenu={handleHideContextMenu}>
        <Navbar canGoBack={!!path.length} path={path} onViewChange={setView} view={view} />
        <Grid spacing={0} container>
          <Grid item xs={2}>
            <Directories directories={directories} />
          </Grid>
          <Grid item xs={7} className={classes.fileList}>
            <PathBreadcrumb path={['Home', 'Breadcrumb', 'Folder']} />
            <FileList
              view={view}
              selectedFiles={selectedFiles}
              fileList={fileList}
              onFileDoubleClick={handleFileDoubleClick}
              onFileClick={handleFileClick}
              onFileContextMenu={handleContextMenu}
              loading={loading}
            />
          </Grid>
          <Grid item xs={3}>
            <FileInfo selectedFiles={selectedFiles} />
          </Grid>
        </Grid>

        <ContextMenu
          selectedFiles={selectedFiles}
          contextMenuVisible={contextMenuVisible && acts.length > 0}
          contextMenuPosition={contextMenuPosition}
          acts={acts}
          onContentextMenuOpen={handleContentextMenuOpen}
        />

        <Divider />
        {!!totalFiles && (
          <Box display="flex" justifyContent="center" mt={1} mb={1}>
            <Pagination
              shape="rounded"
              onChange={(e, page) => setPage(page)}
              color="primary"
              page={page}
              count={totalFiles}
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default FileManager;
