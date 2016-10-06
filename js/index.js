$(function(){
    var index=0;
    var datebase=[
        {name:'演员',src:'mp3/薛之谦 - 演员.mp3',geshou:'薛之谦',shichang:'04.21',pinyin:'xuezhiqian',tupian:'img/x.png'},
        {name:'女人如烟',src:'mp3/魏佳艺 - 女人如烟.mp3',geshou:'魏佳艺',shichang:'04.31',pinyin:'weijiayi',tupian:'img/w.png'},
        {name:'骚年',src:'mp3/蒋蒋 - 骚年.mp3',geshou:'蒋蒋',shichang:'03.47',pinyin:'jiangjiang',tupian:'img/j.png'},
        {name:'女人如烟',src:'mp3/魏佳艺 - 女人如烟.mp3',geshou:'魏佳艺',shichang:'04.31',pinyin:'weijiayi',tupian:'img/w.png'},
        {name:'雨后的咖啡',src:'mp3/SNP - 雨后的咖啡.mp3',geshou:'SNP',shichang:'03.56',pinyin:'SNP',tupian:'img/SNP.png'},
        {name:'演员',src:'mp3/薛之谦 - 演员.mp3',geshou:'薛之谦',shichang:'04.21',pinyin:'xuezhiqian',tupian:'img/x.png'},
        {name:'女人如烟',src:'mp3/魏佳艺 - 女人如烟.mp3',geshou:'魏佳艺',shichang:'04.31',pinyin:'weijiayi',tupian:'img/w.png'},
        {name:'骚年',src:'mp3/蒋蒋 - 骚年.mp3',geshou:'蒋蒋',shichang:'03.47',pinyin:'jiangjiang',tupian:'img/j.png'},
        {name:'女人如烟',src:'mp3/魏佳艺 - 女人如烟.mp3',geshou:'魏佳艺',shichang:'04.31',pinyin:'weijiayi',tupian:'img/w.png'},
        {name:'雨后的咖啡',src:'mp3/SNP - 雨后的咖啡.mp3',geshou:'SNP',shichang:'03.56',pinyin:'SNP',tupian:'img/SNP.png'}
    ]
    $(datebase).each(function(i,v){
        $('<div class="gequ"><li class="name">'+v.name+'</li></div>').appendTo('.music-list')
    })
    $('<div class="m-box"><div class="likes"></div><div class="fanhui"></div><div class="xiazai"></div><div class="shanchu"></div><div class="shoucang"></div></div>').appendTo('.name')
    var gequ=$('.music-list .gequ');
    gequ.on('click',function(){
        // console.log($(this).index())
        audio.src=datebase[$(this).index()].src;
    })
    //默认显示
    $('.img img').attr('src',datebase[0].tupian)
    $('<div class="geming">'+datebase[0].name+'</div>').appendTo('.left')
    $('<div class="zuozhe">'+datebase[0].geshou+'</div>').appendTo('.left')
    $('.xiaoyuan  img').attr('src',datebase[0].tupian)
    $('<div class="content-name">'+datebase[0].name+'</div>').appendTo('.neirong')
    $('<div class="content-geshou">'+datebase[0].geshou+'</div>').appendTo('.neirong')
    $('<div class="zanwugeci">').text('暂无歌词').appendTo('.neirong')

    ///点击列表播放

    // $('<div class="wugeci">'+暂无歌词+'</div>').appendTo('.neirong')
    //点击下一首
    $('.xiayishou').on('click',function(){
       index+=1;
        if(index>datebase.length-1){
            index=0;
        }
        $('.img img').attr('src',datebase[index].tupian)
        $('.gece img').attr('src',datebase[index].tupian)
        $('.geming').text(datebase[index].name)
        $('.zuozhe').text(datebase[index].geshou)
        $('.xiaoyuan  img').attr('src',datebase[index].tupian)
        $('.content-name').text(datebase[index].name)
        $('.content-geshou').text(datebase[index].geshou)
        audio.src=datebase[index].src;
        $('.bofang').addClass("zanting");

        audio.play()
        $('.music-list .gequ').each(function(i){
            $('.music-list .gequ').eq(i).css({
                background:'',

            })
        })
        $('.music-list .gequ').eq(index).css({
            background:'#000',

        })
    })
    //点击上一首
    $('.shangyishou').on('click',function(){
        // console.log(index)
         index-=1;
        if(index<0){
            index=datebase.length-1;
        }
        $('.img img').attr('src',datebase[index].tupian)
        // $('.gece img').attr('src',datebase[index].tupian)
        audio.src=datebase[index].src;
        $('.geming').text(datebase[index].name)
        $('.zuozhe').text(datebase[index].geshou)
        $('.xiaoyuan  img').attr('src',datebase[index].tupian)
        $('.content-name').text(datebase[index].name)
        $('.content-geshou').text(datebase[index].geshou)
        $('.bofang').addClass("zanting");
        audio.play();
        $('.music-list .gequ').each(function(i){
            $('.music-list .gequ').eq(i).css({
                background:'',

            })
        })
        $('.music-list .gequ').eq(index).css({
            background:'000',

        })
    })
    var audio=$('audio').get(0);



    $('.bofang').on('click',function(){
        $('.bofang').toggleClass("zanting");
        if(audio.paused){
            audio.play();
        }
        else{
            audio.pause();
        }
    })
    //歌曲开始播放后获取到的总时长
    $('.zongshichang').text('00:00');
    audio.oncanplay=function(){
        var zongshichang=audio.duration;
        var min=Math.floor(zongshichang/60);
        var s=Math.floor(zongshichang%60);
        if(min<=9){
            min='0'+min
        }
        if(s<=9){
            s="0"+s
        }
        var z=min+':'+s
        $('.time .zongshichang').text(z)
    }
    //播放时长
    $('.bofangshichang').text('00:00');
    setInterval(function(){
        var bfsc=audio.currentTime
        var bm=Math.floor(bfsc/60);
        var bs=Math.floor(bfsc%60);
        if(bm<=9){
            bm='0'+bm
        }
        if(bs<=9){
            bs='0'+bs
        }
        var bftime=bm+':'+bs
        $('.bofangshichang').text(bftime)
    },1000)

    //歌曲播放进度条
    audio.ontimeupdate=function(){
        $('.jindu .yuan').css({
            left:$('.jindutiao').width()*(audio.currentTime/audio.duration),
        })
        $('.jindutiao .mask').css({
            width:$('.jindutiao').width()*(audio.currentTime/audio.duration),
        })
    }
    $('.jindutiao').on('click',function(e){
        audio.currentTime=audio.duration*(e.offsetX-$(this).find('.yuan').width()/2)/$('.jindutiao').width();
        audio.play();

    })

        //拖动进度条
    $('.jindu .yuan').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var gjd=(e.pageX-$('.jindutiao').offset().left)/$('.jindutiao').width()*audio.duration;
            gjd=gjd>=audio.duration?audio.duration:gjd;
            gjd=gjd<=0?0:gjd;
            audio.currentTime=gjd;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })
    var arr=[];
    //设置默认音量为1
    //圆的位置
    audio.volume=1
    $('.yinliang-box .yuan').css({
        left:$('.yinliang-jindu').width()
    })
    //点击音量切换静音
    $('.yinliang').on('click',function(){
        $('.yinliang').toggleClass('jingyin');
        if(audio.volume!=0){
            arr.push(audio.volume)
            audio.volume=0
            $('.yinliang-jindu .yl-mask').css({
                width:0
            })
        }else{
            audio.volume=arr[0];
            arr=[]
        }
    })
    //当音量发生改变是记录音量的值然后再吧值赋值给left
    audio.onvolumechange=function(){
        var y=audio.volume*$('.yinliang-jindu').width()
        $('.yinliang-box .yuan').css({
            left:y
        })
        //设置进度条走过的颜色
        $('.yinliang-jindu .yl-mask').css({
            width:audio.volume*$('.yinliang-jindu').width()
        })
    }
    //点击音量进度条 圆的位置到点击的位置
    $('.yinliang-jindu').on('click',function(e){
        audio.volume=(e.offsetX-$(this).find('.yuan').width()/2)/$(this).width();
        $('.yinliang-box .yuan').css({
            left:audio.volume*$('.yinliang-jindu').width()-($('.yinliang-box .yuan').width()/2)
      })

        $('.yinliang-jindu .yl-mask').css({
            width:audio.volume*$('.yinliang-jindu').width()
        })
    })

    //音量拖动
    $('.yinliang-box .yuan').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var v=(e.pageX-$('.yinliang-jindu').offset().left)/$('.yinliang-jindu').width();
            v=(v>1)?1:v;
            v=(v<0)?0:v;
            audio.volume=v
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
        })
    })
    //鼠标移入移出效果
    //默认
    $('.gequ').eq(0).css({
        background:'#000'
    })
    // $('.gece img').attr('src',datebase[0].tupian)
    $('.music-list').on('mouseenter','.gequ',function(){
        $(this).find('.m-box').css({display:'block'})
        $(this).addClass('active')
    })
    $('.music-list').on('mouseleave','.gequ',function(){
        $(this).find('.m-box').css({display:'none'})
        $(this).removeClass('active')

    })
    //歌词详情页
    $('.music-box .img').on('click',function(){
        $('.music-box .gece').toggleClass('active')
        $('.gece img').attr('src',datebase[index].tupian)
    })

    //删除按钮
    $('.shanchu').on('click',function(){
        $(this).closest('.gequ').remove()
    })

    $('.list').on('click',function(){
        $('.music-list').toggleClass('active')
    })

})