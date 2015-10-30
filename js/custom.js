var KEY_USER_NAME = "key_usernamxxess";
$(function () {
    jQuery(document).on('click', '#close_button', function () {
        jQuery('.featherlight').click();
    });
});

$(document).ready(function () {

    $('#key_words_input').keypress(function (e) {
        if (e.keyCode == 13) {
            doSearch();
        }
    });
});


console.log("change button");


function doLogin() {
    jQuery('.featherlight').click();
//            var loginUserName = document.getElementById("user_account").value;
    var loginUserName = "Tony";
    console.log("login username:" + loginUserName);
    setCookie(KEY_USER_NAME, loginUserName, 1);
    doUpdateUserName();

}


function doLoginToCheckout() {
    var loginUserName = "Tony";
    setCookie(KEY_USER_NAME, loginUserName, 1);
    location.href = 'checkout1.html';
}


function doCheckOut() {


    if (hasLogin()) {
        location.href = 'checkout1.html';
    } else {
        location.href = 'login.html';
    }

}

function doSearch() {

    var keyWords = document.getElementById("key_words_input").value;
    console.log(keyWords);
    if (keyWords === "fatigue") {
        location.href = 'search_result_by_symptom.html';
    } else {
        location.href = 'search.html';
    }
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function hasLogin() {
    return getCookie(KEY_USER_NAME) !== "";
}

function doUpdateUserName() {
    var cookieName = getCookie(KEY_USER_NAME);
    if (cookieName !== "") {
        console.log("cookie:" + cookieName);
        var content = document.getElementById("login_status").innerHTML.replace("Account", "Hello, " + cookieName);
        document.getElementById("login_status").innerHTML = content;
    } else {
        console.log("User has not login")
    }
}

function doUpdateLogAction() {
    var cookieName = getCookie(KEY_USER_NAME);
    if (cookieName !== "") {

        console.log("doUpdateLogAction User has login")
        document.getElementById("login_action_id").innerHTML = "Sign Out";
    } else {
        console.log("doUpdateLogAction User has not login")
        document.getElementById("login_action_id").innerHTML = "Sign In";
    }
}
