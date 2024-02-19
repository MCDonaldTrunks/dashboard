import React, { useState } from 'react';
import styled from 'styled-components';
import TodoModal from './TodoModal';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  color: white;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid white;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const DetailSection = styled(Section)`
  border-right: none;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;

const AddButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #1c244b;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #313f83;
  }
`;

const TodoCard = styled.div`
  background-color: ${(props) => (props.done ? '#15215d' : '#800020')};
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

function Todo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const getNextId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  const addOrUpdateTodo = (todo) => {
    if (selectedTodo) {
      const updatedTodos = todos.map(t => t.id === selectedTodo.id ? { ...todo, id: selectedTodo.id } : t);
      setTodos(updatedTodos);
    } else {
      setTodos([...todos, { ...todo, id: getNextId() }]);
    }
    setSelectedTodo(null);
    setModalOpen(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setSelectedTodo(null);
  };

  const selectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <PageWrapper>
      <Title>Todo List</Title>
      <AddButton onClick={() => { setSelectedTodo(null); setModalOpen(true); }}>Add Todo</AddButton>
      <Wrapper>
        <Section>
          <h2>Undone</h2>
          {todos.filter(todo => !todo.done).map(todo => (
            <TodoCard key={todo.id} done={todo.done} onClick={() => selectTodo(todo)}>
              {todo.text}
            </TodoCard>
          ))}
        </Section>
        <Section>
          <h2>Done</h2>
          {todos.filter(todo => todo.done).map(todo => (
            <TodoCard key={todo.id} done={todo.done} onClick={() => selectTodo(todo)}>
              {todo.text}
            </TodoCard>
          ))}
        </Section>
        <DetailSection>
          {selectedTodo ? (
            <>
              <p>Title: {selectedTodo.text}</p>
              <p>DateTime: {selectedTodo.datetime}</p>
              <p>Status: {selectedTodo.done ? 'Done' : 'Undone'}</p>
              <p>Difficulty: {selectedTodo.difficulty}</p>
              <p>Critical Level: {selectedTodo.critical}</p>
              <button onClick={() => deleteTodo(selectedTodo.id)}>Delete</button>
              <button onClick={() => setModalOpen(true)}>Edit</button>
            </>
          ) : (
            <p>Please select a todo to see details</p>
          )}
        </DetailSection>
      </Wrapper>
      {modalOpen && (
        <TodoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={addOrUpdateTodo}
          selectedTodo={selectedTodo}
        />
      )}
    </PageWrapper>
  );
}

export default Todo;
