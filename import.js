
const dataToExport = {
    name: "Rishu Khajuria",
    age: 22,
    email: "rishukhajuria@123"
  };
  
  export { dataToExport };
  

  import { dataToExport } from './exportedData.js';
  
  console.log("Imported data:", dataToExport);
  