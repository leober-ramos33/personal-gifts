document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope");
    const envelopeTop = document.querySelector(".envelope .top");
    const envelopeModal = document.querySelector(".envelope .modal");

    // When open the envelope redirect to the envelope.
    envelope.addEventListener("click", () => {
        envelopeTop.classList.add("open");

        setTimeout(() => {
            window.location = "./envelope.html";
        }, "400");
    });
});
