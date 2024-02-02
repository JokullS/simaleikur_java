window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1400;
    canvas.height = 720;
    let gameOver = false;
    const fullScreenButton = document.getElementById('fullScreenButton');
})

function togglefullScreen(){
    console.log(document.fullscreenElement);
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        /**canvas.requestFullScreen().catch(err => {
            alert('Error, get ekki stilt á full-screen: ${err.message}'**/
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
    }

}
fullScreenButton.addEventListener('click', togglefullScreen);

screen.orientation.addEventListener("change", (event) => {
    const type = event.target.type;
    const angle = event.target.angle;
    console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
  });
