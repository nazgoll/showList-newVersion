import {useState} from "react";
import Header from "./components/Header";
function App() {
    const [selectedUser,setSelecterUser]=useState(null);
    const List = [
        {id: 1, name: 'Nazgol',family:"Momeni", age: '21'},
        {id: 2, name: 'Sajedeh', family:"hajeforosh",age: '22'},
        {id: 3, name: 'Mehrana',family:"sadeghi", age: '21'},
        {id: 4, name: 'Zahra',family:"mosavi", age: '21'},

    ];
    const handleClick = (id) => {
      const selected= List.find((item)=>item.id ===id);
setSelecterUser(selected);
    }
    return (
        <div className={"flex h-screen w-full justify-between bg-custom-color-1  "}>
            <div className={"w-full flex flex-col items-center mt-2"}>
                <Header headerText={"ShowList"}/>
                <div className={"flex justify-center bg-fuchsia-300 w-3/5 h-3/4 pt-10 mt-9 rounded-xl shadow-custom-color-5 shadow-lg"}>
                {selectedUser?(
                    <div className={"text-2xl"}>
                        <div>age:{selectedUser.age}</div>
                        <div>name:{selectedUser.name}</div>
                        <div>family:{selectedUser.family}</div>
                    </div>
                ):(
                    <div>user not found</div>
                )}
            </div>
            </div>
            <div className={"w-full max-w-xs bg-custom-color-2 flex flex-col items-center border-l-4 border-l-custom-color-4"}>
                <div><Header headerText={"Member"}/></div>
                {List.map(({id, name}, index) => (
                    <button onClick={() => handleClick(id)} type={"button"} key={id} className={"bg-slate-200 text-lg duration-300 rounded-lg mt-9 h-14 w-3/5 shadow-lg shadow-custom-color-5 hover:bg-custom-color-5 hover:text-custom-color-1"}>
                        {name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default App;
