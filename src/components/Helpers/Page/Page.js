import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import { PageHead } from '@/components';

const useStyles = makeStyles((theme) => ({
  primary: {
    padding: theme.spacing(3)
  },
  secondary: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const Page = (props) => {
  const { title, children, className, h1, h2, action, variant, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(className, classes[variant])}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHead h1={h1} h2={h2} action={action} />
      <Box mt={3}>{children}</Box>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  action: PropTypes.node,
  variant: PropTypes.string
};

Page.defaultProps = {
  children: null,
  title: '',
  className: '',
  h1: '',
  h2: '',
  action: null,
  variant: 'primary'
};

export default Page;
