let value
let prevvalue
let myvalue
let firstvalue
let secondvalue

$(".numbtn").on("click", function (e) {
    value = e.target.innerText

    if (value == "C.A") {
        document.querySelector(".screen").innerHTML = ""
        value = ""
    }
    else if (value == "=") {
        document.querySelector(".screen").innerHTML = eval(document.querySelector(".screen").innerHTML)
    }
    else if (value == "+") {
        document.querySelector(".screen").innerHTML += value
    }

    else if (value == "-") {
        document.querySelector(".screen").innerHTML += value
    }
    else {
        value = +e.target.innerText
        document.querySelector(".screen").innerHTML += value
    }
})
let myflag = false
$(".darkmodebtn").on("click", function () {
    if (myflag == false) {
        $(".main-body").css({ "backgroundColor": "var(--darkcolor)" })
        $(".screen").css({ "backgroundColor": "var(--secdarkcolor)" })
        $(".numbtn").css({ "backgroundColor": "var(--tertdarkcolor)" })
        myflag = true
    } else {
        $(".main-body").css({ "backgroundColor": "var(--lightcolor)" })
        $(".screen").css({ "backgroundColor": "var(--seclightcolor)" })
        $(".numbtn").css({ "backgroundColor": "var(--tertlightcolor)" })
        myflag = false
    }
})