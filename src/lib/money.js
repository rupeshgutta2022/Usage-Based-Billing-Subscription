function round(n){return Math.round((Number(n)||0)*100)/100;}
function add(...v){return round(v.reduce((a,b)=>a+(Number(b)||0),0));}
function multiply(a,b){return round((Number(a)||0)*(Number(b)||0));}
module.exports={round,add,multiply};
