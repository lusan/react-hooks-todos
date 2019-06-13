# React Hooks Todos
This is built as a demo for my article [The future of React, unfolding with Suspense](https://blog.logrocket.com/the-future-of-react-unfolding-with-suspense/)

## Demo link
[Go to codesandbox](https://codesandbox.io/s/github/lusan/react-hooks-todos)

## React Hooks
With React 16.8, Hooks are officially a part of the stable release. Some of the problems it has solved, on a high level:

By adopting the concept of writing everything using functions, it has made writing code more modular and easier to maintain
Discouraging the use of HOCs and other complex functions that made code difficult to understand
Discarding the use of complex lifecycles like componentDidMount, componentDidUpdate, etc., which required us to write repetitive code
If you want to know more in detail, click [Hooks Motivation](https://reactjs.org/docs/hooks-intro.html#motivation).

## React.lazy
The name really gives away its intent! We need it when we want to lazily load components:

```const TodoList = React.lazy(() => import("./containers/todoList"));```

With the help of dynamic import using webpack, we could do it; it helps create bundles, which improves our page load speed. Let’s have fun with a demo! Just go back up to the Codesandbox demo link and change the imports to the following below:

```
const TodoList = React.lazy(() => import("./containers/todoList"));
const CompletedList = React.lazy(() => import("./containers/completedList"));
const AddNewTask = React.lazy(() => import("./containers/addNewTask"));
```

## Suspense
If we check the code in the demo, we’ll see:

```
<Suspense fallback={<div>Loading...</div>}>
  <TodoList
     payload={todoListPayload}
     completeTodoTaskHandler={completeTodoTaskHandler}
   />
  <CompletedList list={completedTodoList} />
  <AddNewTask addTodoTaskHandler={addTodoTaskHandler} />
</Suspense>
```
It is as simple as wrapping the components with Suspense. We lazily loaded some of the components — ```TodoList, CompletedList, AddNewTask``` — using React.lazy() . Since internally it will generate bundles for each, in slower network conditions, it might take some time to load them.

Suspense will automatically take care of that by showing a fallback such as Loading… or any other component, such as a spinner or similar.
