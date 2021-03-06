import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Paper, Avatar, Typography } from '@material-ui/core';

import getInitials from '@/utils/getInitials';
import useRouter from '@/utils/useRouter';
import { Navigation } from '@/components';
import navigationConfig from './navigationConfig';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.primary.main
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = (props) => {
  const { resources, openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();

  const fullName = `LEAVINGSTONE CMS`;

  useEffect(() => {
    if (openMobile) {
      // eslint-disable-next-line no-unused-expressions
      onMobileClose && onMobileClose();
    }
  }, [router.location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar alt="Person" className={classes.avatar}>
          {getInitials(fullName)}
        </Avatar>
        <Typography className={classes.name} variant="h4">
          {fullName}
        </Typography>
        <Typography variant="body2">Here should be email</Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map((list) => (
          <Navigation component="div" key={list.title} pages={list.pages} title={list.title} />
        ))}
        {resources?.length > 0 && (
          <Navigation
            component="div"
            pages={resources.map((x) => ({ title: x.description, href: `/resources/update/${x.key}` }))}
            title="Resources"
          />
        )}
      </nav>
    </div>
  );

  return (
    <>
      <Paper {...rest} className={clsx(classes.root, className)} elevation={1} square>
        {navbarContent}
      </Paper>
    </>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  resources: PropTypes.array
};

NavBar.defaultProps = {
  className: '',
  onMobileClose: () => {},
  openMobile: false,
  resources: []
};

export default NavBar;
