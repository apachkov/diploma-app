import store from '@/store/';

let ws;
let wsConnect;
const wsUrl = 'ws://localhost:3500/';

export const setWSConnection = function() {
	const credentials = JSON.parse(localStorage.getItem('credentials'));

	if (!credentials || !credentials.token) return Promise.reject('No token');

	if (!credentials || !credentials.dashboard) return Promise.reject('No dashboard');

	if (wsConnect) return wsConnect;

	ws = new WebSocket(wsUrl, credentials.token);

	wsConnect = new Promise(function(resolve, reject) {
		ws.onopen = function (event) {
		    const connect = {
		    	type: 'connect',
		    	id: 'Error connection',
		    	name: credentials.dashboard
		    };

		    ws.send(JSON.stringify(connect));

	        resolve();
	    };
	});

	ws.onmessage = function (event) {
		const message = JSON.parse(event.data);

        store.commit('SOCKET_MESSAGE', message);
    };

    return wsConnect;
}

export const setTask = function(taskId, title, description, status) {
	if (!taskId) {
		taskId = (Math.random() * 99999999).toString(36);
	}

	const taskData = {
		type: 'upsert',
		id: 'Error on create or update',
		taskId: taskId,
		title: title,
		description: description,
		status: status || 'todo'
	}

	ws.send(JSON.stringify(taskData));	
}

export const removeTask = function(taskId) {
	const taskData = {
		type: 'delete',
		id: 'Error on delete',
		taskId: taskId
	}

	ws.send(JSON.stringify(taskData));
}