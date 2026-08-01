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

        message.innerHTML = "Oops... that's not our special date 😘";

        input.style.animation = "shake .4s";

        setTimeout(() => {

            input.style.animation = "";

        }, 400);

    }

}

const text = `

I don't know how many people make websites
for someone they care about...

But I knew I wanted to create something
that would always make you smile.

Every page you are about to see
contains a little piece of my heart.

Some memories.

Some dreams.

Some silly moments.

Some things I probably don't say often enough.

So...

Take your time.

Enjoy every page.

And remember...

You are more special to me than words can ever describe.

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