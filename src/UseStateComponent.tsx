import { useState } from "react"

const UseStateComponent = () => {
  const [arr, arrSet] = useState<number[]>([])

  return (
    <div>
    <div>
      <button onClick={() => arrSet([...arr, arr.length + 1])}> Add to Array</button>
      {JSON.stringify(arr)}
    </div>
  </div>
  )
}

export default UseStateComponent;