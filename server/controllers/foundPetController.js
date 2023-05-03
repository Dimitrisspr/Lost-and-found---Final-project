const foundModel = require("../schemas/iFoundAPetSchema");

const foundPet = async (req, res)=>{
  const {name, photo, location, time} = req.body;
try {
  await foundModel.create({
    name,
    photo,
    location,
    time,
  })
  res.send({msg: "found pet form completed"})
} catch (error) {
  res.status(500).send({msg: "server error", error})
  console.log(error);
}
}

module.exports = foundPet;