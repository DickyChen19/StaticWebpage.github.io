function changeSong() {
    const link = document.getElementById("link").value;
    let song = document.getElementById("song");
    const newLink = "https://open.spotify.com/embed/track/" + link.substring(link.indexOf("k/") + 2)
    song.setAttribute("src", newLink);
    document.getElementById("head3").innerHTML = "Your Favorite Song: "
}


