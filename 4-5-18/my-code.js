let blist = ["Go Skydiving", "Flyers win the Stanely Cup", "Get stupid rich"]
console.log(blist.length);
blist.push("smoke")
console.log(blist.length);

//for loop
for (let i=0; i<blist.length; i++) {
  console.log(blist[i]);
}
let balance = 1000;
let interest = 0.2;
let years = 0;
while (balance < 1000000) {
  balance = balance + balance * interest;
  years +=1;
}
console.log("in " + years + " years, bro.");
