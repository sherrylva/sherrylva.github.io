import * as d3 from d3;
loadData()

async function loadData(){
    const data = await d3.csv("https://github.com/sherrylva/sherrylva.github.io/blob/main/colleges.csv")
    console.log(data)
}
