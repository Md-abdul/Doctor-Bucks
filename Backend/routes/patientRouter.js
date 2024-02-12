const { Router } = require("express");
const PatientModel = require("../models/patient.model");

const patientRouter = Router();

patientRouter.get("/patient", async (req, res) => {
  try {
    const data = await PatientModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


patientRouter.post("/Bookappointments", async (req, res) => {
  try {
    const data = await new PatientModel(req.body);
    await data.save();
    res.status(200).json({ msg: "Apponiments Booked" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


patientRouter.patch("/patientupdate/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PatientModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ msg: "Data Update" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


patientRouter.delete("/patientdelete/:id", async(req,res) => {
    const {id} = req.params;
    try {
        await PatientModel.findByIdAndDelete({_id: id}, req.body)
        res.status(200).json({msg: "Data deleted"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = patientRouter;
