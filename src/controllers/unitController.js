import unitService from "../services/unitService.js";
const Controller = {
                   // Create a new unit
    createUnit: async (req, res) => {
        try {
            const { unitName } = req.body;
            if (!unitName) return res.status(400).json({"message": "Unit name is required"});
            const unit = await unitService.createUnit(req.body);
            return res.status(201).json({"message": "Unit created successfully", "unit": unit});
        } catch (error) {
            return res.status(500).json({"message": error.message});
        }
    },
         // Find all
     findUnits: async (req,res) =>{
        try {
            const units = await unitService.findAlls();
            if(!units){
                return res.status(404).json({message:"NOT FOUND"})
            } else{
                return res.status(200).json({message:"GET DATA",status:true,units})
            }

        } catch (error) {
            return res.status(500).json({"message": error.message});
        }
     }
}

export default Controller;