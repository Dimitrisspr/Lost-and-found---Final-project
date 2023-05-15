const lostModel = require("../schemas/iLostAPetSchema");

const lostPet = async (req, res) => {
  const { name, description, photo, location, time, ownersID, ownersFCMID} = req.body;

  try {
    await lostModel.create({
      name,
      description,
      photo,
      location,
      time,
      ownersID,
      ownersFCMID,
    });
    res.send({ msg: "lost created successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
    console.log(error);
  }
};

module.exports = lostPet;
