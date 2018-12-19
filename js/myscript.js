/*============================================================================
                                    Menu Icon
  ============================================================================*/

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

/*============================================================================
                                    WEBSITE
  ============================================================================*/

const students_btn = document.querySelector(".students");
const teachers_btn = document.querySelector(".teachers");
const groups_btn = document.querySelector(".groups");
const mail = document.querySelector(".mail");
const chat = document.querySelector(".chat");
const back = document.querySelector(".menuIcon_back");

const messages_students_btn = document.querySelector(".messages_students_btn");
const messages_teachers_btn = document.querySelector(".messages_teachers_btn");
const messages_groups_btn = document.querySelector(".messages_groups_btn");
const all_students_btn = document.querySelector(".all_students_btn");
const all_teachers_btn = document.querySelector(".all_teachers_btn");
const create_group_btn = document.querySelector(".create_group_btn");
const messstudents = document.querySelector(".messages_students");
const allteachers = document.querySelector(".all_teachers");
const messteachers = document.querySelector(".messages_teachers");
const allstudents = document.querySelector(".all_students");
const messgroups = document.querySelector(".messages_groups");
const close_btn = document.querySelector(".close");
const close_group_btn = document.querySelector(".close_group");

messages_students_btn.addEventListener("click", messages_students);
messages_teachers_btn.addEventListener("click", messages_teachers);
messages_groups_btn .addEventListener("click", messages_groups);
all_students_btn.addEventListener("click", all_students);
all_teachers_btn.addEventListener("click", all_teachers);
create_group_btn.addEventListener("click", create_group);

close_btn.addEventListener("click", close_new);
close_group_btn.addEventListener("click", close_group);

allteachers.addEventListener("click", show_new);
allstudents.addEventListener("click", show_new);
messteachers.addEventListener("click", show_new);
messstudents.addEventListener("click", show_new);
messgroups.addEventListener("click", show_group_chat);

students_btn.addEventListener("click", show_students);
teachers_btn.addEventListener("click", show_teachers);
groups_btn.addEventListener("click", show_groups);
mail.addEventListener("click", show_mail);
chat.addEventListener("click", show_chat);
back.addEventListener("click", both_off);

var active_chat, active_mail;
active_chat = 0;
active_mail = 0;

function show_chat() {
    if (active_chat === 0) {
        chat_active();
    } else {
        both_off();
    }

}

function show_mail() {
    if (active_mail === 0) {
        mail_active();
    } else {
        both_off();
    }

}

function mail_active() {
    document.querySelector('.mail_box').style.display = "grid";
    document.querySelector('.mail').style.background = "white";
    document.getElementById('mail').src = 'images/mail-r.png';

    document.querySelector('.chat_box').style.display = "none";
    document.querySelector('.chat').style.background = "#ea5045";
    document.getElementById('chat').src = 'images/chat.png';
    active_chat = 0;

    document.querySelector('.logo_mobile').style.display = "none";
    document.querySelector('.menuIcon').style.display = "none";
    document.querySelector('.menuIcon_back').style.display = "block";
    document.querySelector('.search_top').style.display = "grid";

    document.querySelector('.mainpage').style.display = "none";


    active_mail = 1;
}

function chat_active() {
    document.querySelector('.chat_box').style.display = "grid";
    document.querySelector('.chat').style.background = "white";
    document.getElementById('chat').src = 'images/chat-r.png';

    document.querySelector('.mail_box').style.display = "none";
    document.querySelector('.mail').style.background = "#ea5045";
    document.getElementById('mail').src = 'images/mail.png';
    active_mail = 0;

    document.querySelector('.logo_mobile').style.display = "none";
    document.querySelector('.menuIcon').style.display = "none";
    document.querySelector('.menuIcon_back').style.display = "block";
    document.querySelector('.search_top').style.display = "grid";

    document.querySelector('.mainpage').style.display = "none";

    active_chat = 1;
}

function both_off() {
    document.getElementById('chat').src = 'images/chat.png';
    document.querySelector('.chat_box').style.display = "none";
    document.querySelector('.chat').style.background = "#ea5045";
    active_chat = 0;

    document.getElementById('mail').src = 'images/mail.png';
    document.querySelector('.mail_box').style.display = "none";
    document.querySelector('.mail').style.background = "#ea5045";
    active_mail = 0;

    document.querySelector('.logo_mobile').style.display = "block";
    document.querySelector('.menuIcon').style.display = "block";
    document.querySelector('.menuIcon_back').style.display = "none";
    document.querySelector('.search_top').style.display = "none";

    document.querySelector('.mainpage').style.display = "block";
}



function show_students() {
    document.querySelector('.students_messages').style.display = "block";
    document.querySelector('.teachers_messages').style.display = "none";
    document.querySelector('.groups_messages').style.display = "none";

    document.querySelector('.teachers').style.filter = "opacity(40%)";
    document.querySelector('.groups').style.filter = "opacity(40%)";
    document.querySelector('.students').style.filter = "opacity(100%)";

    document.querySelector('.messages_students').style.display = "block";
    document.querySelector('.all_students').style.display = "none";
}

function show_teachers() {
    document.querySelector('.students_messages').style.display = "none";
    document.querySelector('.teachers_messages').style.display = "block";
    document.querySelector('.groups_messages').style.display = "none";

    document.querySelector('.students').style.filter = "opacity(40%)";
    document.querySelector('.groups').style.filter = "opacity(40%)";
    document.querySelector('.teachers').style.filter = "opacity(100%)";
}

function show_groups() {
    document.querySelector('.students_messages').style.display = "none";
    document.querySelector('.teachers_messages').style.display = "none";
    document.querySelector('.groups_messages').style.display = "block";

    document.querySelector('.students').style.filter = "opacity(40%)";
    document.querySelector('.teachers').style.filter = "opacity(40%)";
    document.querySelector('.groups').style.filter = "opacity(100%)";
}

function messages_students() {
    document.querySelector('.messages_students_btn').style.background = "white";
    document.querySelector('.all_students_btn').style.background = "rgb(238, 238, 238)";

    document.querySelector('.messages_students').style.display = "block";
    document.querySelector('.all_students').style.display = "none";

}

function all_students() {
    document.querySelector('.messages_students_btn').style.background = "rgb(238, 238, 238)";
    document.querySelector('.all_students_btn').style.background = "white";

    document.querySelector('.messages_students').style.display = "none";
    document.querySelector('.all_students').style.display = "block";
}

function messages_teachers() {
    document.querySelector('.messages_teachers_btn').style.background = "white";
    document.querySelector('.all_teachers_btn').style.background = "rgb(238, 238, 238)";

    document.querySelector('.messages_teachers').style.display = "block";
    document.querySelector('.all_teachers').style.display = "none";
}

function all_teachers() {
    document.querySelector('.messages_teachers_btn').style.background = "rgb(238, 238, 238)";
    document.querySelector('.all_teachers_btn').style.background = "white";

    document.querySelector('.messages_teachers').style.display = "none";
    document.querySelector('.all_teachers').style.display = "block";
}

function messages_groups() {
    document.querySelector('.messages_groups_btn').style.background = "white";
    document.querySelector('.create_group_btn').style.background = "rgb(238, 238, 238)";

    document.querySelector('.create_group').style.display = "none";
    document.querySelector('.messages_groups').style.display = "block";
}

function create_group() {
    document.querySelector('.messages_groups_btn').style.background = "rgb(238, 238, 238)";
    document.querySelector('.create_group_btn').style.background = "white";

    document.querySelector('.create_group').style.display = "grid";
    document.querySelector('.messages_groups').style.display = "none";
    show_groups();
}

function show_new() {
    document.querySelector('.new').style.display = "block";
    document.querySelector('.chat_box').style.display = "none";
}

function show_group_chat() {
    document.querySelector('.group_chat').style.display = "block";
    document.querySelector('.chat_box').style.display = "none";
}

function close_new() {
    document.querySelector('.new').style.display = "none";
    document.querySelector('.chat_box').style.display = "block";
}

function close_group() {
    document.querySelector('.group_chat').style.display = "none";
    document.querySelector('.chat_box').style.display = "block";
}







/*
function changebackground() {
    document.querySelector('.container').style.backgroundImage = "url('school.jpg')";
    document.getElementById('ricoID').src='2.png';
    setTimeout(gunter,1000);
}

function gunter(){
    document.querySelector('.gunter').style.animation = "slideInRightFirst 3s";
    document.querySelector('.gunter').style.display = "block";
    setTimeout(changegunter,3500);
}

function changegunter(){
    document.querySelector('.badguy-img').src='2..png';
    document.querySelector('.school').style.backgroundImage = "url('school1.jpg')";
    setTimeout(changerico,1000);
}

function changerico() {
    document.getElementById('ricoID').src='3.png';
    setTimeout(changerico2,2000);
}

function changerico2() {
    document.getElementById('ricoID').src='4.png';
    setTimeout(show_try_btn,1000);
}

function show_try_btn(){
    try_btn.style.display = "block";
    leave_btn.style.display = "block";
}

function trytake() {
    document.getElementById('ricoID').src='5.png';
    try_btn.style.display = "none";
    leave_btn.style.display = "none";
}

function leave() {
    document.getElementById('ricoID').classList.add('animation-slideRight');
    try_btn.style.display = "none";
    leave_btn.style.display = "none";
    setTimeout(show_gym,1000);
    document.querySelector('.gunter').style.display = "none";
}

function show_gym() {
    document.getElementById('gym').classList.add('gym-slideLeft');
    document.getElementById('school').classList.add('gym-slideLeft');
    document.querySelector('.rico_gym').style.animation = "slideInLeftFirst 3s";
}

function jump() {
document.querySelector('.rico_gym').style.animation = "bounce 1s infinite alternate";
}
*/