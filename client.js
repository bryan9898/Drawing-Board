$(function(){
    
    // Configuration
    var url = '192.168.1.9:8080'; // URL of your webserver
    var line_thickness = 7;
    var line_colour = "blue";

    // Variables
    var id = Math.round(Math.random()); // Generate a unique ID
    var drawing = false; // A flag for drawing activity
    var touchUsed = false; // A flag to figure out if touch was used
    var clients = {};
    var cursors = {};
    var prev = {}; // Previous coordinates container
    var socket = io.connect(url);
    var lastEmit = $.now();

    //1 
    var canvas = $('#paper');
    var ctx = canvas[0].getContext('2d');


    //2
    var canvas2 = $('#paper2');
    var ctx2 = canvas2[0].getContext('2d');
    var drawing2 = false; // A flag for drawing activity
    var touchUsed2 = false; // A flag to figure out if touch was used
    var id2 = Math.round(Math.random()); 
    var prev2 = {};
    var lastEmit2 = $.now();


    //3
    var canvas3 = $('#paper3');
    var ctx3 = canvas3[0].getContext('2d');
    var drawing3 = false; // A flag for drawing activity
    var id3 = Math.round(Math.random()); 
    var prev3 = {};
    var lastEmit3 = $.now();

    //4
    var canvas4 = $('#paper4');
    var ctx4 = canvas4[0].getContext('2d');
    var drawing4 = false; // A flag for drawing activity
    var id4 = Math.round(Math.random()); 
    var prev4 = {};
    var lastEmit4 = $.now();

    //5
    var canvas5 = $('#paper5');
    var ctx5 = canvas5[0].getContext('2d');
    var drawing5 = false; // A flag for drawing activity
    var id5 = Math.round(Math.random()); 
    var prev5 = {};
    var lastEmit5 = $.now();


    //6
    var canvas6 = $('#paper6');
    var ctx6 = canvas6[0].getContext('2d');
    var drawing6 = false; // A flag for drawing activity
    var id6 = Math.round(Math.random()); 
    var prev6 = {};
    var lastEmit6 = $.now();


    function printMousePos(event) {
        console.log("clientX: " + event.clientX +" - clientY: " + event.clientY);
      }
      
      document.addEventListener("click", printMousePos);

    function drawLine2(fromx, fromy, tox, toy)
    {

        ctx2.beginPath();
        ctx2.lineWidth = line_thickness;
        ctx2.strokeStyle = line_colour;
        ctx2.lineCap = "round";
        
        
        ctx2.moveTo(fromx-500, fromy-30);
        ctx2.lineTo(tox-500, toy-30);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.closePath();
    }

    function drawLine3(fromx, fromy, tox, toy)
    {

        ctx3.beginPath();
        ctx3.lineWidth = line_thickness;
        ctx3.strokeStyle = line_colour;
        ctx3.lineCap = "round"; 
        ctx3.moveTo(fromx-1000, fromy-30);
        ctx3.lineTo(tox-1000, toy-30);
        ctx3.fill();
        ctx3.closePath();
        ctx3.stroke();
        ctx3.closePath();
    }

    function drawLine4(fromx, fromy, tox, toy)
    {

        ctx4.beginPath();
        ctx4.lineWidth = line_thickness;
        ctx4.strokeStyle = line_colour;
        ctx4.lineCap = "round"; 
        ctx4.moveTo(fromx, fromy-500);
        ctx4.lineTo(tox, toy-500);
        ctx4.fill();
        ctx4.closePath();
        ctx4.stroke();
        ctx4.closePath();
    }

    function drawLine5(fromx, fromy, tox, toy)
    {

        ctx5.beginPath();
        ctx5.lineWidth = line_thickness;
        ctx5.strokeStyle = line_colour;
        ctx5.lineCap = "round"; 
        ctx5.moveTo(fromx-500, fromy-500);
        ctx5.lineTo(tox-500, toy-500);
        ctx5.fill();
        ctx5.closePath();
        ctx5.stroke();
        ctx5.closePath();
    }

    function drawLine6(fromx, fromy, tox, toy)
    {

        ctx6.beginPath();
        ctx6.lineWidth = line_thickness;
        ctx6.strokeStyle = line_colour;
        ctx6.lineCap = "round"; 
        ctx6.moveTo(fromx-1000, fromy-500);
        ctx6.lineTo(tox-1000, toy-500);
        ctx6.fill();
        ctx6.closePath();
        ctx6.stroke();
        ctx6.closePath();
    }

    // Drawing helper function
    function drawLine(fromx, fromy, tox, toy)
    {
        ctx.lineWidth = line_thickness;
        ctx.strokeStyle = line_colour;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.stroke();
        ctx.closePath();
    }

   
    
	window.onbeforeunload = function(e) {
        socket.disconnect();
    }; 
	
	
    // On mouse down
    canvas.on('mousedown', function(e) {
        e.preventDefault();
        drawing = true;
        prev.x = e.pageX;
        prev.y = e.pageY;
    });
    canvas2.on('mousedown', function(e) {
        e.preventDefault();
        drawing2 = true;
        prev2.x = e.pageX ;
        prev2.y = e.pageY ;
    });

    canvas3.on('mousedown', function(e) {
        e.preventDefault();
        drawing3 = true;
        prev3.x = e.pageX ;
        prev3.y = e.pageY ;
    });

    canvas4.on('mousedown', function(e) {
        e.preventDefault();
        drawing4 = true;
        prev4.x = e.pageX ;
        prev4.y = e.pageY ;
    });

    canvas5.on('mousedown', function(e) {
        e.preventDefault();
        drawing5 = true;
        prev5.x = e.pageX ;
        prev5.y = e.pageY ;
    });

    canvas6.on('mousedown', function(e) {
        e.preventDefault();
        drawing6 = true;
        prev6.x = e.pageX ;
        prev6.y = e.pageY ;
    });
    

    // On touch start
    canvas.on('touchstart', function(e) {
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing = true;
        prev.x = touch.pageX;
        prev.y = touch.pageY;
    });
    canvas2.on('touchstart', function(e) {
     
        var touch2 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing2 = true;
        prev2.x = touch2.pageX ;
        prev2.y = touch2.pageY ;
    });
    canvas3.on('touchstart', function(e) {
     
        var touch3 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing3 = true;
        prev3.x = touch3.pageX ;
        prev3.y = touch3.pageY ;
    });

    canvas4.on('touchstart', function(e) {
     
        var touch4 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing4 = true;
        prev4.x = touch4.pageX ;
        prev4.y = touch4.pageY ;
    });

    canvas5.on('touchstart', function(e) {
     
        var touch5 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing5 = true;
        prev5.x = touch5.pageX ;
        prev5.y = touch5.pageY ;
    });

    canvas6.on('touchstart', function(e) {
     
        var touch6 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        drawing6 = true;
        prev6.x = touch6.pageX ;
        prev6.y = touch6.pageY ;
    });

    // On mouse move
    canvas.on('mousemove', function(e) {
        // Emit the event to the server
        if ($.now() - lastEmit > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing,
                'id': id
            });
            lastEmit = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing)
        {
            console.log(prev.x, prev.y, e.pageX, e.pageY);
            drawLine(prev.x, prev.y, e.pageX, e.pageY);
            prev.x = e.pageX;
            prev.y = e.pageY;
        }
    });

    canvas2.on('mousemove', function(e) {
        // Emit the event to the server
        e.pageX ;
        e.pageY ;
        if ($.now() - lastEmit2 > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing2,
                'id': id2
            });
            lastEmit2 = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing2)
        {   

            console.log(prev2.x, prev2.y, e.pageX, e.pageY);
            drawLine2(prev2.x, prev2.y, e.pageX, e.pageY);
            prev2.x = e.pageX;
            prev2.y = e.pageY;
        }
    });

    canvas3.on('mousemove', function(e) {
        // Emit the event to the server
        e.pageX ;
        e.pageY ;
        if ($.now() - lastEmit3 > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing3,
                'id': id3
            });
            lastEmit3 = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing3)
        {   

            console.log(prev3.x, prev3.y, e.pageX, e.pageY);
            drawLine3(prev3.x, prev3.y, e.pageX, e.pageY);
            prev3.x = e.pageX;
            prev3.y = e.pageY;
        }
    });

    canvas4.on('mousemove', function(e) {
        // Emit the event to the server
        e.pageX ;
        e.pageY ;
        if ($.now() - lastEmit4 > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing4,
                'id': id4
            });
            lastEmit4 = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing4)
        {   
            drawLine4(prev4.x, prev4.y, e.pageX, e.pageY);
            prev4.x = e.pageX;
            prev4.y = e.pageY;
        }
    });

    canvas5.on('mousemove', function(e) {
        // Emit the event to the server
        e.pageX ;
        e.pageY ;
        if ($.now() - lastEmit5 > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing5,
                'id': id5
            });
            lastEmit5 = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing5)
        {   
            drawLine5(prev5.x, prev5.y, e.pageX, e.pageY);
            prev5.x = e.pageX;
            prev5.y = e.pageY;
        }
    });

    canvas6.on('mousemove', function(e) {
        // Emit the event to the server
        e.pageX ;
        e.pageY ;
        if ($.now() - lastEmit6 > 30)
        {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'touch': false,
                'drawing': drawing6,
                'id': id6
            });
            lastEmit6 = $.now();
        }
        
        // Draw a line for the current user's movement
        if (drawing6)
        {   
            drawLine6(prev6.x, prev6.y, e.pageX, e.pageY);
            prev6.x = e.pageX;
            prev6.y = e.pageY;
        }
    });


    // On touch move
    canvas.on('touchmove', function(e) {
        e.preventDefault();
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

        // Emit the event to the server
        if ($.now() - lastEmit > 10)
        {
            socket.emit('mousemove', {
                'x': touch.pageX,
                'y': touch.pageY,
                'startX': prev.x,
                'startY': prev.y,
                'touch': true,
                'drawing': drawing,
                'id': id
            });
            lastEmit = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing)
        {
            drawLine(prev.x, prev.y, touch.pageX, touch.pageY);
            prev.x = touch.pageX;
            prev.y = touch.pageY;
        }
    });

    canvas2.on('touchmove', function(e) {
        e.preventDefault();
        var touch2 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
        // Emit the event to the server
        if ($.now() - lastEmit2 > 10)
        {
            socket.emit('mousemove', {
                'x': touch2.pageX,
                'y': touch2.pageY,
                'startX': prev2.x,
                'startY': prev2.y,
                'touch': true,
                'drawing': drawing2,
                'id': id2
            });
            lastEmit2 = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing2)
        {
            drawLine2(prev2.x, prev2.y, touch2.pageX, touch2.pageY);
            prev2.x = touch2.pageX;
            prev2.y = touch2.pageY;
        }
    });

    canvas3.on('touchmove', function(e) {
        e.preventDefault();
        var touch3 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
        // Emit the event to the server
        if ($.now() - lastEmit3 > 10)
        {
            socket.emit('mousemove', {
                'x': touch3.pageX,
                'y': touch3.pageY,
                'startX': prev3.x,
                'startY': prev3.y,
                'touch': true,
                'drawing': drawing3,
                'id': id3
            });
            lastEmit3 = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing3)
        {
            drawLine3(prev3.x, prev3.y, touch3.pageX, touch3.pageY);
            prev3.x = touch3.pageX;
            prev3.y = touch3.pageY;
        }
    });

    canvas4.on('touchmove', function(e) {
        e.preventDefault();
        var touch4 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
        // Emit the event to the server
        if ($.now() - lastEmit4 > 10)
        {
            socket.emit('mousemove', {
                'x': touch4.pageX,
                'y': touch4.pageY,
                'startX': prev4.x,
                'startY': prev4.y,
                'touch': true,
                'drawing': drawing4,
                'id': id4
            });
            lastEmit4 = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing4)
        {
            drawLine4(prev4.x, prev4.y, touch4.pageX, touch4.pageY);
            prev4.x = touch4.pageX;
            prev4.y = touch4.pageY;
        }
    });

    canvas5.on('touchmove', function(e) {
        e.preventDefault();
        var touch5 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
        // Emit the event to the server
        if ($.now() - lastEmit5 > 10)
        {
            socket.emit('mousemove', {
                'x': touch5.pageX,
                'y': touch5.pageY,
                'startX': prev5.x,
                'startY': prev5.y,
                'touch': true,
                'drawing': drawing5,
                'id': id5
            });
            lastEmit5 = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing5)
        {
            drawLine5(prev5.x, prev5.y, touch5.pageX, touch5.pageY);
            prev5.x = touch5.pageX;
            prev5.y = touch5.pageY;
        }
    });

    canvas6.on('touchmove', function(e) {
        e.preventDefault();
        var touch6 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
        // Emit the event to the server
        if ($.now() - lastEmit6 > 10)
        {
            socket.emit('mousemove', {
                'x': touch6.pageX,
                'y': touch6.pageY,
                'startX': prev6.x,
                'startY': prev6.y,
                'touch': true,
                'drawing': drawing6,
                'id': id6
            });
            lastEmit6 = $.now();
        }

        // Draw a line for the current user's movement
        if (drawing6)
        {
            drawLine6(prev6.x, prev6.y, touch6.pageX, touch6.pageY);
            prev6.x = touch6.pageX;
            prev6.y = touch6.pageY;
        }
    });

    // On mouse up
    canvas.on('mouseup mouseleave', function(e) {
        drawing = false;
    });

    canvas2.on('mouseup mouseleave', function(e) {
        drawing2 = false;
    });

    canvas3.on('mouseup mouseleave', function(e) {
        drawing3 = false;
    });

    canvas4.on('mouseup mouseleave', function(e) {
        drawing4 = false;
    });
    canvas5.on('mouseup mouseleave', function(e) {
        drawing5 = false;
    });
    canvas6.on('mouseup mouseleave', function(e) {
        drawing6 = false;
    });

    // On touch end
    canvas.on('touchend touchleave touchcancel', function(e) {
        drawing = false;
    });

    canvas2.on('touchend touchleave touchcancel', function(e) {
        drawing2 = false;
    });

    canvas3.on('mouseup mouseleave', function(e) {
        drawing3 = false;
    });

    canvas4.on('mouseup mouseleave', function(e) {
        drawing4 = false;
    });
    canvas5.on('mouseup mouseleave', function(e) {
        drawing5 = false;
    });
    canvas6.on('mouseup mouseleave', function(e) {
        drawing6 = false;
    });






    // Keep users screen up to date with other users cursors & lines
    socket.on('moving', function (data) {
        // Create cursor
        if ( !(data.id in clients) )
        {
            cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
        }
        
        // Move cursor
        cursors[data.id].css({
            'left' : data.x,
            'top' : data.y
        });
        
        // Set the starting point to where the user first touched
        if (data.drawing && clients[data.id] && data.touch)
        {
            clients[data.id].x = data.startX;
            clients[data.id].y = data.startY;
        }

        // Show drawing
        if (data.drawing && clients[data.id])
        {
            // clients[data.id] holds the previous position of this user's mouse pointer
            drawLine(clients[data.id].x, clients[data.id].y, data.x, data.y);
            drawLine2(clients[data.id].x, clients[data.id].y, data.x, data.y);
            drawLine3(clients[data.id].x, clients[data.id].y, data.x, data.y);
            drawLine4(clients[data.id].x, clients[data.id].y, data.x, data.y);
            drawLine5(clients[data.id].x, clients[data.id].y, data.x, data.y);
            drawLine6(clients[data.id].x, clients[data.id].y, data.x, data.y);
        }
        
        // Save state
        clients[data.id] = data;
        clients[data.id].updated = $.now();
    });




});