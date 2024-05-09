import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const PhotoApi = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    console.log(search);
  
    const api = () => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
  
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
            <th>Album Id</th>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail URL</th>
          </thead>
          <tbody>

            {data.filter((record) => {
              console.log("record.id.includes(search)",record.id);
              return search === '' ? record : record.title.includes(search);
            }).map((record) => (
              <tr key={record.id}>
                
                <td>{record.albumId}</td>
                <td>{record.id}</td>
                <td>{record.title}</td>
                <td><img src={record.url} /></td>
                <td>{record.thumbnailUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default PhotoApi