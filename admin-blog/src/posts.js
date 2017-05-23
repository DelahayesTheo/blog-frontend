// in src/posts.js
import React from 'react';
import { ReferenceField, ReferenceInput, SelectInput, LongTextInput, SimpleForm, EditButton, List, Datagrid, TextField, DisabledInput, TextInput, Create, Edit } from 'admin-on-rest';

export const PostList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="content" />
          <TextField source="type" />
          <EditButton />
      </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="content" />
      <TextInput source="type" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="title" source="title" />
      <LongTextInput label="content" source="content" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);
