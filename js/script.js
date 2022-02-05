function realtime() {

    setInterval(() => {
        const d = new Date();
        let text = d.toLocaleTimeString("fr");
        let hour = d.toLocaleTimeString().substring(0, 2);
        let minute = d.toLocaleTimeString().substring(3, 5);
        let second = d.toLocaleTimeString().substring(6, 8);
        document.getElementById("time").innerHTML = ` ${hour} : ${minute} : ${second} `;
        if (d.getSeconds() % 3 == 0) {
            document.getElementById("time").innerHTML = `<span style="color:red; font-family:bold"> ${hour} </span>: ${minute} : ${second} `;
        } else {
            document.getElementById("time").style.color = "black";
        }
    }, 1)
}



realtime();