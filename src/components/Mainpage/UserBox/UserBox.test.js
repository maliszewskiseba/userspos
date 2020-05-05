import React from 'react';
import { mount } from '../../../enzyme';
import UserBox from './UserBox';

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
};

describe('<UserBox/>', () => {
  const wrapper = mount(<UserBox user={user} />);

  it('Should render button properly', () => {
    expect(wrapper.find === true);
  });

  it('Should render exact number of data rows', () => {
    expect(wrapper.find('[data-test="user-row"]')).toHaveLength(18);
  });
  it('Should render proper user name', () => {
    expect(wrapper.find('[data-test="user-name"]').text()).toBe('Leanne Graham');
  });
});

export default user;
