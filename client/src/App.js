import { useState, useEffect } from 'react'
import Split from '@uiw/react-split'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [value, setvalue] = useState('')
  const [edit, setEdit] = useState('')
  const [update, setUpdate] = useState('')
  const [count, setCount] = useState(0)

  const getData = async () => {
    const res = await axios.get('/get')
    setData(res.data)
  }

  const handleAdd = async () => {
    try {
      await axios.post('/', { data: value })
      setCount(count + 1)
    } catch (error) {
      console.log(error)
    }

    setvalue('')
    getData()
  }

  const handleEdit = async (id, data) => {
    setEdit(data)
    setUpdate(id)
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/${update}`, { data: edit })
      setCount(count + 1)
    } catch (error) {
      console.log(error)
    }

    setEdit('')
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <Split mode='vertical'>
        <Split mode='horizontal' className='tile'>
          <div className='subtile'>
            <div className='top-left'>
              <h3>Get Data Here</h3>
              {data.length > 0 &&
                data.map((item) => <p key={item._id}>{item.data}</p>)}
            </div>
          </div>
          <div className='subtile tileflex'>
            <div className='top-right'>
              <h3>Add Data Here</h3>
              <input
                type='text'
                name='data'
                value={value}
                onChange={(e) => setvalue(e.target.value)}
              />
              <br />
              <button onClick={() => handleAdd()}>Add</button>
              <br />
              API call count: {count}
            </div>
          </div>
        </Split>
        <div className='tileflex'>
          <div className='bottom'>
            <h3>Update Data Here</h3>
            <input
              type='text'
              name='edit'
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
            />
            <button onClick={() => handleUpdate()}>Update</button>
            <br />
            <br />
            {data.length > 0 &&
              data.map((item) => (
                <div key={item._id}>
                  <span>{item.data}</span>
                  &nbsp;&nbsp;
                  <button onClick={() => handleEdit(item._id, item.data)}>
                    Edit
                  </button>
                </div>
              ))}
          </div>
        </div>
      </Split>
    </div>
  )
}

export default App
