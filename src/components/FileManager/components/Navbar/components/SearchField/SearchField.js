import { alpha, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  search: {
    marginRight: theme.spacing(3),
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block'
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.white,
    '&::placeholder': {
      color: theme.palette.white
    },
    [theme.breakpoints.up('sm')]: {
      width: 100,
      '&:focus': {
        width: 200
      }
    }
  },
  tools: {
    display: 'flex'
  }
}));

const SearchField = ({ onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        onChange={(e) => onChange(e.target.value)}
        color="secondary"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  );
};

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchField;
