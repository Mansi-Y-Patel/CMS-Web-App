<template>
    <div>
      <input v-model="newNote" @keyup.enter="addNote" placeholder="Add a new note">
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          <input type="checkbox" v-model="note.completed" @change="toggleCompleted(index)">
          <span :class="{ completed: note.completed }">{{ note.text }}</span>
          <button @click="deleteNote(index)" class=" bg-slate-800 rounded-2xl text-white w-full p-1">Delete</button>
          <button @click="editNote(index)" class=" bg-slate-800 rounded-2xl text-white w-full p-1">Edit</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notes: [
          { text: 'Example note 1', completed: false },
          { text: 'Example note 2', completed: true },
        ],
        newNote: '',
      };
    },
    methods: {
      addNote() {
        if (this.newNote.trim() === '') return;
        this.notes.push({ text: this.newNote, completed: false });
        this.newNote = '';
      },
      deleteNote(index) {
        this.notes.splice(index, 1);
      },
      editNote(index) {
        const newText = prompt('Enter new text:');
        if (newText !== null) {
          this.notes[index].text = newText;
        }
      },
      toggleCompleted(index) {
        this.notes[index].completed = !this.notes[index].completed;
      },
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>