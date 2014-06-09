// var Types = require('hapi').types;

module.exports = [ {
	method : 'GET',
	path : '/log/entries',
	config : {
		handler : getEntries
	}
}, {
	method : 'GET',
	path : '/log/entry/{id}',
	config : {
		handler : getEntry
	}
}, {
	method : 'POST',
	path : '/log/entry',
	config : {
		handler : addEntry,
		payload : {
			parse : true,
			output : 'data',
			override : 'application/json'
		}
	}
} ];

var entries = [

    {id:1, description:'Im learning angular js', start_date: '2014-05-01 : 14:00', end_date: '2014-05-01 : 16:00', project: 'AngularIsCool', task : '#34353'},
    {id:2, description:'Setting my first REST service', start_date: '2014-05-02 : 10:10', end_date: '2014-05-01 : 16:01', project: 'SpringBoot', task : '#44553'},
    {id:3, description:'How to write a test', start_date: '2014-05-04 : 09:10', end_date: '2014-05-04 : 13:55', project: 'xUnit', task : '#54353'}
];

function getEntries(request, reply) {

	return reply(entries);

}

function getEntry(request, reply) {
	var entry = entries.filter(function(e) {
		return e.id == parseInt(request.params.id);
	});
	reply(entry);
}

function addEntry(request, reply) {

	var entry = {
		id : entries.length == 0 ? 1 : entries[entries.length - 1].id + 1,
		description : request.payload.description,
		start_date : request.payload.start_date,
		end_date : request.payload.end_date,
		project : request.payload.project,
		task : request.payload.task
	};

	entries.push(entry);

	reply(entry).code(201).header('Location',
			'/log/entry/' + entry.id);
}
