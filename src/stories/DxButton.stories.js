import React from 'react';

import { Button } from 'devextreme-react/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    text: { control: 'string' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {text: 'BUTTON'};

