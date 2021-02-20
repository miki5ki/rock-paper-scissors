const pcHands = document.querySelector("#pc-hands");
const judgment = document.querySelector("#judgment");
const btn = document.querySelector('ul').addEventListener('click', function(e){ 
  if(e.target.nodeName === 'LI'){
    const results = ['グー','チョキ','パー'];
    const n = Math.floor(Math.random () * 3);
    pcHands.textContent = results[n];
    const eventID = event.target.id;
    const kotae = {
      "グー": {
        "par-btn":"勝ち",
        "cho-btn":"負け",
        "gu-btn":"あいこ"
      },
      "チョキ":{
        "par-btn":"負け",
        "cho-btn":"あいこ",
        "gu-btn":"勝ち"
      },
      "パー":{
        "par-btn":"あいこ",
        "cho-btn":"勝ち",
        "gu-btn":"負け"
      }
    };
      judgment.textContent = `あなたは${kotae[results[n]][eventID]}です`
  }})

    // 2回目のチャレンジ
    // switch(eventID){
    //   case "gu-btn":
    //     if(n==0){
    //       const kotae = ("あいこ") ;
    //       judgment.textContent = `あなたは${kotae}です`;
    //     }else if(n==1){
    //       const kotae = ("勝ち");
    //       judgment.textContent = `あなたは${kotae}です`;
    //     }else{
    //       const kotae = ("負け");
    //       judgment.textContent = `あなたは${kotae}です`;
    //     }
    //     break;

    //     case "cho-btn":
    //       if(n==0){
    //         const kotae = ("負け") ;
    //         judgment.textContent = `あなたは${kotae}です`;
    //       }else if(n==1){
    //         const kotae = ("あいこ");
    //         judgment.textContent = `あなたは${kotae}です`;
    //       }else{
    //         const kotae = ("勝ち");
    //         judgment.textContent = `あなたは${kotae}です`;
    //       }
    //       break;

    //       case "par-btn":
    //         if(n==0){
    //           const kotae = ("勝ち") ;
    //           judgment.textContent = `あなたは${kotae}です`;
    //         }else if(n==1){
    //           const kotae = ("負け");
    //           judgment.textContent = `あなたは${kotae}です`;
    //         }else{
    //           const kotae = ("あいこ");
    //           judgment.textContent = `あなたは${kotae}です`;
    //         }
    //         break;
    //   }






    // 1回目のチャレンジ
    //     if(eventID==="gu-btn"&&n===0){
    //   const kotae = ("あいこ") ;
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="gu-btn"&&n===1){
    //   const kotae = ("勝ち");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="gu-btn"&&n===2){
    //   const kotae = ("負け");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }

    // if(eventID==="cho-btn"&&n===0){
    //   const kotae = ("負け") ;
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="cho-btn"&&n===1){
    //   const kotae = ("あいこ");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="cho-btn"&&n===2){
    //   const kotae = ("勝ち");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }


    // if(eventID==="par-btn"&&n===0){
    //   const kotae = ("勝ち") ;
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="par-btn"&&n===1){
    //   const kotae = ("負け");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }else if(eventID==="par-btn"&&n===2){
    //   const kotae = ("あいこ");
    //   judgment.textContent = `あなたは${kotae}です`;
    // }