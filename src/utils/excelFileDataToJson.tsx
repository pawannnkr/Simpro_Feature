

export const excelFileDataToJson = (data: any[]) =>{
    const jsonResult1:any[]= [];

    // Loop through the array data starting from the second element
    for (let i = 1; i < data.length; i++) {
      const obj: { [key: string]: any } = {};
      for (let j = 0; j < data[i].length; j++) {
        obj[data[0][j]] = data[i][j];
      }
      jsonResult1.push(obj);
    }
    return jsonResult1;
}