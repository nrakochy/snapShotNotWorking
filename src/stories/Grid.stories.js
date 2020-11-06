import React from 'react';
import { DataGrid } from 'devextreme-react/data-grid';

export default {
  title: 'Example/DataGrid',
  component: DataGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <DataGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};


