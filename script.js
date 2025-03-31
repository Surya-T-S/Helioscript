// countdown timer
const countdownDate = new Date('2025-04-05T00:00:00').getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>
            <span>${days}</span><span class="label">Days</span>
            <span>${hours}</span><span class="label">Hours</span>
            <span>${minutes}</span><span class="label">Minutes</span>
            <span>${seconds}</span><span class="label">Seconds</span>
        </div>
        `;

    if (distance < 0){
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Annual Day Celebrations Started!";

    }
}
const countdownInterval = setInterval(updateCountdown,1000);
updateCountdown();
