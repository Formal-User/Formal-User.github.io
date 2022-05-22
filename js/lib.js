function fadeIn(target,duration){
    let level = 0;
    let inTimer;
    inTimer = setInterval( function () {
        level = fadeInAction(target,level,inTimer);
    },100*duration);
}

function fadeInAction(target,level,inTimer){
    level += 0.1;
    changeOpacity(target,level);
    if(level > 1) clearInterval(inTimer);
    return level;
}

function fadeOut(target,duration){
    let level = 1;
    let outTimer;
    outTimer = setInterval( function () {
        level = fadeOutAction(target,level,outTimer);
    },100*duration);
}

function fadeOutAction(target,level,outTimer){
    level -= 0.1;
    changeOpacity(target,level);
    if(level < 0) clearInterval(outTimer);
    return level;
}

function changeOpacity(target,level){
    target.style.opacity = level;
    target.style.Mozopacity = level;
    target.style.khtmlopacity = level;
    target.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level*100) + ")'";
    target.style.filter = "alpha(opacity=" + (level *100) + ");";
}