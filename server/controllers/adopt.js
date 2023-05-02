const adoptModel = require("../schemas/adoptSchema");

const postAdoptPet = async (req, res) => {
  const { image, contentType, description } = req.body;
  try {
    await adoptModel.create({
      image,
      contentType,
      description,
    });
    res.send("card reacted successfully");
  } catch (error) {
    res.status(500).send({ msg: "cannot create photo" });
    console.log(error);
  }
};

const getAdoptPet = async (req, res)=>{
  try {
   const adoptPets = await adoptModel.find()
    res.send(adoptPets)
  } catch (error) {
    res.status(400).send({msg: "cannot find photo"})
  }
}

module.exports = postAdoptPet;
module.exports = getAdoptPet;
