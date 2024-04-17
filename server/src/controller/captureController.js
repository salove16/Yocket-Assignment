const data = require("../db.json")



const checkCpature=(copsArray,fugitiveCity)=>{
    for (let i = 0; i < copsArray.length; i++) {
        if (copsArray[i].selectedCity === fugitiveCity) {
            return [true,copsArray[i]]
        }
    }
    return [false];
}



exports.capture = async (req, res) => {
    try {
      const copsArray= req.body;
console.log(copsArray,"copsarray")

     const fugitiveLocation = data.cities[Math.floor(Math.random() * data.cities.length)];
      

const result=checkCpature(copsArray,fugitiveLocation.name)
console.log(result)

if(result[0]){
    const capturingCop = data.cops.find((cop)=>cop.name===result[1].cop)
    const copLocation = data.cities.find((city) => city.name === result[1].selectedCity);

    const cop_Vehicle=data.vehicles.find((vehicle)=>vehicle.kind === result[1].selectedVehicle)
    console.log([capturingCop,cop_Vehicle,copLocation])
    res.status(200).json({ success: true, result:[capturingCop,cop_Vehicle,copLocation] });

}else{
    res.status(200).json({ success: false });
}

   
    
    } catch (err) {
      res.status(500).json(err);
    }
  };