# 🌡️ Temperature Converter

A real-time, bi-directional Temperature Converter built using **both Vue 3 and React**. 

I implemented this exact same UI and synchronization logic in two different ecosystems to deeply understand how each framework handles reactive side effects and state updates under the hood.

---

###  Features

- **Bi-Directional Sync:** Typing in either the Celsius or Fahrenheit input instantly updates the other.
- **Infinite Loop Prevention:** Custom logic implemented to prevent recursive state updates.
- **Edge Case Handling:** Gracefully handles empty inputs and zero values.
- **Consistent UI:** Both versions share the exact same Tailwind CSS design language and Lucide icons.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API)
- **Key Concept:** Uses dual `watch` APIs guarded by an `isUpdating` flag and `nextTick` to safely break infinite reactive loops.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concept:** Avoids `useEffect` entirely for this use case. Instead, uses direct `onChange` event handlers to update both states in a single, predictable render pass.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first styling)
- 🎯 **Lucide Icons** (Cross-framework icon library)

---

### 🚀 Live Demos & Source

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
| ⚡ **Vue 3** | [🔗 View Vue Live Demo]() | [`/vue`](#) |
| ️ **React** | [🔗 View React Live Demo]() | [`/react`](#) |

---