// set providor
if(typeof nekonium !== 'undefined'){
  console.log("connect to nekonium.web3");
  web3=nekonium.web3;
}else if(typeof nukomask !=='undefined'){
  console.log("connect to nukomask.web3");
  web3=nukomask.web3;
}else{
  console.log("connect to localhost");
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8293"));
}
