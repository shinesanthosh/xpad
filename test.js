const pdb = require('pseudodb');

const padb = {
	colls: '',
	collection(col) {
		const colls = col;
		console.log('Col ', colls);
		return {
			doc(id, colls) {
				console.log('id:', id);
				return {
					async get() {
						console.log('Collstes', colls);
						const data = pdb.getDoc('data', id);
						return data;
					},
				};
			},
		};
	},
};

padb
	.collection('bam')
	.doc('YZwCVp0oKTv0vNEY2sVG')
	.get()
	.then((data) => {
		console.log('data:', data);
	})
	.catch((e) => {
		console.log('Error: ', e);
	});
