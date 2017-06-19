var count = 0;

(function() {
	
	var array = ["Colin","Martin","Benjamin","Remy","Rudy","Flo","Camille","Sarah","Etienne"];
	var div = document.getElementById("textDiv");  
	div.textContent = array[count]; 
	var session = [];

	function send_request() {
		if (!(session[0]))
		{
			div.textContent = "pas de nom choisi"
		}
		else {
			var stringSession = session.toString();
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'session_post.php', true);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        xhr.send('data=' + stringSession);
			div.textContent = "nom choisi"
		}

	}

	yes_button.addEventListener('click', function(ev)
    {
        ev.preventDefault();
        
        session.push(array[count]);


        count = count + 1;
        if (count == array.length) {
        		send_request();
        }
    	else {
    		div.textContent = array[count]; 
    		
    	}
    	if (count > array.length)
    	{
    		div.textContent = "fin"; 
    	}

    	console.log(session.length);



    }, false);

    no_button.addEventListener('click', function(ev)
    {
        ev.preventDefault();

        count = count + 1;
        if (count == array.length) {
        		send_request();
        }
    	else {
    		div.textContent = array[count]; 
    		
    	}
    	if (count > array.length)
    	{
    		div.textContent = "fin"; 
    	}
    	console.log(session); 
    	console.log(session.length);


    }, false);
})();