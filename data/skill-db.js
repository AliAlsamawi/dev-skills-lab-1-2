const skills = [
  {text: 'HTML', funLevel: 4, _id: 125223},
  {text: 'CSS', funLevel: 4, _id: 127904},
  {text: 'JavaScript', funLevel: 5, _id: 139608},
  {text: 'MongoDb', funLevel: 4, _id: 139608},
  {text: 'Express.js', funLevel: 5, _id: 139608},
  {text: 'React', funLevel: 3, _id: 139608},
  {text: 'Node.js', funLevel: 4, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New skills wouldn't be done
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

export {
  find,
  findById,
  create,
}