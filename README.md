# About
This repository contain react architecture and design patterns approaches, it will also contain some resources to blogs, courses and programs.

# State Management
How an application handles the data needs of it’s components, with regards to loading, storing, persisting, and sharing this data.
- Context API: Busiltin within react, It's "Small" sized state management
  - Example: [/src/state-management/ContextApi/index.js](/src/state-management/ContextApi/index.js)
- Recoil: A state management library design for "Medium" sized applications. Deep dive into Recoil https://www.youtube.com/watch?v=_ISAA_Jt9kI
  - Example: [/src/state-management/Recoil/index.js](/src/state-management/ContextApi/index.js)
  - Recoid has two main concepts: Atoms and Selectors, Atoms are individual values that is stored at Recoil state. Selctors take the fundeamental values that are expressed as atoms, and transform them or combine them into another value.
- Redux: The most popular state management library design for "Large" sized applications. Deep dive into redux/toolkit: https://redux-toolkit.js.org/introduction/getting-started
  - Example: [/src/state-management/Redux/index.js](/src/state-management/Redux/index.js)
  - Redux has several key parts:
    - actions: plain javascript object that contains information, they are dispatched when an even occurs.
    - reducers: pure functions that take an action and the previous state of the application and returns the new state.
    - store: is an immutable object tree which holds the application's state, it acts as the single source of truth. Redux can have only one store.
    - selectors: is a function that accepts Redux state as an argument and returns data that is derived from that state.
- MobX: Another popular state managment library for "Large" sized applications, yet very straightforward and optimal compared to Redux. Deep dive into MobX https://mobx.js.org/README.html
  - Example: [/src/state-managemnt/MobX/index.js](/src/state-management/MobX/index.js)
  - MobX follows a more object-oriented approach, where state is saved in a class and can be updated through action aka methods.

# Server Side Rendering (SSR)
is an application's ability to convert HTML files on the server into a fully rendered HTML page for the client.
### Tools used
- Styled-components: Lets us write actual CSS in JavaScript.
- Custom hook: To retreive data from server without client requests.

# Code splitting
Code splitting is the splitting of code into various bundles or components which can then be loaded on demand or in parallel. As an application grows in complexity or is maintained, CSS and JavaScripts files or bundles grow in byte size, especially as the number and size of included third-party libraries increases.

# Error boundaries
are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

### [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
Exposes the last Error Boundary component anyone needs to write and gives you all the tools you need to declaratively handle runtime errors in your React apps without limitation regular Error Boundary class.

# File Structure

### Grouping by features or routes

One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.
```
common/
  ...
feed/
  ...
profile/
  ...
authentication/
  ...
```
The definition of a “feature” is not universal, and it is up to you to choose the granularity. If you can’t come up with a list of top-level folders, you can ask the users of your product what major parts it consists of, and use their mental model as a blueprint.

### Grouping by file type
Another popular way to structure projects is to group similar files together, for example:
```
api/
  ...
components/
  ...
```
Some people also prefer to go further, and separate components into different folders depending on their role in the application.

For example, Atomic Design is a design methodology built on this principle. Remember that it’s often more productive to treat such methodologies as helpful examples rather than strict rules to follow.

# Monoliths, multi-repos, and monorepos
## Monoliths
All the code for the project in a single codebase, which generally has to be modified and deployed at once.
- Simple
- Usually the default for new projects.
- Can become unmanageable if you're not careful (and often even if you are).
- Ideal for small teams working on short-term projects.
## Multi-repos
The project's code is separated into multiple codebases, each of which can usually be worked on and deployed independently.
- Add some overhead for setup.
- Make the development process more complex.
- Allow independent versioning of different parts.
- Generally better for companies with fairly isolated teams.
## Monorepos
Monorepos are a mix of monoliths and multi-repos. They keep all the code in the same codebase but organize it so each piece is largely independent.
- Include many of the same benefits as multi-repos, except that code is technically kept in the same repo.
- Used by many large tech companies, including Google, Facebook, Twitter, etc.