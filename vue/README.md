# 🌡️ Temperature Converter

A real-time, bi-directional Temperature Converter built with **Vue 3** and **Tailwind CSS**. 

This project demonstrates advanced reactivity management in Vue 3, specifically focusing on preventing infinite loops when synchronizing two reactive inputs.

---

### ✨ Features

- **Bi-Directional Sync:** Typing in either the Celsius or Fahrenheit input instantly updates the other.
- **Infinite Loop Prevention:** Uses a custom `isUpdating` flag and `nextTick` to prevent recursive `watch` triggers.
- **Edge Case Handling:** Gracefully handles empty inputs and zero values without breaking the conversion logic.
- **Clean UI:** Features a minimal, centered design with Lucide icons and smooth focus states.

---

### 🛠️ Tech Stack

- ⚡ **Vue 3** (Composition API with `<script setup>`)
- 🎨 **Tailwind CSS** (Utility-first styling)
- 🎯 **@lucide/vue** (For crisp, scalable icons)

---

### 💻 Live Link:



---