const Todos = ({ todos }) => {

  return (
    <div>
      {todos?.map((todo) => {
        return (
          <div key={todo._id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <button>
              {todo.completed === true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
