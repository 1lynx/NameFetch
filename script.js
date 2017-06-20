var count = 0;

(function() {
    
    var array = [];
    var div = document.getElementById("textDiv");  
    var session = [];
    
    $.ajax({
        url: "python/getpython.php",
        type: "post",
        data: {data : "dataString"},
        cache: false,
        success: function(result) {
                var returnedvalue = result;
                array = returnedvalue.split(",");
                div.textContent = array[count]; 

            }
    });

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
            console.log(stringSession);
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

    }, false);

    restart_button.addEventListener('click', function(ev)
    {
        ev.preventDefault();
        window.location.reload();

    }, false);

})();