const themeBtn = document.querySelector(".toggle")

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Aug", "Sept", "Oct", "Nov", "Dec"]
const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// add toggle button to switch from light mode to dark
themeBtn.addEventListener("click", () => {
    const head = document.querySelector("head")
    const darkMode = document.querySelector("head #dark")
    const lightMode = document.querySelector("head #light")

    function removeStylesheet(id){
        id.remove()
    }
    function addStylesheet(fileName){
        let link = document.createElement("link")
        link.rel = "stylesheet"
        link.id = fileName
        link.href = "theme/" + fileName + ".css"
        head.appendChild(link)
        themeBtn.innerHTML = fileName.slice(0, 1).toUpperCase() + 
        fileName.slice(1, fileName.length) + " Mode"

    }
    
    if (darkMode){
        removeStylesheet(darkMode)
        addStylesheet("light")
    }
    else if(lightMode){
        removeStylesheet(lightMode)
        addStylesheet("dark")
    }
    else{
        addStylesheet("dark")
    }
})



function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


function setTime(){
    var time = new Date()

    var year = time.getFullYear()
    var month = time.getMonth()
    var date = time.getDate()
    
    var day = time.getDay()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()

        // needles configuration
        function timeConfig(){
            var hourNeedle = document.querySelector(".needle.hour")
            var minuteNeedle = document.querySelector(".needle.minute")
            var secondNeedle = document.querySelector(".needle.second")
    
            var hourForClock = hour % 12
            hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
            minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
            secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`
    
            // check if am or pm
            var pmam = hour > 12 ? "PM" : "AM"
            // set time
            minute = minute.toString()
            document.querySelector(".time").innerHTML = `${hour % 12}:${minute.length < 2 ? ("0" + minute) : minute} ${pmam}`
            document.querySelector(".date").innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> ${year}`
        }
    timeConfig()
}

setTime()

setInterval(setTime, 1_000);