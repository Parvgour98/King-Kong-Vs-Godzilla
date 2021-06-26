score = 0;
cross = true;

audio = new Audio('music.mp3');
game_over_audio = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);


document.onkeydown = function(e)
{
    if(e.keyCode==38)
    {
        dino = document.querySelector('.kong');
        dino.classList.add('jumpDino');
        setTimeout(()=>{
            dino.classList.remove('jumpDino');
        },700);

    }
    if(e.keyCode==39)
    {
        dino =  document.querySelector('.kong');
        dinoX = parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + 'px';

    }
    if(e.keyCode==37)
    {
        dino =  document.querySelector('.kong');
        dinoX = parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
}

setInterval(()=>{
    kong = document.querySelector('.kong');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    kx = parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
    ky = parseInt(window.getComputedStyle(kong,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(kx-ox);
    offsetY = Math.abs(ky-oy);

    if(offsetX < 75 && offsetY < 52)
    {
        gameOver.innerHTML = "Game Over - Press F5 to play again...";
        obstacle.classList.remove('obstacleAnimation');
        game_over_audio.play
        setTimeout(() => {
            game_over_audio.pause();
            audio.pause();
        }, 1000);
    }
    else if(cross && offsetX < 145){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);

        animation_dur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        new_ani_dur = animation_dur-0.1;
        obstacle.style.animationDuration = new_ani_dur + 's';
    }




},10);

function updateScore(score)
{
    scoreCount.innerHTML = "Your Score: " + score;
}