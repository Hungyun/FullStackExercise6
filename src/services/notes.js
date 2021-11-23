import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}



const update = async (id) =>{
    console.log('updating object of id', id)
    const objUrl = `${baseUrl}/${id}`
    const oldObj = await axios.get(objUrl)
    const newObj = {content: oldObj.data.content, votes: oldObj.data.votes + 1}
    const response = await axios.put(objUrl, newObj)
    return response.data
}

export default { getAll , createNew, update}