import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import { Page, PageHead } from '@/components';
import { FileManager } from '@/components/FileManager';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3)
  }
}));

const Storage = () => {
  const classes = useStyles();

  return (
    <Page title="Storage">
      <PageHead h1="Browse files" h2="Storage" />
      <Card className={classes.card}>
        <FileManager />
      </Card>
    </Page>
  );
};

export default Storage;
