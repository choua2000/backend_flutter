import Unit from "../models/unit.js";

// Create a new unit
 const serviceUnit = {
    createUnit: async (unitData) => {
        const unit = new Unit(unitData);
        await unit.save();
        return unit;
    },
    // Find all units
    findAlls: async () => {
        const units = await Unit.find();
        return units;
    }, 
    // Delete a unit
    deleteUnit: async (id) => {
         await Unit.findByIdAndDelete(id);
    },
    // Update a unit
     updateUnit: async (id, unitData) => {
        const unit = await Unit.findByIdAndUpdate(id, unitData, { new: true });
        if(!unit){
            return res.status(404).json({message:"NOT FOUND"})
        }
        return unit;
    },
    // Find a unit by id
    findUnitById: async (id) => {
        const unit = await Unit.findById(id);
        return unit;
    }
}

export default serviceUnit;