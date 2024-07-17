import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Text = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <Item>
      <Text>{todo}</Text>
      <Button onClick={removeTodo}>Delete</Button>
    </Item>
  );
};

export default TodoItem;
