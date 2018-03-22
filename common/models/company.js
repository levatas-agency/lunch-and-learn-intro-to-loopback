'use strict';

module.exports = function(Company) {
	Company.test = (callback) => {
		callback(null, {
			hello: "world"
		});
	};

	Company.remoteMethod('test', {
		http: {
			path: '/test',
			verb: 'get'
		},
		returns: {
			arg: 'test',
			type: 'object'
		}
	});
};
