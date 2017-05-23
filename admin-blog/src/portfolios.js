// in src/Portfolios.js
import React from 'react';
import { ReferenceField, ReferenceInput, SelectInput, LongTextInput, SimpleForm, EditButton, List, Datagrid, TextField, DisabledInput, TextInput, Create, Edit } from 'admin-on-rest';

export const PortfolioList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="description" />
          <TextField source="langage" />
          <TextField source="link" />
          <EditButton />
      </Datagrid>
  </List>
);

const PortfolioTitle = ({ record }) => {
  return <span>Portfolio {record ? `"${record.title}"` : ''}</span>;
};

export const PortfolioEdit = (props) => (
  <Edit title={<PortfolioTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="description" />
      <TextInput source="langage" />
      <TextInput source="link" defaultValue="null" />

      </SimpleForm>
  </Edit>
);

export const PortfolioCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="title" source="title" />
      <LongTextInput label="description" source="description" />
      <TextInput source="langage" />
      <TextInput source="link" defaultValue="null"/>
    </SimpleForm>
  </Create>
);
