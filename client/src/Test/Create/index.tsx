// create.component.js

import axios from 'axios'

const Create = () => {
  // const onSubmit = () => {
  //   const obj = {
  //     name: 'thong',
  //     company: 'thong',
  //     age: 20,
  //   }

  //   console.log(obj)

  //   axios.post('http://localhost:4000/persons/add', obj).then((res) => console.log(res.data))
  // }
  return (
    <div>
      <p>Welcome to Create Component!!</p>
      {/* <button onClick={onSubmit}>Submit</button> */}
    </div>
  )
}

export default Create
