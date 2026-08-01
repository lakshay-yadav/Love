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
Aur meri jaan, meri biharan kaisi hai?
Achha ye bta paani peeya ki nhi, Jaa pee ke aa abhi phir aage padhna.

Achha sun, Cute to hai tu yr and pagal bhi hai.
Are ye to love letter hai na to love ki baate krta hu...

Jabse mili na tu tabse life badal gyi hai,
Aisa lgta hai jaise koi jaadu sa hogya hai, vo 'koi mil gya' wala jaadu nhi magic wala jaadu, I know bad joke tha.

Par tere saath hota hu to time ka pata hi nhi chalta, Jab tere saath nhi hota to tere baare me sochta hu.
Tere saath har moment aisa lgta hai jaise life is beautiful.

Yaad hai kitne nakhre kiye tune milne ke liye, baat krne ke liye but at the end its all worth it. Wo bhi ek part tha hamari story ka and i think that makes our story more beautiful.

Mujhe aisa feel hota hai ki m thoda less expressive hu but m tere liye bhot jyada feel krta hu. Aur teri hasi to kamaal hai, fan hai teri hasi ka. 

Man krta hai ki tujhe saamne baitha ke bas dekhta hu(Kiss bhi kr skta hu). 
Jab ham log first time mile the aisa lga hi nhi ki ham log first time mil rhe hai, lga pta nhi kitne saalo se jaanta hu. 

And every moment was so pure and magical, hamare first hand hold se leke hug and kiss tak. Meri heartbeat to yaad hi hogi tujhe kaise fast fast bhaag rhi thi. 

Vo moment jab tune mere shoulder pe sar rakhna, m to pagal hogya tha and yakeen nhi ho rha tha ki ye kya ho rha hai.
Fir hamari kiss, wow yr kitna shi hai. 

If i look back and think about everything then it feels like ki universe ne vo sab hamare liye plan kiya tha.

Uske baad ke moments jab ham log ghar gye an time spend kiya. Yr scene tha yr, kitna amazing. Bas tujhe dekhte rehna, teri eyes ko, tere chahre ko. 

Kuchh to magic kiya hai tune mujhpe.


Bas khatam hogya, And sun I LOVE YOU.

And remember...

You are more special to me than words can ever describe and i am always here for you, jab bhi tujhe meri yaad aaye, ya teri man nhi lg rha ho, ya tu pareshan ho ya koi bhi reason ho, main hu yha pe tere paas.

I just want ki tu mere saath sab kuchh share kre, mujhe apna bana le. Pyar kre mujhe.

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
