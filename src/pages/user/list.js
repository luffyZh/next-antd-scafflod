import { END } from 'redux-saga';
import { wrapper } from '@/redux/store';
import UserList from '@/components/User/UserList';
import { fetchUserList } from '@/redux/actions/user';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(fetchUserList());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default UserList;

