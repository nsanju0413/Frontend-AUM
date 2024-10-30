// // const span=document.querySelector("span");

// // const bElem=span.firstChild;
// // const bElem=span.firstChild

// const h2=document.querySelector("h2");

// h2.classList.add("blue");

// h2.classList.replace("blue","red");

// h2.classList.remove("red");

const email = document.getElementById("email_addresss");
const firstname = document.getElementById("first_name");
const join = document.getElementById("join_btn_id");
const remove = document.getElementById("remove_btn_id");
const result = document.getElementById("result_id");

join.addEventListener("click", () => {
    const emailValue = email.value;
    const firstnameValue = firstname.value;

    result.value += `Email: ${emailValue}, First Name: ${firstnameValue}\n`;
});
