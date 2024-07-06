document.addEventListener("DOMContentLoaded", () => {
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');

    function updateClock() {
        const now = new Date();
        const options = { timeZone: 'Asia/Colombo', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
        const [hour, minute, second] = timeString.split(':').map(Number);

        const secondsDegrees = ((second / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutesDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hoursDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    const initialHour = 12;
    const initialMinute = 10;
    const initialSecond = 0;

    const initialSecondsDegrees = ((initialSecond / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${initialSecondsDegrees}deg)`;

    const initialMinutesDegrees = ((initialMinute / 60) * 360) + ((initialSecond / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${initialMinutesDegrees}deg)`;

    const initialHoursDegrees = ((initialHour / 12) * 360) + ((initialMinute / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${initialHoursDegrees}deg)`;

    setInterval(updateClock, 1000);

    updateClock();
});
