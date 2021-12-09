import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeNotification } from '@actions/base.action';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar, TopBar } from './components';
import { loadResources } from '@/store/actions/resources.action';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  navBar: {
    zIndex: 3,
    width: 310,
    overflowY: 'scroll',
    minWidth: 310,
    flex: '0 0 auto'
  },
  content: {
    overflowY: 'scroll',
    flex: '1 1 auto'
  }
}));

const Dashboard = (props) => {
  const { children } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const { resources } = useSelector((state) => state.resources);

  React.useEffect(() => {
    dispatch(loadResources());
  }, []);

  return (
    <div className={classes.root}>
      <TopBar className={classes.topBar} />
      <div className={classes.container}>
        <NavBar className={classes.navBar} resources={resources} />
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.any
};

Dashboard.defaultProps = {
  children: null
};

export default Dashboard;
