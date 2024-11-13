const getElement = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener(
        "click", () => {
            // get the values entered by the user
            const eventName = getElement("#event").value;
            const eventDateString = getElement("#date").value;
            // get the message label element
            const messageLbl = getElement("#message");
            // make sure user entered an event name and date
            if (eventName == "" || eventDateString == "") {
                messageLbl.textContent =
                    "Please enter both a name and a date.";
                return;
            }
            // convert event date string to Date object
            // and check for validity
            const eventDate = new Date(eventDateString);
            if (eventDate.toString() == "Invalid Date") {
                messageLbl.textContent =
                    "Please enter a valid date.";
                return;
            }
            // calculate days
            const today = new Date();
            const msFromToday = eventDate.getTime()
            today.getTime();
            const msForOneDay = 24 * 60 * 60 * 1000;
            const daysToDate = Math.ceil(msFromToday /
                msForOneDay);
            // create and display message
            const displayDate = eventDate.toDateString();
            let msg = "";
            if (daysToDate == 0) {
                msg = `Hooray! Today is ${eventName}! (${displayDate})`;
            } else if (daysToDate > 0) {
                msg = `${daysToDate} day(s) until ${eventName}!
 (${displayDate})`;
            } else if (daysToDate < 0) {
                msg = `${eventName} happened ${Math.abs(daysToDate)}
 day(s) ago. (${displayDate})`;
            }
            messageLbl.textContent = msg;
        });
    // set focus on first text box
    getElement("#event").focus();
});