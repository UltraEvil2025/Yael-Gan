import Employee from './components/component'
import './App.css'

function App() {
  let EmployeeList = [
    {
      id: "11111111",
      name: "Ya'akov",
      role: "1",
      address: {
        city: "Bnei Brak",
        street: "BarIlan 21"
      },
      age:22
    },
    {
      id: "22222222",
      name: "David",
      role: "2",
      address: {
        city: "Jerusalem",
        street: "Hare'e 20"
      },
      age:14
    },
    {
      id: "22222222",
      name: "David",
      role: "2",
      address: {
        city: "Jerusalem"
        , street: "Hare'e 20"
      },
      age:25
    }
  ]
  return (
    <>
      <div>
        {
          EmployeeList.map((e) =><Employee {...e} />)
        }
      </div>
    </>
  )
}

export default App
