import "./App.css";
import Home from "./component/Todo/Home/Home";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

//   const [state, setstate] = useState(todos);
//   const [formdata,setFormData]=useState({
//     id:1,
//     title:"",
//     description:""
//   })
//   const [mode,setmode] =useState("create")
//   const additem =(e)=>{
//   e.preventDefault();
//   if(mode==="create"){
//     setstate([...state,{...formdata,id:Math.floor(Math.random()*1000)}])
//   }
//   else{
//     setstate(state.map(item =>( item.id === formdata.id ? formdata :item)))
//     setmode("create");
//   }
//   setFormData({
//     id:1,
//     title:"",
//     description:""
//   })
// };
// const handleitem =(todo)=>{
//   setFormData(todo)
//   setmode("update")
// }

// const handleupdate =(e)=>{
//   setFormData({...formdata,[e.target.name]:e.target.value})
// }
// const handledelete =(id)=>{
//   setstate(state.filter(item =>(item.id !== id)))
// }

// {
  /* <Form onsubmit={additem}>
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
        <Button/>
      </Form>
      {state.map((todo)=>(
        <ToDo id={todo.id.toString()}
         title={todo.title}
         description={todo.description}
         onclickdelete={()=>handledelete(todo.id)}
         onclickupdate={()=>handleitem(todo)}
         />
      )
      )} */
// }
