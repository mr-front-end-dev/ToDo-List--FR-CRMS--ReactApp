import React from 'react';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Détails de la tâche" />
      <Section 
        title={task ? task.content : "Pas trouvé la tâche 😢"} 
        body={!!task && (
          <><strong>Complété:</strong> {task.done ? "Oui" : "Non"}</>
        )} 
      />

  </Container>
  );
};

export default TaskPage;