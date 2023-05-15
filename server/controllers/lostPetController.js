const lostModel = require("../schemas/iLostAPetSchema");

const lostPet = async (req, res) => {
  const { name, description, photo, location, time } = req.body;

  try {
    await lostModel.create({
      name,
      description,
      photo,
      location,
      time,
      // ownersID,
      // ownersFCMID,
    });
    res.status(200).send({ msg: "Lost pet created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to create lost pet" }, error);
  }
};

module.exports = lostPet;
