import React from 'react';

import WishListSelector from './WishListSelector';

export default {
  title: 'WishList/Selector',
  component: WishListSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <WishListSelector title="Dominique" />;
