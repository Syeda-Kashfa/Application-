let input = document.getElementById("input");
let btn = document.getElementById("send");
let chat = document.getElementById("chat");


function chatBot() {
    //chat.innerText=input.value

    let userMsg = input.value.trim();
    if (userMsg == "") return;

    chat.innerHTML += `<p class="cht">You:${userMsg}</p>`;
    chat.className = "cht"

    let typing = document.createElement("div");
    typing.id = "typing";
    typing.innerHTML = `<span><img src="Images/Logo.png"></span><i>......</i>`;
    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;
    input.value = "";

    let reply = "";
    let reply1 = "";


    if (userMsg == "hi" || userMsg == "hello" || userMsg == "hy" || userMsg == "hii" || userMsg == "listen") {
        reply = "hello! How are you";
        reply1 = "How can i help you? Sir/Ma'am"


    }
    else if (userMsg == "Assalam o alaikum" || userMsg == "assalam o alaikum" || userMsg == "salam" || userMsg == "salam o alikum") {
        reply = `Walaikum Assalam how are you`
        reply1 = "How can i help you Sir/Ma'am"


    }

    else if (userMsg == "admission lena hai" || userMsg == "admission" || userMsg == "admission chahiye" || userMsg == "mujhe admission lena hai" || userMsg == "i want to apply admission" || userMsg == "apply admission" || userMsg == "i want admission") {
        reply = `Great!Which program/course are you interested in?`
        reply1 = `1-Web and App Application<br>
    2-Web Designing<br>
    3-Graphic Designing<br>
    4-Digital Marketing`
    }
    else if (userMsg == "web and app" || userMsg == "web and app application" || userMsg == "web designing" || userMsg == "graphic" || userMsg == "graphic designing" || userMsg == "marketing" || userMsg == "digital marketing") {
        reply = `Nice! I hope you enjoy it.`;
        reply1 = `Course Details:<br>
        1-You must be 15 above<br>
        2-You must have Matric Certificate<br>
        3-Please visit our website for enrolled our courses <br>
        4-Link:https://forms.saylanimit.com/ `
    }
    else if (userMsg == "last date" || userMsg == "last date kiya hai" || userMsg == "last date kya hai" || userMsg == "deadline" || userMsg == "kb tk date h" || userMsg == "what is the deadline") {
        reply = `You have until 20th November to submit`
        reply1 = `Kindly submit it before this.`
    }
    else if (userMsg == "fee structure" || userMsg == "fee process" || userMsg == "fee kiya h") {
        reply = `You don’t have to pay any fee except a monthly maintenance of 1000 rupees`
        reply1 = `You have any question Sir/Ma'am`

    }
    else if (userMsg == "course duration" || userMsg == "what is duration" || userMsg == "course moths") {
        reply = `Sure!The course duration is 6 months`
        reply1 = `You have any question Sir/Ma'am`
    }
    else if (userMsg == "timing" || userMsg == "class timing" || userMsg == "course timing") {
        reply = `The course takes place every Tuesday and Thursday for 3 hours, from 9 AM to 12 PM`
        reply1 = `Do you have any other question regarding the course?`
    }
    else if (userMsg == "ok" || userMsg == "thk hai" || userMsg == "thk" || userMsg == "no") {
        reply = `Thank you for your time! If you have any more questions, feel free to ask`;
        reply1 = `Allah Hafiz! Don’t hesitate to reach out if you need anything.`
    }
    else {
        reply = "Sorry we can't understand"
        reply1 = "Kindly correct the spelling"
    }
    setTimeout(() => {
        typing.remove();

        chat.innerHTML += `<p class="bot"><img src="Images/Logo.png" alt=""> ${reply}</p>`
        chat.scrollTop = chat.scrollHeight;
        setTimeout(() => {
            chat.innerHTML += `<p class="bot"><img src="Images/Logo.png" alt=""> ${reply1}</p>`

            reply.className += "bot"

            chat.scrollTop = chat.scrollHeight;
        }, 1200)


    }, 2000)

}

btn.addEventListener("click", chatBot);

input.addEventListener("keydown", (e) => {
    console.log(e);

    if (e.key === "Enter") {
        console.log(e);

        chatBot()
    }
})


let displayTime = () => {
    let nowTime = new Date();


    let hour = nowTime.getHours()
    let min = nowTime.getMinutes()
    let sec = nowTime.getSeconds()
    let amPm;
    if (hour >= 12) {
        amPm = "PM";
    }
    else {
        amPm = "AM"
    }
    if (hour == "0") {
        hour = 12
    }
    else if (hour > 12) {
        hour = hour - 12
    }

    let time = document.getElementById("time");
    time.innerHTML = `${hour}:${min}:${sec} ${amPm} `



}
setInterval(displayTime, 1000);

displayTime()

