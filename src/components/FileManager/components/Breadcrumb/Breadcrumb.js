import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  lastPath: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  paths: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  text: {
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      outline: '#efefef'
    }
  }
}));

const BreadcrumbText = (props) => {
  const { onClickPath, path, rootTitle, onGoBack, canGoBack } = props;

  const classes = useStyles();

  const separator = <span>&gt;</span>;
  const rootPath = (
    <span
      className={classes.text}
      aria-hidden="true"
      role="button"
      tabIndex="0"
      onClick={(e) => onClickPath(e, -1, path)}
      data-index={0}
    >
      {rootTitle} {path.length ? separator : ''}
    </span>
  );
  const lastPath = [...path].pop() || rootTitle;

  const directories = path.map((dir, index) => {
    return (
      <span
        aria-hidden="true"
        role="button"
        tabIndex="0"
        key={dir.concat('-', index)}
        data-index={index}
        onClick={(e) => onClickPath(e, index, path)}
      >
        <span>{dir}</span> {path.length - 1 !== index ? separator : ''}&nbsp;
      </span>
    );
  });

  return (
    <div className="BreadcrumbText">
      <div className={classes.lastPath}>
        <Button
          onClick={onGoBack}
          color="inherit"
          type="button"
          style={{ display: canGoBack ? 'inline-flex' : 'none' }}
        >
          <KeyboardArrowLeftIcon />
        </Button>
        {lastPath}
      </div>
      <div className={classes.paths}>
        {rootPath} {directories}
      </div>
    </div>
  );
};

BreadcrumbText.propTypes = {
  onClickPath: PropTypes.func,
  path: PropTypes.instanceOf(Array),
  rootTitle: PropTypes.string,
  onGoBack: PropTypes.func,
  canGoBack: PropTypes.bool
};

BreadcrumbText.defaultProps = {
  onClickPath: () => {},
  path: [],
  rootTitle: '',
  onGoBack: () => {},
  canGoBack: false
};

export default BreadcrumbText;
