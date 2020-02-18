const videoContainer = document.getElementById('video-container');


function request() {
    var key = document.getElementById('key-input').value; //AIzaSyAnr5MWnFK9UvBfU-McUbvE9hgG0hx7v_w
    var channelId = document.getElementById('channelId-input').value; //UCX0HdX_itqWkhvbK839lQkQ

    var httpsRequest = new XMLHttpRequest();
    httpsRequest.open(
        'GET',
        `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&&order=date`
    );
    httpsRequest.onreadystatechange = () => {
        if (httpsRequest.readyState === 4 && httpsRequest.status === 200) {
            var response = JSON.parse(httpsRequest.responseText);
            var iframe = '';
            response.items.forEach(element => {
                iframe +=
                    `<iframe src ="https://www.youtube.com/embed/${element.id.videoId}" width="300" height="200" frameBorder="0" allowfullscreen style='margin:0.75rem 0.75rem'></iframe>`;
            });
            videoContainer.innerHTML = iframe;
        }
    };
    httpsRequest.send();
    return false;
}