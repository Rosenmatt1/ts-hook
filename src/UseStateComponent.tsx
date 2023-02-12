import { useState } from "react"

const UseStateComponent = () => {
  const [arr, arrSet] = useState<number[]>([])
  const [name, nameSet] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => nameSet("Jack")}> Set Name </button>
        {name}
      </div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}> Add to Array</button>
        {JSON.stringify(arr)}
      </div>
    </div>
  )
}

export default UseStateComponent;