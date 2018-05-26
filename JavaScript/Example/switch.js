/* 
Switch문 활용해보기.

각 달을 month라는 인자로 받아 그 달이 몇일까지 있는 반환하는 함수 daysInMonth 함수를 완성하세요.
(2월은 28일까지 있다고 가정하세요.) 

javascript의 switch문에서 여러개의 값을 한 번에 처리하려면 아래와 같이 case를 여러번 적어 주어야 합니다.

 */

function daysInMonth(month){
  switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      return 28;
      break;
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    default:
      console.log("존재하지 않는 달입니다.");
      break;
  }
}

  var a = daysInMonth(4);
  console.log(a);