 let container=document.querySelector(".container")
    let btns=document.querySelectorAll(".btn")
    let imgList=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
    let intex=0;
    btns.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(button.classList.contains('left')){
                intex--;
                if(intex<0){
                    intex=imgList.length-1;
                }
            }
            else{
                 intex++;
                if(intex===imgList.length){
                    intex=0;
                }
            }
            container.style.backgroundImage=`url(${imgList[intex]})`

        })
    })