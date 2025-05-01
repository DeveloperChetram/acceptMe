let no = document.getElementById('no');
let yes = document.getElementById('yes');
let h1 = document.getElementById('h1');
let body = document.querySelector('.body');
let wlcm = document.getElementById('wlcm');
let main = document.querySelector('.main');

// Create language selection buttons
const languageDiv = document.createElement('div');
languageDiv.style.position = 'fixed';
languageDiv.style.top = '20px';
languageDiv.style.right = '20px';
languageDiv.style.zIndex = '1000';

const englishBtn = document.createElement('button');
englishBtn.innerHTML = 'English';
englishBtn.style.marginRight = '10px';
englishBtn.style.padding = '8px 15px';
englishBtn.style.cursor = 'pointer';

const hindiBtn = document.createElement('button');
hindiBtn.innerHTML = 'हिंदी';
hindiBtn.style.padding = '8px 15px';
hindiBtn.style.cursor = 'pointer';



languageDiv.appendChild(englishBtn);
languageDiv.appendChild(hindiBtn);
document.body.appendChild(languageDiv);


let Nname = "";
while (!Nname) {
    Nname = prompt("Hi sweetheart, what's your name?");
}

// Display the name in the welcome element
wlcm.innerHTML = "Hi " + Nname + ", my love 💕";


// console.log('please view at 100% of google chrome');

const thoughts = [
    "You're the light of my life! 🌟 ...just click on yes",
    "My heart beats for you! ❤️ ...just click on yes",
    "Together, we can conquer the world! 🌍 ...just click on yes",
    "You're my dream come true! 🌠 ...just click on yes",
    "Life is better with you by my side! 🤗 ...just click on yes",
    "You're the missing piece to my puzzle! 🧩 ...just click on yes",
    "Our love story starts now! 📖 ...just click on yes",
    "You're the melody to my heart's song! 🎶 ...just click on yes",
    "Let's create beautiful memories together! 📸 ...just click on yes",
    "You're my sunshine on a cloudy day! ☀️ ...just click on yes",
    "With you, everything feels right! 🌈 ...just click on yes",
    "You're the reason I smile every day! 😊 ...just click on yes",
    "My heart chose you! 💖 ...just click on yes",
    "You're the spark that lights up my life! ✨ ...just click on yes",
    "Every moment with you is precious! ⏳ ...just click on yes",
    "You're my forever and always! ♾️ ...just click on yes",
    "Let's write our love story together! 📝 ...just click on yes",
    "You're the anchor to my soul! ⚓ ...just click on yes",
    "Together, we are unstoppable! 💪 ...just click on yes",
    "You're the love I've been waiting for! 💌 ...just click on yes",
    "My heart belongs to you! 🗝️ ...just click on yes",
    "You're the joy in my life! 🎉 ...just click on yes",
    "Let's make every moment count! ⏰ ...just click on yes",
    "You're my one and only! 💍 ...just click on yes",
    "Our journey starts here! 🛤️ ...just click on yes",
    "You're the magic in my world! 🪄 ...just click on yes",
    "Together, we can reach the stars! 🌌 ...just click on yes",
    "You're the harmony to my melody! 🎵 ...just click on yes",
    "Let's build a future together! 🏡 ...just click on yes",
    "You're the treasure I've been searching for! 🏴‍☠️ ...just click on yes"
];

const hindiThoughts = [
    "तुम मेरी ज़िन्दगी की रोशनी हो... बस 'yes' पर क्लिक करो",
    "तेरी मुस्कान मेरे दिल की धड़कन है... बस 'yes' पर क्लिक करो",
    "तेरी यादें मेरी रूह में बसी हैं... बस 'yes' पर क्लिक करो",
    "बिन तेरे हर पल अधूरा है... बस 'yes' पर क्लिक करो",
    "मेरी हर साँस में तेरा नाम है... बस 'yes' पर क्लिक करो",
    "तू है वो ख्वाब जिसे सच करना है... बस 'yes' पर क्लिक करो",
    "तेरे बिना ज़िन्दगी वीरान है... बस 'yes' पर क्लिक करो",
    "तू ही है मेरा जुनून... बस 'yes' पर क्लिक करो",
    "तेरी हर अदा पर दिल कुर्बान... बस 'yes' पर क्लिक करो",
    "हमारी मोहब्बत अमर रहेगी... बस 'yes' पर क्लिक करो",
    "तेरी आँखों में मेरी दुनिया है... बस 'yes' पर क्लिक करो",
    "तेरी बातों में सुकून है... बस 'yes' पर क्लिक करो",
    "मेरी धड़कनों में तुझसे मोहब्बत बसी है... बस 'yes' पर क्लिक करो",
    "तेरी हँसी से महकता है मेरा जहाँ... बस 'yes' पर क्लिक करो",
    "तू है वो सुकून जो दिल को मिला है... बस 'yes' पर क्लिक करो",
    "मेरे ख्वाबों में हमेशा तू ही तू है... बस 'yes' पर क्लिक करो",
    "तेरे बिना कोई रंग नहीं... बस 'yes' पर क्लिक करो",
    "मेरी दुनिया तेरे इश्क़ से रोशन है... बस 'yes' पर क्लिक करो",
    "तू दिल का आईना है... बस 'yes' पर क्लिक करो",
    "तेरा नाम सुनते ही मुस्कान खिल उठती है... बस 'yes' पर क्लिक करो",
    "मेरे हर ख्वाब में तेरी झलक है... बस 'yes' पर क्लिक करो",
    "इश्क़ की राह में चल पड़े हैं हम... बस 'yes' पर क्लिक करो",
    "तू है वो अफसाना जिसे लिखना है... बस 'yes' पर क्लिक करो",
    "तेरे इश्क़ में खो जाने को दिल चाहता है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत ने सिखाया है जीना... बस 'yes' पर क्लिक करो",
    "तू मेरे दिल की आरज़ू है... बस 'yes' पर क्लिक करो",
    "तेरे बिना अधूरी है मेरी कहानी... बस 'yes' पर क्लिक करो",
    "मेरी रूह में बसी है तेरी खुशबू... बस 'yes' पर क्लिक करो",
    "तू है वो आसमान जिसमें उड़ना है... बस 'yes' पर क्लिक करो",
    "तेरा साथ हो तो हर राह आसान है... बस 'yes' पर क्लिक करो",
    "तेरी याद में बहते हैं आँसू... बस 'yes' पर क्लिक करो",
    "इश्क़ का हर लम्हा तुम्हारे नाम... बस 'yes' पर क्लिक करो",
    "तू है वो प्यार जो दिल को छू जाता है... बस 'yes' पर क्लिक करो",
    "मेरे दिल की धुन है तेरा नाम... बस 'yes' पर क्लिक करो",
    "तेरी बाहों में सुकून मिल जाता है... बस 'yes' पर क्लिक करो",
    "तेरे इश्क़ में जीना अब है बस... बस 'yes' पर क्लिक करो",
    "तू है वो एहसास जो हर पल साथ है... बस 'yes' पर क्लिक करो",
    "तेरे ख्यालों में डूबा रहता हूँ... बस 'yes' पर क्लिक करो",
    "मेरी हर साँस में तेरा असर है... बस 'yes' पर क्लिक करो",
    "तू है वो इम्तहान जिसे दिल ने पार किया है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत में रंगीन हैं मेरे ख्वाब... बस 'yes' पर क्लिक करो",
    "तेरे बिना अधूरा हूँ मैं... बस 'yes' पर क्लिक करो",
    "मेरी दुनिया तेरी मोहब्बत से रोशन है... बस 'yes' पर क्लिक करो",
    "तू है वो दिल की धड़कन... बस 'yes' पर क्लिक करो",
    "तेरे प्यार में खो जाने को जी चाहता है... बस 'yes' पर क्लिक करो",
    "मेरी सुबह तेरे इश्क़ से शुरू होती है... बस 'yes' पर क्लिक करो",
    "तेरी मुस्कान ने बनाया है मुझे मैं... बस 'yes' पर क्लिक करो",
    "तू है वो ख्वाब जो सच हो जाए... बस 'yes' पर क्लिक करो",
    "तेरे प्यार में जीना मेरा इम्तहान है... बस 'yes' पर क्लिक करो",
    "तेरी हर बात में मेरे इश्क़ का अंश है... बस 'yes' पर क्लिक करो",
    "तुमसे मिलने की खुशी कुछ और है... बस 'yes' पर क्लिक करो",
    "तेरी याद में हर पल खो जाता हूँ... बस 'yes' पर क्लिक करो",
    "तू है वो सुकून जो हर दर्द भूलाए... बस 'yes' पर क्लिक करो",
    "तेरे साथ होने से हर सुबह हसीन है... बस 'yes' पर क्लिक करो",
    "मेरी ज़िन्दगी में तेरी अहमियत अपार है... बस 'yes' पर क्लिक करो",
    "तेरे बिना हर खुशी अधूरी सी लगती है... बस 'yes' पर क्लिक करो",
    "तू है वो ख्वाब जो हर रात सजता है... बस 'yes' पर क्लिक करो",
    "तेरी हंसी से सजती है मेरी दुनिया... बस 'yes' पर क्लिक करो",
    "तू है वो रूहानी अहसास जो दिल को छू जाता है... बस 'yes' पर क्लिक करो",
    "तेरी बातों में है मेरे प्यार की खुशबू... बस 'yes' पर क्लिक करो",
    "तू है वो पल, जो हमेशा याद रहेगा... बस 'yes' पर क्लिक करो",
    "तेरे इश्क़ में मेरा हर दिन गुलाब है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत में मिलती है मुझे जिंदगी की राह... बस 'yes' पर क्लिक करो",
    "तू है वो फरिश्ता जिसने मेरी दुनिया बदली... बस 'yes' पर क्लिक करो",
    "तेरी मुस्कान से महकती है मेरी सुबह... बस 'yes' पर क्लिक करो",
    "तू है वो सपना जो हकीकत में बदल गया... बस 'yes' पर क्लिक करो",
    "तेरे बिना मेरी रातें भी उजाड़ हैं... बस 'yes' पर क्लिक करो",
    "तू है वो नूर जो अंधेरों में भी रौशन है... बस 'yes' पर क्लिक करो",
    "तेरी याद में बसी है मेरी हर खुशी... बस 'yes' पर क्लिक करो",
    "तू है वो आसमां जिसमें मेरे सपने हैं... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत में सिमटी हैं मेरी सारी उम्मीदें... बस 'yes' पर क्लिक करो",
    "तू है वो आवाज़ जो दिल को छू जाती है... बस 'yes' पर क्लिक करो",
    "तेरे प्यार में हर दर्द भूल जाता हूँ... बस 'yes' पर क्लिक करो",
    "तू है वो खुशी जो हर ग़म को भुला देती है... बस 'yes' पर क्लिक करो",
    "तेरी आँखों में दिखता है मेरा अक्स... बस 'yes' पर क्लिक करो",
    "तू है वो सुकून जो मेरे दिल को शांति देता है... बस 'yes' पर क्लिक करो",
    "तेरे प्यार की खुशबू से महकती है मेरी दुनिया... बस 'yes' पर क्लिक करो",
    "तू है वो रहनुमा जो दिखाए सही राह... बस 'yes' पर क्लिक करो",
    "तेरे इश्क़ में मेरी हर ख्वाहिश पूरी होती है... बस 'yes' पर क्लिक करो",
    "तू है वो उजाला जो हर अंधेरे को मिटा देता है... बस 'yes' पर क्लिक करो",
    "तेरी हंसी में है मेरे प्यार का सुरूर... बस 'yes' पर क्लिक करो",
    "तू है वो एहसास जो हर दर्द को भुला देता है... बस 'yes' पर क्लिक करो",
    "तेरे साथ बिताया हर लम्हा अनमोल है... बस 'yes' पर क्लिक करो",
    "तू है वो हवा जो मेरे दिल को बहलाती है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत में है मेरा हर सपना पूरा... बस 'yes' पर क्लिक करो",
    "तू है वो रौशनी जो अंधेरों में भी चमकती है... बस 'yes' पर क्लिक करो",
    "तेरी यादों में है मेरी हर खुशी छुपी... बस 'yes' पर क्लिक करो",
    "तू है वो खुशबू जो मेरी ज़िन्दगी को महकाती है... बस 'yes' पर क्लिक करो",
    "तेरे प्यार में है मेरी हर सुबह नई... बस 'yes' पर क्लिक करो",
    "तू है वो साथी जो हर सफर में साथ है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत से सजती है मेरी ज़िन्दगी... बस 'yes' पर क्लिक करो",
    "तू है वो एहसास जो हर पल रंग भर देता है... बस 'yes' पर क्लिक करो",
    "तेरे इश्क़ में है मेरी हर खुशी की वजह... बस 'yes' पर क्लिक करो",
    "तू है वो साया जो मेरे हर ग़म में साथ है... बस 'yes' पर क्लिक करो",
    "तेरी हंसी से महकता है मेरा दिल... बस 'yes' पर क्लिक करो",
    "तू है वो ख्वाब जो मेरी नींद में आता है... बस 'yes' पर क्लिक करो",
    "तेरी मोहब्बत में है मेरी ज़िन्दगी की राह... बस 'yes' पर क्लिक करो",
    "तू है वो दुआ जो मेरे हर अरमान को पूरा करती है... बस 'yes' पर क्लिक करो",
    "तेरे प्यार में है मेरी हर खुशी की चमक... बस 'yes' पर क्लिक करो",
    "तू है वो सितारा जो मेरी रातों में रोशन है... बस 'yes' पर क्लिक करो"
];


let thoughtInterval;
let hasClickedYes = false;
let animationInterval;
let isHoveringYes = false;
let selectedThoughts = thoughts; // Default to English thoughts

function randomNum() {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    return { a, b, c };
}

function createFloatingElement(emoji) {
    const element = document.createElement('div');
    element.innerHTML = emoji;
    element.style.position = 'absolute';
    element.style.fontSize = Math.random() * 20 + 20 + 'px';
    element.style.left = Math.random() * main.offsetWidth + 'px';
    element.style.top = main.offsetHeight + 'px';
    element.style.transition = 'all 3s ease-in-out';
    element.style.pointerEvents = 'none';
    body.appendChild(element);

    setTimeout(() => {
        element.style.top = '0px';
        element.style.transform = `translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
    }, 100);

    setTimeout(() => element.remove(), 3000);
}

function startRandomAnimations() {
    const emojis = ['❤️', '🌸', '✨', '💕', '🌹', '💝', '🌺'];
    return setInterval(() => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        createFloatingElement(randomEmoji);
    }, 300);
}

function displayRandomThought() {
    if (!hasClickedYes && !isHoveringYes) {
        const randomThought = selectedThoughts[Math.floor(Math.random() * selectedThoughts.length)];
        h1.innerHTML = randomThought;
    }
}

function createHeartBurst() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = '20px';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.animation = `heartBurst 2s ease-out`;
            heart.style.animationFillMode = 'forwards';
            heart.style.pointerEvents = 'none';
            body.appendChild(heart);

            const angle = (i / 15) * 2 * Math.PI;
            const distance = 150;
            const keyframes = [
                { transform: 'translate(-50%, -50%) scale(1)' },
                { 
                    transform: `translate(
                        calc(-50% + ${Math.cos(angle) * distance}px), 
                        calc(-50% + ${Math.sin(angle) * distance}px)
                    ) scale(2)`,
                    opacity: 0
                }
            ];
            
            heart.animate(keyframes, {
                duration: 2000,
                easing: 'ease-out',
                fill: 'forwards'
            });

            setTimeout(() => heart.remove(), 2000);
        }, i * 100);
    }
}

function createMiniHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '15px';
    heart.style.left = yes.offsetLeft + Math.random() * yes.offsetWidth + 'px';
    heart.style.top = yes.offsetTop + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.8';
    heart.style.animation = 'floatHeart 1.5s ease-out';
    body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
}

function startYesButtonHearts() {
    return setInterval(createMiniHeart, 500);
}

// Language button click handlers
englishBtn.addEventListener('click', () => {
    selectedThoughts = thoughts;
    displayRandomThought();
    englishBtn.style.backgroundColor = '#4CAF50';
    hindiBtn.style.backgroundColor = '#ffffff';
});

hindiBtn.addEventListener('click', () => {
    selectedThoughts = hindiThoughts;
    displayRandomThought();
    hindiBtn.style.backgroundColor = '#4CAF50';
    englishBtn.style.backgroundColor = '#ffffff';
});

// Start random thoughts interval immediately
displayRandomThought();
thoughtInterval = setInterval(displayRandomThought, 8000);
animationInterval = startRandomAnimations();
const yesHeartInterval = startYesButtonHearts();

no.addEventListener("mouseover", () => {
    displayRandomThought();
    const mainRect = main.getBoundingClientRect();
    const noRect = no.getBoundingClientRect();
    
    const maxX = mainRect.width - noRect.width;
    const maxY = mainRect.height - noRect.height;
    
    const randomX = Math.ceil(Math.random() * maxX);
    const randomY = Math.ceil(Math.random() * maxY);
    
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
    
    let color = randomNum();
    no.style.boxShadow = `0 0 55px 20px rgb(${color.a}, ${color.b}, ${color.c})`;
    displayRandomThought();
});

 function nc(){
        no.addEventListener("mouseover", () => {
        displayRandomThought();
        const mainRect = main.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();
        
        const maxX = mainRect.width - noRect.width;
        const maxY = mainRect.height - noRect.height;
        
        const randomX = Math.ceil(Math.random() * maxX);
        const randomY = Math.ceil(Math.random() * maxY);
        
        no.style.left = randomX + "px";
        no.style.top = randomY + "px";
        
        let color = randomNum();
        no.style.boxShadow = `0 0 55px 20px rgb(${color.a}, ${color.b}, ${color.c})`;
        displayRandomThought();
    });
}

no.addEventListener("click", () => {
    const updatePosition = () => {
        const mainRect = main.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();
        
        const maxX = mainRect.width - noRect.width;
        const maxY = mainRect.height - noRect.height;
        
        const randomX = Math.ceil(Math.random() * maxX);
        const randomY = Math.ceil(Math.random() * maxY);
        
        no.style.left = randomX + "px";
        no.style.top = randomY + "px";
        
        let color = randomNum();
        no.style.boxShadow = `0 0 55px 20px rgb(${color.a}, ${color.b}, ${color.c})`;
        displayRandomThought();
    };

    updatePosition();
    const interval = setInterval(updatePosition, 100);
    setTimeout(() => clearInterval(interval), 2000);
});

yes.addEventListener('click', () => {
    clearInterval(thoughtInterval);
    clearInterval(yesHeartInterval);
    h1.innerHTML = "I love you too! ❤️";
    createHeartBurst();
    yes.style.transform = 'scale(1.2)';
    yes.style.transition = 'transform 0.5s ease';
    nc();
});

yes.addEventListener('mouseover', () => {
    isHoveringYes = true;
    h1.innerHTML = "Yes, say you love me! 🥰 ...just click on yes";
});

yes.addEventListener('mouseout', () => {
    isHoveringYes = false;
    if (!hasClickedYes) {
        displayRandomThought();
    }
});

body.addEventListener('click', () => {
    if (!hasClickedYes) {
        h1.innerHTML = "Do you love me? 🥺 ...just click on yes";
    }
});

if (language === 'hindi') {
    selectedThoughts = hindiThoughts;
    hindiBtn.style.backgroundColor = '#4CAF50';
} else {
    selectedThoughts = thoughts;
    englishBtn.style.backgroundColor = '#4CAF50';
}

// Then ask for name

// Ask for the user's name until a valid name is entered
