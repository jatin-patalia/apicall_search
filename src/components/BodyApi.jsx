import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BodyApi = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    console.log(search);
  
    const api = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
  
        .then(function (response) {
          setData(response.data);
          console.log('data', data);
        })
  
        .catch(function (error) {
          console.log(error);
        })
    }
  
    useEffect(() => {
      api();
    }, [])
  return (
    <div className="App">
      <form>
        <label for="search">Search:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div>
        <table border="2">
          <thead>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>

            {data.filter((record) => {
              console.log("record.id.includes(search)",record.id);
              return search === '' ? record : record.title.includes(search) || record.body.includes(search)|| record.id.toString().includes(search)|| record.userId.toString().includes(search);
            }).map((record) => (
              <tr key={record.id}>
                <td>{record.userId}</td>
                <td>{record.id}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default BodyApi