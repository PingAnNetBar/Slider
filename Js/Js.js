window.onload = function(){    
    /*封装函数 */
    function ById(id){
        return typeof(id) ? document.getElementById(id):'id';        
    }
    function ByTagName(tagName){
        return typeof(tagName) ? document.getElementsByTagName(tagName):'tagName'
       
    }
    // console.log(ById(container))
    var container = ById('container'),
        list = ById('list'),
        prev = ById('prev'),
        next = ById('next'),
        timer,
        index = 1;
    var buttons = ByTagName('span');
          
    /* 偏移值变换*/
    function mov(value){
    /*var newLeft = parseInt(list.style.left) + value;
        // list.style.left = newLeft + 'px';
    */
        list.style.left = value + 'px';//修改+++++++++

    /* 最左最右判断*/
    /*  if(newLeft<-4000){
            list.style.left = 0 + 'px';
        }
        if(newLeft>0){
            list.style.left = -4000 + 'px';
        } 
    */
    }

    /* 左右箭头功能*/
    prev.onclick = function(){
        index -= 1;
        if(index<1){
            index = 5;
        }
        mov((index-1)*(-1000));
        buttonsShow();
    }
    next.onclick = function(){
        index+=1;
        if(index>5){
            index = 1;
        }
        mov((index-1)*(-1000));
        buttonsShow();
    }

    /* 自动轮播功能*/    
    function play(){
        timer = setInterval(function (){
            next.onclick();      
        },2000);
    }
    play(); 
   
    /* 停止轮播功能*/
    function stop(){
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;

    /* 圆点响应 */   
    function buttonsShow(){
        for( var i=0; i<buttons.length;i++){
            if(buttons[i].className = 'on'){
                buttons[i].className = '';
            }
        }
        buttons[index-1].className = 'on';
    }
    for (var i = 0; i < buttons.length; i++) {
        // 这里使用的是立即执行函数，
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                // var value = 1000 * (index - clickIndex); 
                var value = (clickIndex-1)*(-1000)//修改+++++++++
                mov(value);
                index = clickIndex;
                buttonsShow();
            }
        })(i)
    }
}