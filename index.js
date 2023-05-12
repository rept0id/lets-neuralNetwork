function character(string) {
  return [1,0,1,0];
}

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3],
  activation: 'sigmoid'
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

document.querySelector('body').innerHTML="training";

net.train([{
    input: character('Athanasopoulou'),
    output: [1]
  },
  {
    input: character('Athanasopoulos'),
    output: [0]
  },
  {
    input: character('Georgakopoulou'),
    output: [1]
  },
  {
    input: character('Georgakopoulos'),
    output: [0]
  }
  ], {
  log: detail => console.log(detail)
});

document.querySelector('body').innerHTML="computing";

const prediction = net.run(character('Papadopoulos'));

if (prediction > 0.5) {
	result = 'female'
} else {
	result = 'male'
}

console.log(result); //result : male (correct, Papadopoulos is male Greek surname, ending with -opoulos indicates its a male surname from Peloponnese area)

document.querySelector('body').innerHTML=result;
