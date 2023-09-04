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
    let final;
    for(let i=0;i<val.length;i++)
    {
        if(val[i]=="+")
        {
          let l=val.substring(0,i);
          let r=val.substring(i+1,val.length)
          final=parseInt(l)+parseInt(r);
          

         
        }
        if(val[i]=="-")
        {
          let l=val.substring(0,i);
          let r=val.substring(i+1,val.length)
          final=parseInt(l)-parseInt(r);
          
        }
        if(val[i]=="*")
        {
          let l=val.substring(0,i);
          let r=val.substring(i+1,val.length)
          final=parseInt(l)*parseInt(r);
        
         
        }
        if(val[i]=="/")
        {
          let l=val.substring(0,i);
          let r=val.substring(i+1,val.length)
          final=parseInt(l)/parseInt(r);
          

         
        }
    }
    document.getElementById("txt").value=final;
}