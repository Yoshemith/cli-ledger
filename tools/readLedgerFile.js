import fs from 'fs';
import path from 'path';

export default function readLedgerFile(filePath){
    const dataFile = fs.readFileSync(filePath, 'utf8');
    let indexContent = dataFile.split('\n');

    if(indexContent[0].includes('!include')){
        indexContent = accessLedgers(indexContent, filePath);
    }
    return indexContent;
}

function accessLedgers(indexContent, filePath){
    let ogLocation = path.dirname(filePath);
    let allValues = [];
    let valueLocation;
    indexContent.map((value) => {
        if(value != ''){
            valueLocation = path.join(ogLocation, value.slice(9));
            allValues.push([...readLedgerFile(valueLocation)]);
        }
    });
    return allValues;
}