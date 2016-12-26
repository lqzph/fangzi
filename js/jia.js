window.onload=function () {
    var centerx=document.documentElement.clientWidth;
    var centery=document.documentElement.clientHeight;
    var firstpanel=document.querySelector(".panel:first-child");
    var clie=document.getElementsByClassName("panel")[4]
    var last=document.getElementsByClassName("panel")[5];
    var one=document.getElementsByClassName("panel")[2];

    last.style.transform="translate3d(0,0,"+(centerx)+"px)";
    firstpanel.style.width=firstpanel.style.height=clie.style.width=clie.style.height=centerx+"px";
    clie.style.top=-(centerx-centery)+"px";
   // 执行
    var room=document.querySelector(".room");
    room.style.transformOrigin="center center "+centerx/2+"px";
    var flag2=true;
    one.onclick=function () {
        if(flag2){
            room.style.transition="transform 3s ease";
            room.style.transform="translate3d(0,0,-500px) rotateY(180deg)"
            flag2=false;
        }

    }
    var angle=0,angle1=0;
    var flag1=true;
    document.onmousedown=function (e) {
        flag1=false;
        var cx=e.clientX;
        var cy=e.clientY;
        document.onmousemove=function (e) {
            flag1=true;
            room.style.transition="none";
            var movex=e.clientX;
            var movey=e.clientY;
            angle=Math.abs(movex-cx)>Math.abs(movey-cy)?(movex-cx):(movey-cy);
            room.style.transform="translateZ(-500px) rotate3d(0,1,0,"+(angle+angle1)+"deg)"
            e.preventDefault();

        }
        document.onmouseup=function () {
            if(flag1){
                angle1+=angle;
                flag1=true;
            }
            document.onmousemove=null;
            document.onmouseup=null;

        }
        e.preventDefault();
    }
    var panel=document.getElementsByClassName("panel");
    var flag=true;
    for(var i=0;i<panel.length;i++){
        panel[i].ondblclick=function(){
            room.style.transition="transform 2s ease";
            if(flag){
                room.style.transform="translateZ(-100px) rotate3d(0,1,0,"+(angle1)+"deg)";
                flag=false;
            }else{
                room.style.transform="translateZ("+(-centerx/2)+"px) rotate3d(0,1,0,"+(angle1)+"deg)";
                flag=true;
            }
        }

    }

    


}