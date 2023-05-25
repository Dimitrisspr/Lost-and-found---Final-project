const lostModel = require("../schemas/iLostAPetSchema");

const lostPet = async (req, res) => {
  const { name, description, photo, location, time } = req.body;
  const userEmail = req.user.email; 
  console.log(userEmail);
  try {
    await lostModel.create({
      name,
      description,
      photo,
      location,
      time,
      email: userEmail,
    });

    res.status(200).send({ msg: "Lost pet created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to create lost pet" }, error);
  }
};

const getLostPets = async (req, res) => {
  try {
    const lostPets = await lostModel.find();
    res.send(lostPets);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { lostPet, getLostPets };
