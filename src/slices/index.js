import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: Date.now(),
            text: "Boire du café",
            complete: false
        }
    ]
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, { payload }) => {
            // Ajout d'une tache dans le state global
            // On s'attend à récupérer le texte de l'utilisateur dans payload
            state.todos.push({
                id: Date.now(),
                text: payload,
                complete: false
            })
        },
        complete: (state, { payload }) => {
            // Compléter une tâche
            // On s'attend à récupérer l'index de la tâche dans payload
            state.todos[payload].complete = !state.todos[payload].complete;
        },
        remove: (state, { payload }) => {
            if (state.todos[payload].complete) {   
                state.todos.splice(payload, 1);
              } else {
                alert("Vous devez finaliser la tâche au préalable");
              }
        }

    }
});

export const { add, complete, remove } = dataSlice.actions;

export default dataSlice.reducer;