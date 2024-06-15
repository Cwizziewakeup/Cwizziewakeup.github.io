document.addEventListener("DOMContentLoaded", function() {
    const naamVader = "Papa"; // Hier kun je de naam van je vader invullen
    const persoonlijkeBoodschap = "Bedankt voor alles wat je voor me doet. Je bent de beste vader die ik me kan wensen!";
    
    const personalMessageElement = document.getElementById("personal-message");
    personalMessageElement.textContent = `Lieve ${naamVader},\n\n${persoonlijkeBoodschap}\n\nMet veel liefde,\nJe kind`;

    personalMessageElement.innerHTML = personalMessageElement.textContent.replace(/\n/g, '<br>');
});

function playAnimation() {
    const animationElement = document.getElementById("animation");
    animationElement.classList.remove("hidden");
}
