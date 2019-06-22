$(function () {
    let arr=[
        {name:'张三',phone:'18405681234',py:'zhangsan'},
        {name:'李四',phone:'18405682345',py:'lisi'},
        {name:'王五',phone:'18405683456',py:'wangwu'},
        {name:'赵六',phone:'18405684567',py:'zhaoliu'},
        {name:'孙七',phone:'18405685678',py:'sunqi'},
        {name:'刘八',phone:'18405686789',py:'liuba'},
        {name:'甄九',phone:'18405687890',py:'zhenjiu'},
        {name:'刘海洋',phone:'18405688901',py:'liuhaiyang'},
        {name:'郝佳宇',phone:'18405689012',py:'haojiayu'},
        {name:'靳博',phone:'18405680123',py:'jinbo'},
        {name:'卫涛',phone:'18405690123',py:'weitao'},
        {name:'段皓然',phone:'18405691234',py:'duanhaoran'},
        {name:'荆福博',phone:'18405692345',py:'jingfubo'},
        {name:'赵时杰',phone:'18405693456',py:'zhaoshijie'},
        {name:'刘勇',phone:'18405694567',py:'liuyong'},
        {name:'李刚',phone:'18405695678',py:'ligang'},
        {name:'刘新阳',phone:'18405696789',py:'liuxinyang'},
    ];
    let aside=$('.aside');
    let list=$('.list');
    let input=$('input');
    input.on('input',function () {
        let val=$(this).val();
        console.log(val);
        let newarr=arr.filter(elem=>elem.name.includes(val) || elem.py.includes(val) || elem.phone.includes(val));
        render(newarr);
    })
    render(arr);
    $('.aside span' ).on('click',function () {
        let text=$(this).text();
        let newarr=arr.filter(elem=>elem.py.charAt(0).toUpperCase().includes(text));

        console.log(newarr);
        render(newarr);
    })


    //渲染
    function render(arr){
        $('.list').empty();
        let person={

        }
        arr.forEach(elem=>{
            let firstword=elem.py.charAt(0).toUpperCase();
            if(!person[firstword]){
                person[firstword]=[];
            }
            person[firstword].push(elem);
        })
        let key=Object.keys(person).sort();
        let html='';
        let html2='';
        for(let i=0;i<key.length;i++){
            let ele=key[i];
            html += `
            <div class="name">
                <h2>${ele}</h2>
                `
                for(let j=0;j<person[ele].length;j++){
                    let info=person[ele][j];
                    html += `
                    <span>${info.name}</span>
                    <p>${info.phone}</p>
                    `
                }
                html += `
                    </div>
                `
            html2 += `
                <span>${ele}</span>
            `
            // console.log(list);
            $('.list').html(html);
            list.html(html);
            aside.html(html2);
        }
    }


})