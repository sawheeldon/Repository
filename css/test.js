/* global $ */
/* global io */
var socket = io();

var pictionary = function () {
    //Get word list
    var getItems = function () {
        var ajax = $.ajax('/words', {
            type: 'GET',
            dataType: 'json'
        });
        ajax.done(function (result) {
            result.forEach(function (word) {
                WORDS.push(word.name);
            });
        })
        ajax.fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    }();

    var canvas, context, drawing, drawer, guessBox, word, me;
    var WORDS = [];
    console.log(WORDS);
    var incognitoMode = false;
    var username = prompt('What\'s your name?') || 'Guest';
    //Display information modal box
    $('.how').click(function () {
        $('.overlay').fadeIn(1000);
    });
    // Hide information modal box
    $('a.close').click(function () {
        $('.overlay').fadeOut(1000);
    });

    //Update userlist
    var updateUsers = function (users) {
        $('#users').empty();
        users.forEach(function (user) {
            if (user.name != username) {
                addUser(user);
            } else {
                me = user;
                updatePoints(me.points);
                if (me.drawer) {
                    word = wordPicker(WORDS);
                    me.word = word;
                    setWord(me.word);
                    if (me.points > 50) {
                        incognitoMode = true;
                        $('#incognito').show();
                    }
                } else {
                    $('#word').hide();
                    $('#guess').show();
                    $('#incognito').hide();
                }
            }
            //Having this code makes the remove function break
            /*if (user.waiting) {
                 console.log(user);
                 //Only logs the user it's true for, but changes both screens - why?
                $('#waitMsg').show();
                $('.content').hide();
                $('#top-message').hide();
                $('.how').hide();
            } else {
                console.log(user);
                $('#waitMsg').hide();
                $('.content').show();
                $('#top-message').show();
                $('.how').show();
            }
            */
        });
    };
    // update points
    var updatePoints = function (points) {
        $('#points').html('Points: <span class=highlight>' + points + '</span>');
    }

    //Add users
    //*****Currently adding new user changes drawer waiting to true
    var addUser = function (user) {
        var isDrawer = 'notDrawing';
        if (user.drawer) {
            isDrawer = 'isDrawing';
        }
        $('#users').append('<div><button id="' + user.id + '" class="' + isDrawer + '">' + user.name + '</button></div>');
    };

    // Selecting the winner
    $('#users').on('click', 'button', function () {
        if (me.drawer) {
            var uName = $(this).text();
            var uId = $(this).attr('id');
            clear();
            //update UI
            socket.emit('pickWinner', uId);
            socket.emit('clearCanvas')
        }
    });

    //Displaying winner message
    var showWinner = function (obj) {
        $('#guesses').append(obj.newDrawer.name + ' is the winner! The word was ' + word + '<br/>').show();
        setTimeout(function () {
            $('#guesses').empty();
        }, 1500);
    };

    //Choosing word for drawer
    var wordPicker = function (wordList) {
        return wordList[Math.floor(Math.random() * (wordList.length - 1))];
    };

    //Displaying word to draw
    var setWord = function (word) {
        $('#word').text('You are the drawer! Your word is: ' + word).show();
        $('#guess').hide();
    };

    //Drawing
    var draw = function (position) {
        context.beginPath();
        context.arc(position.x, position.y, 6, 0, 2 * Math.PI);
        context.fill();
    };

    //Clear Canvas
    var clear = function () {
        context.clearRect(0, 0, canvas[0].width, canvas[0].height);
    };

    //Set up canvas, track drawing
    canvas = $('canvas');
    context = canvas[0].getContext('2d');
    canvas[0].width = canvas[0].offsetWidth;
    canvas[0].height = canvas[0].offsetHeight;
    canvas.on('mousedown', function () {
        if (me.drawer) {
            drawing = true;
        }
    });
    canvas.on('mouseup', function () {
        drawing = false;
    });
    canvas.on('mousemove', function (event) {
        var offset = canvas.offset();
        var position = {
            x: event.pageX - offset.left,
            y: event.pageY - offset.top
        };
        if (drawing) {
            if (!incognitoMode) {
                draw(position);
            }
            socket.emit('draw', position);
        }
    });

    //Clear on click
    $('#clear').on('click', function () {
        if (me.drawer) {
            clear();
            socket.emit('clearCanvas')
        }
    });

    /***************
    For use with initial start click by drawer

    On click, need to somehow call function that will change all the user statuses, then emit it to server
    **How to change user statuses without getting usersArray from server?**
    Server, on emit, will call updateUsers to change displays

    var changeWaitStatus = function (users) {
        users.forEach(function(user,index){
           user.waiting = false;
        });
        updateUsers(users);
    }

    $('#start').on('click', function() {
            changeWaitStatus();
            socket.emit('changeWaitStatus')
        });*/


    //Guesses
    // Show guess history
    var addGuess = function (obj) {
        $('#guesses').append('<div><strong><span class="highlight">' + obj.user + ':</span></strong> ' + obj.guess + '</div>');
    };

    //Capture guess input, return input
    guessBox = $('#guess input');
    guessBox.on('keydown', function (event) {
        if (event.keyCode != 13) {
            return;
        }
        var guess = guessBox.val();
        addGuess({
            user: 'Me',
            guess: guess
        });
        socket.emit('guess', guess);
        guessBox.val('');
    });

    socket.emit('addUser', username);
    socket.on('draw', draw);
    socket.on('updateUsers', updateUsers);
    socket.on('guess', addGuess);
    socket.on('showWinner', showWinner);
    socket.on('clearCanvas', clear);
};


$(document).ready(pictionary);
