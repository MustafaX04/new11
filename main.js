function el(id) { // element seç
    return document.querySelector("#"+id);
}

function onScreen(name, email, msg) { // data yaz
    var getName = el("getName");
    var getEmail = el("getEmail");
    var getmsg = el("getMsg");

    getName.innerText = name;
    getEmail.innerText = email;
    getmsg.innerText = msg;
}

function getData() { // data al
    var uname = el("name").value;
    var uemail = el("email").value;
    var umsg = el("message").value;

    var obj = {
        name : uname,
        email : uemail,
        msg : umsg
    }

    return obj;
}


var sender = el("sender");
sender.onclick = ()=>{
    var obj = getData();
    onScreen(obj.name, obj.email, obj.msg);
}


