$(function() {
     let clock = new Clock();
     clock.displayCurrentTime();
     clock.displaySessionTime();
     clock.displayBreakTime();
});

function Clock() {

    var startTime = 1500, //Starting value for our timer
        currentTime = 1500, //Current time for our timer
        sessionTime = 1500, //Length of a session in seconds
        breakTime = 300; //Length of a break in seconds

    //Function to convert a number of seconds into a formatted time string
    function formatTime(secs) {
        var result = "";
        let seconds = secs % 60;
        let minutes = parseInt(secs / 60) % 60;
        let hours = parseInt(secs / 3600);
        //leading zeroes if minutes/secons are less thant 10        
        
        //Function adds
        function addLeadingZeroes(time) {
            if (time < 10) {
                return "0" + time; 
            } else {
                return time;
            }
        }       
        //If we have a value for hours greater than 0, we need to show it on our time output
        if (hours > 0) {
            result += (hours + ":")
        }

        //Build up the result string with minutes and seconds
        result += (addLeadingZeroes(minutes) + ":" + addLeadingZeroes(seconds));

        //Return the result string
        return result;
    }

    //FUunction to diplay the time remaining on the timer
    this.displayCurrentTime = function() {
        $('.main-display').text(formatTime(currentTime));
    }

    //Function to display the session time
    this.displaySessionTime = function() {
        $('.time-session-display').text(parseInt(sessionTime / 60) + " min");
    }

    //Function to display the break time
    this.displayBreakTime = function() {
        $('.time-break-display').text(parseInt(breakTime / 60) + " min");
    }
}