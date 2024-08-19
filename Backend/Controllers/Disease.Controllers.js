const CropsDetails = require('../Models/CropsDetails.Model');
const DiseaseDetails = require('../Models/DiseaseDetails.Models');

const Disease_Details = async (req,res) => {
    try {
        console.log(req.body)
        const {Disease_Name} = req.body;
    const Disease_Detail = await DiseaseDetails.findOne({Disease_Name});
    
    const Crops_Details = await CropsDetails.findOne({Crop_Name: Disease_Detail.Crop_Name});
    console.log("Api hit")
    if (!Disease_Detail) {
        return res.status(404).json({ message: "Disease not found" });
    }

    res.status(200).json({
        Disease_Detail,
        Crops_Details
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = 
{
    Disease_Details
}