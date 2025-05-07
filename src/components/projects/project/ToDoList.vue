<template>
  <div class="container mx-auto max-w-xl text-center p-4">
    <h1 class="text-2xl font-semibold mb-4">List TODO</h1>
    <div class="flex items-center justify-center mb-4">
      <input
        id="addTodo"
        type="text"
        v-model="newTodo"
        placeholder="Add new task"
        class="py-2 px-2 border rounded w-full focus:outline-none focus:ring-indigo-500"
        @keyup.enter="addTodo"
      />
      <button
        @click="addTodo"
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
    <ul class="list-none">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="flex justify-between items-center py-2 px-2 border-b"
      >
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
        <div class="flex space-x-2">
          <button
            class="px-2 py-1 text-white rounded flex items-center justify-center"
            :class="todo.completed ? 'bg-green-500' : 'bg-yellow-500'"
            @click="toggleTodo(index)"
            :aria-label="todo.completed ? 'undo' : 'Mark as Completed'"
          >
            <template v-if="todo.completed">
              <ArrowUturnDownIcon class="h-4 w-4" />
            </template>
            <template v-else>
              <CheckIcon class="h-4 w-4" />
            </template>
          </button>
          <button
            class="px-2 py-1 bg-red-500 text-white rounded"
            @click="removeTodo(index)"
          >
            <TrashIcon class="h-4 w-4" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
import {
  TrashIcon,
  CheckIcon,
  ArrowUturnDownIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const todos = ref([]);
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push({
      text: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }
};

const toggleTodo = (index) => {
  todos.value[index].completed = !todos.value[index].completed;
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>
  