let currentReservationCode ="";
let isReservationValid = false;
let totalRevenue =0;
let totalCheckOut =0
let choice

do  {
console.log("======================================================")
         console.log("HỆ THỐNG LỄ TÂN KHÁCH SẠN SUNRISE HOTEL")
console.log("======================================================")
console.log("1. NHập và kiểm chuẩn mã đặt phòng")
console.log("2. Tìm kiếm phòng luu trú")
console.log("3. thẩm định mã thẻ khách may mắn")
console.log("0. Thoát chươg trình")
console.log("======================================================")
 choice = prompt(" mời bạn nhập vào lựa chon từ 0 đến 3 ")
if(choice !==null){
    choice = choice.trim()
    continue;
}

if(choice ==="" ||
   choice === null ||
   !["0","1","2","3"].includes(choice)
)
{
    console.log("Lựa chọn không hợp lệ .\n")
}


 switch(choice){

case "1":
     currentReservationCode =""
     isReservationValid = false
     let ticketInput = prompt("Nhập vào mã phòng bạn muốn tìm kiếm")
     if(ticketInput === null){
        console.log("Hệ thống hiện đang rỗng.\n");
        break;
     }
     ticketInput = ticketInput.trim().toUpperCase()
     if(ticketInput.length < 6){
        console.log("Độ dài tối thiểu là phải lơn hơn 6");
        break;
        
     }
     if(!ticketInput.startsWith("HTL-")){
        console.log("Mã phải đuọc bắt đầu bằng HTL-");
        break;
     }
     if(ticketInput.include(" ")){
        ocnsole.log("KHống dược chưa khoáng trắng")
        break;

     }
     if(ticketInput === null){
       console.log("không đc để trống ")
}
      currentReservationCode = ticketInput
      isReservationValid = true 
      console.log("Đẫ thêm mã thành công ")
      console.log("Mã của bạn là" + currentReservationCode )
    break;
      case "2" :
        let nightCount;
        let pricePerNight;
        let IsroomVAlid = false;
        if (!isTicketValid){
            console.log("vui lòng mua vế trức khi đặt phòng")
            break;
}
        
         nightCount =prompt("NHập vào số đêm luu trú của bạn:  ")
        do
        if(nightCount   ==="" ){
           console.log("không được để số đêm rỗng")
        if(IsNaN(nightCount) && nightCount < 0){
           console.log("Vui lòng nhập số hợp lệ ")
        
       

        

        

      case "0":
        allert("cảm ơn đã sử dụng chương trình ")
        break;

      default 

        }









}




}while (choice !==0)