const argvs = process.argv;

const argv = argvs.slice(2);
const opeartion = argv[0];

const opeartion1 = parseFloat(argv[1]);
const opeartion2 = parseFloat(argv[2]);


//  calculator operation
if (opeartion === "add") {
  console.log(opeartion + " is " + (opeartion1 + opeartion2));
} else if (opeartion === "sub") {
  console.log(opeartion + " is " + (opeartion1 + opeartion2));
} else if (opeartion === "mul") {
  console.log(opeartion + " is " + opeartion1 * opeartion2);
} else if (opeartion === "div") {
  console.log(opeartion + " is " + opeartion1 / opeartion2);
} else {
  console.log("Invalid Operation..");
}
