import React from 'react';

import WishListItem from './WishListItem';

export default {
  title: 'WishList/Item',
  component: WishListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <WishListItem title="Dominique" />;
