function checkPassword() {

    const correctPassword = "26072026"; 

    const input = document.getElementById("password");

    const message = document.getElementById("message");

    if (input.value === correctPassword) {

        message.className = "message success";

        message.innerHTML = "❤️ Welcome, my love...";

        document.querySelector(".password-card").style.boxShadow =
            "0 0 60px rgba(255,92,168,.8)";

        setTimeout(() => {

            window.location.href = "welcome.html";

        }, 2000);

    } else {

        message.className = "message error";

        message.innerHTML = "Are... Ye nhi hai yr, Guess kro ham log kab mile the 😘";

        input.style.animation = "shake .4s";

        setTimeout(() => {

            input.style.animation = "";

        }, 400);

    }

}

const text = `
Aur hamar jaan, hamar biharan kaisan baa? ❤️

Achha ee bata, paani piyalu ki na? Jaa, abhi jaake paani pi ke aa, phir aage padhih.

Achha sun, cute ta baadu hi, aur thoda pagli bhi baadu.
Are ee ta love letter baa na, ta chala love ke baat kari.

Jabse tu hamra life me aailu na, tabse sab kuch badal gail baa.
Aisan lagela jaise koi jaadu ho gail baa. Are uu "Koi Mil Gaya" wala jaadu na, magic wala jaadu. Haan pata baa, joke thoda bakwaas rahal. 😂

Bakir jab tu saath rahalu na, ta time ke pata hi na chale. Aur jab tu saath na rahalu, ta bas tohre baare me sochat raheeni.
Tohre saath bitawal har moment aisan lagela jaise life is beautiful.

Yaad baa na, ketna nakhra kailu milat khatir, baat kare khatir. Bakir end me sab worth it rahal.
Oo sab bhi ta hamar story ke ek part rahal, aur hamke lagela ki uhe sab hamni ke story ke aur beautiful bana delas.

Hamke lagela ki ham thoda less expressive bani, bakir ham tohre khatir bahut jyaada feel kareni.
Aur tohar hasi... uff! Kamaal baa. Ham ta tohar smile ke sabse bada fan bani.

Man karela ki tohke saamne baitha ke bas dekhat rahi.
(Kiss bhi kar sakat bani. 😌)

Jab hamni pahila baar milni, ta ek second khatir bhi na lagal ki pahila baar milat bani.
Aisan lagal jaise na jaane ketna saal se ek dusra ke jaant bani.

Aur every moment so pure and magical rahal...
Hamni ke first hand hold se leke hug aur kiss tak.
Hamaar heartbeat ta yaad hi hoi tohke, kaise fast fast daudat rahal. 😂❤️

Oo moment jab tu hamaar kandha pe apan sir rakhlu...
Ham ta pura pagal ho gail rahni.
Yakeen hi na ho rahl ki ee sab sach me ho rahl baa.

Fir hamni ke kiss...
Wow yaar, ketna pyaara moment rahal.

Kabhi pichhe mud ke sab yaad kareni ta lagela ki universe ee sab pahile se hamni khatir hi plan karke rakhle rahal.

Uske baad jab hamni ghar gaili aur saath me time spend kaili...
Yaar, alag hi scene rahal.
Bas tohke dekhte rahe ke man karat rahal...
Tohar aankh, tohar chehra... sab kuch.

Sach batai...
Kuchh ta magic kailu baadu hamra upar.

Bas, khatam ho gail.

Aur sun...
I LOVE YOU. ❤️

And remember...

You are more special to me than words can ever describe.
Aur ham hamesha tohre saath bani.
Jab bhi tohke hamaar yaad aave...
Chahe man na lagat hokhe...
Chahe tu pareshan hokhu...
Ya koi bhi wajah hokhe...
Ham hamesha yahin bani, tohre paas.

Bas ham etna chahat bani ki tu hamse sab kuchh share kara.
Hamke apna bana le.
Aur dher saara pyar kara.

❤️
`;

const target = document.getElementById("typewriter");

if(target){

let i = 0;

function type(){

    if(i < text.length){

        target.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,35);

    }

}

type();

}
