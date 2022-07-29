function mygold(){
    let goldAmount=document.getElementById('goldAmount').value;
    if(goldAmount>7.5)
      {
        
      document.getElementById('goldShow').innerText=goldAmount*132000/40;
    } else  {
        document.getElementById('goldShow').innerHTML=("yours not zakat");

    }
}
function mysilver(){
    let silverAmount=document.getElementById('silverAmount').value;
    if(silverAmount>52.5)
      {
        
      document.getElementById('silverShow').innerText=silverAmount*1800/40;
    } else  {
        document.getElementById('silverShow').innerHTML=("yours not zakat");

    }
}
function mycash(){
    let cashAmount=document.getElementById('cashAmount').value;
    if(cashAmount>75000)
      {
        
      document.getElementById('cashShow').innerText=cashAmount/40;
    } else  {
        document.getElementById('cashShow').innerHTML=("yours not zakat");

    }}