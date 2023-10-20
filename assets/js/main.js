// gezogen HTML-Elemente
const monthInput = document.getElementById("monthInput");
const showHoroscopeButton = document.getElementById("showHoroscope");
const horoscopeImage = document.getElementById("horoscope-image-content");
const horoscopeText = document.getElementById("horoscope-text-content");

// Horoskopdaten
const horoscopeData = {
    "22. Dezember - 19. Januar": {
        sign: "Steinbock (22. Dezember - 19. Januar)",
        image: 'https://www.horoscopedates.com/img/icon_capricorn.png',
        description: "Gegen die Regeln zu verstoßen, ist nicht immer schlecht - vor allem, wenn die Regeln Ihre Kreativität einschränken."
    },
    "20. Januar - 18. Februar": {
        sign: "Wassermann (20. Januar - 18. Februar)",
        image: 'https://www.horoscopedates.com/img/icon_aquarius.png',
        description: "Fühlst du dich in letzter Zeit ein wenig gelangweilt von deinem Leben? Dann gibt es gute Neuigkeiten! Heute gibt es ein tolles..."
    },
    "19. Februar - 20. März": {
        sign: "Fische (19. Februar - 20. März)",
        image: 'https://www.horoscopedates.com/img/icon_pisces.png',
        description: "Kommunikation ist heute sehr wichtig - schriftliche, mündliche und sogar nonverbale Körpersprache werden alle..."
    },
    "21. März - 19. April": {
        sign: "Widder (21. März - 19. April)",
        image: 'https://www.horoscopedates.com/img/icon_aries.png',
        description: "Heute könnte Ihre Geduld auf die Probe gestellt werden, wenn eines oder mehrere Ihrer Projekte von jemandem auf Eis gelegt werden..."
    },
    "20. April - 20. Mai": {
        sign: "Stier (20. April - 20. Mai)",
        image: 'https://www.horoscopedates.com/img/icon_taurus.png',
        description: "Ihre intensive Energie macht Sie gerade jetzt zu einem großartigen Kandidaten für eine Führungsposition, wenn Sie also..."
    },
    "21. Mai - 20. Juni": {
        sign: "Zwilling (21. Mai - 20. Juni)",
        image: 'https://www.horoscopedates.com/img/icon_gemini.png',
        description: "Wenn Sie sich nicht sicher sind, ob Sie bereit sind, sich auf eine Party, ein Date, einen neuen Job oder irgendetwas anderes..."
    },
    "21. Juni - 22. Juli": {
        sign: "Krebs (21. Juni - 22. Juli)",
        image: 'https://www.horoscopedates.com/img/icon_cancer.png',
        description: "Zu viele verschiedene Elemente in Ihrem Leben überschneiden sich im Moment - und es ist Ihre..."
    },
    "23. Juli - 22. August": {
        sign: "Löwe (23. Juli - 22. August)",
        image: 'https://www.horoscopedates.com/img/icon_leo.png',
        description: "Die Themen, mit denen Sie sich heute befassen werden, sind sehr kompliziert - Sie müssen Ihre..."
    },
    "23. August - 22. September": {
        sign: "Jungfrau (23. August - 22. September)",
        image: 'https://www.horoscopedates.com/img/icon_virgo.png',
        description: "Am besten kommen Sie heute mit Menschen aus, die Ihre analytische Seite ansprechen. Überraschenderweise sind alle..."
    },
    "23. September - 22. Oktober": {
        sign: "Waage (23. September - 22. Oktober)",
        image: 'https://www.horoscopedates.com/img/icon_libra.png',
        description: "Suchen Sie sich eine kulturelle Veranstaltung aus, die demnächst stattfindet, und besorgen Sie sich noch heute Karten dafür."
    },
    "23. Oktober - 21. November": {
        sign: "Skorpion (23. Oktober - 21. November)",
        image: 'https://www.horoscopedates.com/img/icon_scorpio.png',
        description: "Jemand wird heute eine Überzeugung in Frage stellen, an der Sie schon sehr lange festhalten - und er wird sagen..."
    },
    "22. November - 21. Dezember": {
        sign: "Schütze (22. November - 21. Dezember)",
        image: 'https://www.horoscopedates.com/img/icon_sagittarius.png',
        description: "Jemand in Ihrem Leben muss mehr Verantwortung übernehmen - und Sie müssen es ihm sagen: ..."
    },
};

// Funktion zur Anzeige des Horoskops
function displayHoroscope() {
    const selectedMonth = monthInput.value;
    const horoscope = horoscopeData[selectedMonth];

    if (horoscope) {
        // Zeige die Horoskopinformationen an
        horoscopeImage.src = horoscope.image;
        horoscopeText.textContent = horoscope.sign + " " + horoscope.description;
        horoscopeImage.style.display = "block";
    } else {
        horoscopeImage.style.display = "none";
        horoscopeText.textContent = "Ungültiger Monat. Bitte wählen Sie einen gültigen Monat aus.";
    }
}


showHoroscopeButton.addEventListener("click", displayHoroscope);


