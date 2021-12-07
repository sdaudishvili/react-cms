import React from 'react';
import { getDirectories, getFiles } from '@/api/fileManager';

const PER_PAGE = 24;

export const useFileManager = () => {
  const [files, setFiles] = React.useState();
  const [directories, setDirectories] = React.useState();
  const [totalFiles, setTotalFiles] = React.useState();
  const [page, setPage] = React.useState(1);
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  const fetchFiles = async () => {
    const { items, total } = await getFiles({ take: PER_PAGE, skip: PER_PAGE * (page - 1) });
    setTotalFiles(total);
    setFiles(items);
  };

  const fetchDirectories = async () => {
    const { items } = await getDirectories({ take: PER_PAGE, skip: PER_PAGE * (page - 1) });
    setDirectories(items);
  };

  React.useEffect(() => {
    fetchDirectories();
  }, []);

  React.useEffect(() => {
    fetchFiles();
  }, [page]);

  return { files, totalFiles, setSelectedFiles, selectedFiles, page, setPage, directories };
};
