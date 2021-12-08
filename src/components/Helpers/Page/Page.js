import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import useRouter from '@/utils/useRouter';
import { PageHead } from '@/components';

const { NODE_ENV } = process.env;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const Page = (props) => {
  const { title, children, className, h1, h2, ...rest } = props;
  const classes = useStyles();

  const router = useRouter();

  useEffect(() => {
    if (NODE_ENV !== 'production') {
      return;
    }

    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: router.location.pathname,
        page_name: title
      });
    }
  }, [title, router]);

  return (
    <div {...rest} className={clsx(className, classes.root)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHead h1={h1} h2={h2} />
      <Box mt={3}>{children}</Box>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string
};

Page.defaultProps = {
  children: null,
  title: '',
  className: '',
  h1: '',
  h2: ''
};

export default Page;
