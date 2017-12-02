var root = document.getElementById("score");

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
        var matches = JSON.parse(this.responseText);
        matches = matches.matches;
        for (var i = 0; i < Math.min(matches.length, 5); ++i) {
            var data1 = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    var json = JSON.parse(this.responseText);
                    var score = document.createElement("h4");
                    var time = document.createElement("h6");
                    score.appendChild(document.createTextNode(json.score));
                    var dateTime = new Date(json.provider.pubDate);
                    time.appendChild(document.createTextNode(dateTime.toISOString()));

                    var div = document.createElement("div");
                    div.className = "container";
                    div.appendChild(score);
                    div.appendChild(time);
                    div.appendChild(document.createElement("hr"));
                    document.getElementById("score").appendChild(div);
                }
            });

            xhr.open("GET", "http://cricapi.com/api/cricketScore?apikey=6DbHmrUyUMP2j8CjrraOKgbVFMb2&unique_id=" + matches[i].unique_id);
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("postman-token", "9b90a5bc-fab3-23eb-0ed7-915e73c0f6cd");

            xhr.send(data1);
        }
    }
});

xhr.open("GET", "http://cricapi.com/api/matches?apikey=6DbHmrUyUMP2j8CjrraOKgbVFMb2");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "1428923d-7656-774e-ccb7-f042b08a058f");

xhr.send(data);