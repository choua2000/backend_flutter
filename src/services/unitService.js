import Unit from "../models/unit.js";

// Create a new unit
 const serviceUnit = {
    createUnit: async (productData) => {
        const unit = new Unit(productData);
        await unit.save();
        return unit;
    },
    // Find all units
    findAlls: async () => {
        const units = await Unit.find();
        return units;
    },
}

export default serviceUnit;