// import React from "react";
import Button from "../../button/Button";
import Form from "../../Todo/form/Form";
import Input from "../../Todo/input/Input";
import ToDo from "../../Todo/ToDo/ToDo";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../../Redux/reducer/TodoSlice";

const Home = () => {
//   const [state, setstate] = useState(todos);
// console.log(todos)
const todos =useSelector(state=>state.todos)
const dispatch =useDispatch()
  const [formdata, setFormData] = useState({
    id: 1,
    title: "",
    description: "",
  });
  const [mode, setmode] = useState("create");

  const additem = (e) => {
    e.preventDefault();
    if (mode === "create") {
        dispatch(addTodo({...formdata,id:Math.floor(Math.random()*1000) }))
        console.log('hi')
    //   setstate([
    //     ...state,
    //     { ...formdata, id: Math.floor(Math.random() * 1000) },
    //   ]);
    } else {
        dispatch(updateTodo(formdata))
    //   setstate(
    //     state.map((item) => (item.id === formdata.id ? formdata : item))
    //   );
    }
    setmode("create");
    setFormData({
      id: 1,
      title: "",
      description: "",
    });
  };
  const handleitem = (todo) => {
    setFormData(todo);
    setmode("update");
  };

  const handleupdate = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handledelete = (id) => {
    dispatch(deleteTodo(id))
    console.log('ji')
    // setstate(state.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Form onsubmit={additem}>
        <Input
          name={"title"}
          value={formdata.title}
          onchange={handleupdate}
          lable={"title"}
        />
        <Input
          name={"description"}
          value={formdata.description}
          onchange={handleupdate}
          lable={"description"}
        />
        <Button />
      </Form>
      {todos.map((todo) => (
        <ToDo
          id={todo.id.toString()}
          title={todo.title}
          description={todo.description}
          onclickdeleteo={() => handledelete(todo.id)}
          onclickupdate={() => handleitem(todo)}
        />
      ))}
    </div>
  );
};

export default Home;
