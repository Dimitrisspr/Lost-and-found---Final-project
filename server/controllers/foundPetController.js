const foundModel = require("../schemas/iFoundAPetSchema");

const foundPet = async (req, res)=>{
  const {description, photo, location, time} = req.body;
  const userEmail = req.user.email; 

try {
  await foundModel.create({
    description,
    photo,
    location,
    time,
    email: userEmail
  })
  res.send({msg: "found pet form completed"})
} catch (error) {
  res.status(500).send({msg: "server error", error})
  console.log(error);
}
}

const getFoundPets = async (req, res)=>{
  try {
   const foundPets = await foundModel.find();
   res.send(foundPets)

  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {foundPet, getFoundPets};