let val="";
function getValue(input){
    val+=input;
  
    document.getElementById("txt").value=val;


}
function del()

{
val=val.slice(0,-1);

document.getElementById("txt").value=val;

}
function reset()
{
    document.getElementById("txt").value=" " ;
    val=" ";

}

function result()
{
    let x = val;
    let y= eval(x);
    document.getElementById("txt").value=y;


}


