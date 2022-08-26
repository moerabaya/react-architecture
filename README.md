# About
This repository contain react architecture and design patterns approaches, it will also contain some resources to blogs, courses and programs.

# State Management
How an application handles the data needs of it’s components, with regards to loading, storing, persisting, and sharing this data.
- Context API: Busiltin within react, It's "Small" sized state management
  - Example [/src/state-management/ContextApi/index.js](/src/state-management/ContextApi/index.js)
- Recoil: A state management library design for "Medium" sized applications. Deep dive into Recoil: https://www.youtube.com/watch?v=_ISAA_Jt9kI
  - Example: [/src/state-management/Recoil/index.js](/src/state-management/ContextApi/index.js)
  - Recoid has two main concepts: Atoms and Selectors, Atoms are individual values that is stored at Recoil state. Selctors take the fundeamental values that are expressed as atoms, and transform them or combine them into another value.
- Redux
- MobX
