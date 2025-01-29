import unitService from "../services/unitService.js";
const Controller = {
  // Create a new unit
  createUnit: async (req, res) => {
    try {
      const unitData = req.body;
      const unit = await unitService.createUnit(unitData);
      if (!unit) {
        return res.status(404).json({ message: "NOT FOUND" });
      }
      return res
        .status(201)
        .json({ message: "Unit created successfully", unit: unit });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Find all
  findUnits: async (req, res) => {
    try {
      const units = await unitService.findAlls();
      if (!units) {
        return res.status(404).json({ message: "NOT FOUND" });
      } else {
        return res
          .status(200)
          .json({ message: "GET DATA", status: true, units });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Update a unit
  updateUnit: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const unit = await unitService.updateUnit(id, updateData);
      return res
        .status(200)
        .json({ message: "UPDATE DATA", status: true, unit });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Delete a unit
  deleteUnit: async (req, res) => {
    try {
      const { id } = req.params;
      const unit = await unitService.deleteUnit({ _id: id });
      if (!unit) {
        return res.status(404).json({ message: "NOT FOUND" });
      } else {
        return res
          .status(200)
          .json({ message: "DELETE DATA", status: true, unit });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Find a unit by id
  findUnitById: async (req, res) => {
    try {
      const { id } = req.params;
      const unit = await unitService.findUnitById(id);
      if (!unit) {
        return res.status(404).json({ message: "NOT FOUND" });
      } else {
        return res
          .status(200)
          .json({ message: "GET DATA", status: true, unit });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default Controller;
