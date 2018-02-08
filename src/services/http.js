function getCredentials() {
	return JSON.parse(localStorage.getItem('credentials'));
}

export const errHendler = function(error) {
	console.log(error);
}

export const logIn = function(sendDate) {
	const http = new XMLHttpRequest();

    http.open('POST', 'http://localhost:3500/login');
    http.setRequestHeader("Content-type", "application/json");

    const response = new Promise(function(resolve, reject) {
    	http.onreadystatechange = function() {
	      if(http.readyState == XMLHttpRequest.DONE && http.status == 200) {
	      	resolve(http.responseText);
	      }

		  if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
		   	reject(http.responseText);
		  }
	    };
    });

    http.send(JSON.stringify(sendDate));

    return response;
}

export const getProfile = function() {
	const credentials = getCredentials();

	const response = new Promise(function(resolve, reject) {
		const http = new XMLHttpRequest();

		http.open('GET', 'http://localhost:3500/profile');
		http.setRequestHeader("Content-type", "application/json");
		http.setRequestHeader("Authorization", "Bearer " + credentials.token);

		http.onreadystatechange = function() {
			if(http.readyState == XMLHttpRequest.DONE && http.status == 200) {
			  const data = JSON.parse(http.responseText);

			  resolve(data);
			}

			if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
				reject(http.responseText);
			}
		};

		http.send();
	});

	return response;
}

export const setProfile = function(data) {
	const http = new XMLHttpRequest();
	const credentials = getCredentials();

    http.open('PUT', 'http://localhost:3500/profile');
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader("Authorization", "Bearer " + credentials.token);

    const response = new Promise(function(resolve, reject) {
	    http.onreadystatechange = function() {
			if(http.readyState == XMLHttpRequest.DONE && http.status == 200) {
				const data = JSON.parse(http.responseText);

				resolve(data);
			}

			if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
				reject(http.responseText);
			}
	    }
	});

    http.send(JSON.stringify(data));

    return response;
}

export const getDashboard = function() {
	const credentials = JSON.parse(localStorage.getItem('credentials'));

	const http = new XMLHttpRequest();

	http.open('GET', 'http://localhost:3500/tasks');
	http.setRequestHeader("Content-type", "application/json");
	http.setRequestHeader("Authorization", "Bearer " + credentials.token);


	const response = new Promise(function(resolve, reject) {
	  http.onreadystatechange = function() {
		    if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
				resolve(JSON.parse(http.responseText));
			}

			if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
				reject(http.responseText);
			}
		}
	});

	http.send();

	return response;
}