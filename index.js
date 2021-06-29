console.log("hello, vanilla.");

function keyck(){//input 엔터키만 사용
    if(event.keyCode==13){
        checks();
    }
}

let count = 0;
let aw;
function start(){

    const nums = [];//9개의 숫자를 담아둠
    for(let f=0; f<9; f++){
        nums.push(f + 1);//9개의 숫자 생성 후 자리에 넣어둠
    } 
    const answer = [];//정답을 담아둠
    for(let f=0; f<3; f++){
        const index = Math.floor(Math.random() * nums.length);//0~9까지 숫자 랜덤으로 생성
        answer.push(nums[index]);
    };
    console.log(answer);//랜덤으로 생성되는 숫자 확인 
    aw = answer;
    
    count++;

    if(count==10){
        alert("10번의 기회를 소진하였습니다.");
        document.getElementById("Sbtn").disabled = "disabled";
    }

    //게임 시작 10번 했으면 브레이크 걸기

}

function checks(){
    let text = document.getElementById("toptxt").value;
    
    if(text==""){
        alert("숫자를 입력해주세요")
    }
    else if(text.length!=3){
        alert("세자리 숫자만 입력해주세요");
    }
    else{
        if(aw.join('')== text){
           let htmls= `<li>홈런!</li>`;
            document.getElementById("txts").innerHTML += htmls;
        }

        let strike = 0;
        let ball = 0;

        for(let f=0; f<aw.length; f++){
            const index = aw.indexOf(aw[f])//겹치는것이 있는지 확인
            if(index>-1){
                strike += 1;
            }
            else{
                ball += 1;
            }
        }
        document.getElementById("txts").innerHTML += `<li>${strike} 스트라이크 </li>
        <li>${ball} 볼</li> `;
    }

}

function restart(){//재시작
   location.reload();
}