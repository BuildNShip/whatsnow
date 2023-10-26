function updateTime() {
    const timeElement = document.getElementById("time");
    const dateTextElement = document.getElementById("date-text");
    const dateDigitsElement = document.getElementById("date-digits");

    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    
    const timeString = now.toLocaleTimeString(undefined, options);
    
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const dateText = now.toLocaleDateString(undefined, dateOptions);
    
    const dateDigits = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    timeElement.textContent = timeString;
    dateTextElement.textContent = dateText;
    dateDigitsElement.textContent = dateDigits;
}

// Update the time and date immediately and then every second
updateTime();
setInterval(updateTime, 1000);
