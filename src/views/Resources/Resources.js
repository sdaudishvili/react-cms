import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { ListRenderer, ListWrapper, Page } from '@/components';
import useRouter from '@/utils/useRouter';

const Resources = () => {
  const { resources } = useSelector((state) => state.resources);
  const router = useRouter();

  return (
    <Page
      title="Resources"
      h1="Browse Resources"
      h2="Resources"
      action={
        <Button variant="contained" color="primary" onClick={() => router.history.push(`/resources/update`)}>
          Add Resource
        </Button>
      }
    >
      <ListWrapper pagination={false} title="All Items">
        <ListRenderer
          items={resources}
          onEditClick={(item) => router.history.push(`/resources/${item.key}`)}
          displayKeys={[{ prop: 'key' }, { prop: 'description' }, { prop: 'created' }, { prop: 'enabled' }]}
        />
      </ListWrapper>
    </Page>
  );
};

export default Resources;
