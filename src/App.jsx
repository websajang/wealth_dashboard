import {useState, useEffect} from "react"
import Dashboard from "./components/Dashboard";
import Databoard from "./components/DataBoartd";
import Form from "./components/Form";


function App() {

    const [entries, setEntries] = useState([]);
    const [editEntry, setEditEntry] = useState({});

    useEffect(()=>{
      setEntries(JSON.parse(window.localStorage.getItem('entries-storage')) || [])
    }, []);

  return (
    <div className="App">
        <h1 className="h-1/6 p-5 text-center text-white font-lato font-bold text-3xl text-forth">Wealth Management</h1>
        <div className="lg:grid lg:grid-cols-3">
          <div className="p-5 w-full lg:col-span-1">
            <Form setEntries={setEntries} editEntry={editEntry} setEditEntry={setEditEntry} entries={entries}/>
          </div>
          <div className="p-5 h-5/6 lg:col-span-2 w-full">
            <Databoard entries={entries}/>
            <Dashboard entries={entries} setEntries={setEntries} setEditEntry={setEditEntry} />
          </div>
        </div>
    </div>
  )
}

export default App
