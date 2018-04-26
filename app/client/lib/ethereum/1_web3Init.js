// set providor
if(typeof nekonium === 'undefined'){
  console.log("import nekonium namespace.");
  nekonium={};
}
if(typeof nekonium.web3 === 'undefined'){
  console.log("add nekonium web3 by http");
  nekonium.web3 = new nekonium.Web3(new nekonium.Web3.providers.HttpProvider("http://localhost:8293"));
}else{
  console.log("add nekonium web3 by current probider.");
  nekonium.web3 = new nekonium.Web3(nekonium.web3.currentProvider);
}
