const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const training_data = data.map(item => ({
	input: item.name,
	output: item.folder
}));

// train here
network.train(training_data, {
	iterations: 2000
});

// FIXME: need more data, isn't working correctly right now
// const output = network.run('');

console.log(`Output: ${output}`);
