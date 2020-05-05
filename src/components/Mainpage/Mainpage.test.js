import React from 'react';
import Mainpage from './Mainpage';
import { mount } from '../../enzyme';
import user from './UserBox/UserBox.test';

const fetchPosts = jest.fn();
const users = [user];
let usersLoading = false;
const postsLoading = false;

describe('<Mainpage/>', () => {
  const wrapper = mount(
    <Mainpage
      fetchPosts={fetchPosts}
      usersLoading={usersLoading}
      postsLoading={postsLoading}
      users={users}
    />
  );
  it('should properly render just one UserBox', () => {
    expect(wrapper.find('UserBox')).toHaveLength(1);
  });

  it('should not render loader component', () => {
    expect(wrapper.find('[data-test="loader"]')).toHaveLength(0);
  });

  usersLoading = true;

  it('should properly render loader component', () => {
    const wrapper2 = mount(
      <Mainpage fetchPosts={fetchPosts} usersLoading={usersLoading} postsLoading users={users} />
    );
    expect(wrapper2.find('[data-test="loader"]')).toHaveLength(1);
  });
});
