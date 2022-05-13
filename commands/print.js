import chalk from 'chalk';
import fs from 'fs';

export default function print(arrayContent) {
    if(typeof(arrayContent[0])=="object"){
      //console.log("Trae todos los valores Index");
      arrayContent.map((arrayindex)=>{
        arrayindex.map((arrayContent) => {
          console.log(arrayContent);
        })
      })
    }else{
      arrayContent.map((value)=>{
        console.log(value)
      })
    } 
}