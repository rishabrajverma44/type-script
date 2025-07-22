State-Driven Modular JS Architecture with Vite
## Objective

You will build your **entire UI and application logic using plain JavaScript**, but in a **React-style architecture** — where UI is rendered based on **global state**, updated only through **events**, and **modularized into components**.

You’ll use **Vite** for modern module-based development and simulate concepts like:

- Component-based UI
- Unidirectional data flow
- Global reactive state
- Reusable utilities
- Structured folder-based architecture


npm create vite@latest your-project --template vanilla
cd your-project
npm install
npm run dev

project-root/
├── index.html             ← HTML shell with #app root
├── style.css              ← Global styles
└── src/
    ├── main.js            ← Entry point: loads state, triggers UI render
    ├── app.state.js       ← Reactive global state
    ├── app.logic.js       ← Business logic (calculations, filters, derived data)
    ├── app.storage.js     ← Storage layer (localStorage or others)
    ├── components/
    │   ├── App.js         ← Root renderer (composes child components)
    │   ├── Form.js        ← Input form with create/edit logic
    │   ├── Table.js       ← Dynamic table/list renderer
    │   ├── Counters.js    ← Summary counters, totals, metrics
    │   └── Filters.js     ← Optional filter/search UIs
    └── utils/
        ├── dom.js         ← DOM helpers like `createEl()`, `mount()`
        └── id.js          ← ID generators, randomizers, etc.

