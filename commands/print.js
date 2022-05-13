export default function print(arrayContent) {
    if(Array.isArray(arrayContent[0])){
      //Trae todos los valores
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
