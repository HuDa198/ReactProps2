import React from 'react';
import './App.css';
const listeElements = [
  { id: 1, text: "Faire les courses", completed : true },
  { id: 2, text: "Réviser pour l'examen" , completed : false },
  { id: 3, text: "Aller chez le médecin", completed : true },
  { id: 4, text: "Aller chez le médecin", completed : false },
  { id: 5, text: "Aller chez le médecin", completed : true }
];

function Liste(props){
  const {elements}=props;
  return <ul>
      {elements.map(i => <li style={{color:i.completed?'green':'red'}}>{i.id}-{i.text}</li>)}
    </ul>
}

function App() {
  return (
    <Liste elements={listeElements}/>
  );
}

export default App;
