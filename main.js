//  Bài tập js 24: 123 abc ABCD
// Nhập vào 1 chuỗi từ bàn phím , 
// đếm xem có bao nhiêu ký tự thường
//  bao nhiêu in hoa
//  bao nhiêu số
//  bao nhiêu space
// let str= prompt('Nhập vào 1 chuỗi')
// console.log('Đây là chuỗi đầu vào: '+str)
// let inHoa=0, inThuong= 0, num=0,space=0;
// for(let e of str) {
//     if(e>='a' && e<='z') inThuong++;
//     else if(e>='A' && e<='Z') inHoa++;
//         else if(e>=1 && e<=9) num++;
//             else space++;
// }
// console.log('In Hoa: '+ inHoa);
// console.log('In Thuờng: '+ inThuong);
// console.log('Số: '+ num);
// console.log('Space: '+space);

//  Bài tập js 25:
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu: 
//    1.  mật khẩu hợp lệ khi có ít nhất 6 ký tự 
//    2. chứa ít nhất 1 chữ cái viết hoa
//    3. chứa ít nhất 1 chữ cái viết thường
//    4. chứa ít nhất 1 chữ số 
//  b.  Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở của, sai quá  5 lần khóa đăng nhập, thoát chương trình    
// // Ví dụ mật khẩu hợp lệ : Abc123
//Ví dụ mật khẩu không hợp lệ : abc123
//Câu a:
// let pw;
// function check(pw){
//     let inHoa=0, inThuong= 0, num=0,space=0;
//     for(let e of pw) {
//         if(e>='a' && e<='z') inThuong++;
//         else if(e>='A' && e<='Z') inHoa++;
//             else if(e>=1 && e<=9) num++;
//                 else space++;
//     }
//     return (pw.length>=6 && inHoa>0 && inThuong>0 && num>0);
// }
// while(true){
//     pw= prompt('Nhập vào mật khẩu:');
//     if(!check(pw)) {
//         alert('Mật khẩu không hợp lệ\n1. Mật khẩu hợp lệ khi có ít nhất 6 ký tự \n2. chứa ít nhất 1 chữ cái viết hoa\n3. chứa ít nhất 1 chữ cái viết thường\n4. chứa ít nhất 1 chữ số ');
//     }
//     else {
//         alert('Đặt mật khẩu thành công, mật khẩu của bạn là: '+pw);
//         break;
//     }
// }
//Câu b:

// let cnt=5;
// while(cnt>0){
//     let input=prompt('Hãy nhập mật khẩu: ')
//     if(input==pw) {
//         alert('Mật khẩu hợp lệ')   
//         break;
//     }
//     cnt--;
//     if(cnt==0) alert('Bạn đã nhập quá 5 lần, tk của bạn đã bị block\nVui lòng liên hệ admin')
//         else {
//             alert('Mật khẩu không đúng, bạn còn '+ cnt +' lần thử');
//         }
// }

//  Bài tập js 26:
// Viết chương trình chuyển tin nhắn sang mật mã theo bảng :  
//  const a="abcdefghijklmnopqrstuvwxyz"   
//  const b="zxcvbnmasdfghjklqwertyuiop" 

// let input=prompt('Nhập vào tin nhắn muốn mã hóa: ')
// const a="abcdefghijklmnopqrstuvwxyz"   
// const b="zxcvbnmasdfghjklqwertyuiop" 
// let maHoa="",index;
// for(let i=0; i<input.length;i++) {
//     index=a.indexOf(input[i])
//     maHoa+=b.charAt(index)
// }
// alert('Chuỗi đã mã hóa: '+maHoa)

//   Bài tập js 27:
//     const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
//     Đếm từ tôi trong string a trên ? 
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// let A=a.split(" ") //Tách chuỗi thành các chuỗi con được ngăn cách nhau bằng dấu space
// // console.log(A);
// let cnt=0;
// for(let e of A){
//     if(e=="tôi") cnt++;
// }
// console.log(cnt);

//  Bài tập js 28:
//  Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :  
// ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
// const a='abc12366363scjwhcunw2399289';
// let A=[...a]
// let words="", num="";
// for(let e of A){
//     if(isNaN(e)) num+=e;
//     else words+=e;
// }
// console.log(words);
// console.log(num);


// Bài tập js 32:
// Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử, n do người dùng nhập từ bàn phím  


// let A=new Array()
// let n;
// while(true){
//     n= Number(prompt('Nhập vào số lượng phần tử: '))
//     if(!isNaN(n) && Number.isInteger(n) && n>=0) {
//         alert('Đầu vào hợp lệ')
//         break
//     }
//     alert('Đầu vào không hợp lệ')
// }
// for(let i=0; i<n; i++) {
//     A[i]=Number(prompt('Nhập vào phần tử: '+(i+1)))
// }
// // alert('Mảng sau khi nhập là: ' + A.join(","))
// alert('Mảng sau khi nhập là: ' + A)



//  Bài tập js 33:
//  1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím 
// 2. Xuất các giá trị trong mảng
// 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
// 4. Sắp xếp mảng tăng dần
// 5. Tính tổng các phần tử trong mảng
// 6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng

//Câu 1,2 dùng lại câu 32 ở trên
//Câu 3
// let A= new Array(11,5,2,4,6)
// alert('Mảng sau khi đảo ngược: '+ A.reverse())
// //Câu 4
// alert('Mảng tăng dần: '+A.sort((a,b)=> a-b))
// //Câu 5: 
// alert('Tổng các phần tử trong mảng dùng reduce: '+ A.reduce((init, cV)=> init+cV,0))
// let sum=0;
// A.forEach((cV)=> sum+=cV,0)
// alert('Tổng các phần tử trong mảng dùng forEach: '+ sum )
// //Câu 6:
// let num= Number(prompt('Nhập 1 số bất kỳ: ')) //Lưu ý: hay sai do không ép kiểu Number
// if(A.includes(num)) {
//     alert('Có tồn tại, vị trí index: '+ A.indexOf(num))
// }
// else alert('Không tồn tại')


//Fetch API
// var postAPI= 'https://picsum.photos/v2/list?page=1&limit=10'
// fetch(postAPI)
//     .then((response)=>response.json())
//     .then(posts=>{
//         var html= posts.map(post=>{
//             return `<li> <h2>${post.author}</h2>
//                 <img src="${post.download_url}" width="500">
//             </li>`
//         }).join('')
//         document.getElementById("list").innerHTML=  html
//     })
//     .catch(error=>console.log('Có lỗi'))



//Khai báo đối tượng

// let tg= new Date() //Đối tượng Date
// //Tạo đối tượng SinhVien
// let SinhVien= {
//     name: "Tuấn Duy",
//     birthYear: 2005,
//     address: {
//         city: "An Giang",
//         country: "Việt Nam",
//     },
//     getAge: function () { //Arrow Function không dùng cho method cần this 
//         return tg.getFullYear()- this.birthYear 
//     },
//     score: [10,9,9.5],
//     Eat:(food)=>{
//         console.log("Ăn "+food);
//     },
//     Drive: (car)=> {
//         console.log("Lái xe "+ car);
//     },
//     getSumMark: function() {
//         return this.score.reduce((init,value)=> init+value,0)
//     }
// }
// SinhVien.Eat("Mì")
// console.log(SinhVien.name)
// console.log(SinhVien.address.city)
// console.log(SinhVien.getAge());
// console.log(SinhVien.getSumMark());
// SinhVien.sothich= "Football"
// console.log(SinhVien.sothich);
// SinhVien["1 FullName"]="Tran Duy"
// console.log(SinhVien["1 FullName"]);
// delete SinhVien["sothich"]
// console.log(SinhVien);


//ES6 Classes: tạo prototype cho các instance dt1, dt2,...

// class SinhVien{
//     constructor(fullName, ID, birthYear){
//         this.fullName= fullName;
//         this.ID= ID;
//         this.birthYear=birthYear;
//     }
//     //Instance Method
//     showInfo() {
//         return `${this.fullName} ${this.ID} ${this.birthYear}`;
//     }
//     //Static Method
//     static frontEnd() {
//         console.log('Lập trình FrontEnd');
//     }
// }
// const dt1= new SinhVien('Tuan Duy', 'B230', '2005')
// console.log(`${dt1.fullName} ${dt1.ID}`);
// console.log(dt1.showInfo());
// console.log(Object.getPrototypeOf(dt1));
// SinhVien.frontEnd(); //static được gọi trực tiếp từ tên lớp mà không thông qua Instance

// class SinhVienIT extends SinhVien {
//     constructor(fullName, ID, birthYear, major){
//         super(fullName, ID, birthYear);
//         this.major=major;
//     }
//     langProgram() {
//         console.log('Ngôn ngữ JavaScript');
//     }
// }
// const dt2= new SinhVienIT('Tuan Duy 2', 'b222', '2005', 'ktpm')
// console.log(dt2.fullName);
// dt2.langProgram();

// let names=`Trần Thái Yến Oanh 
// Chu Đỗ Minh Tuân
// La Kim Anh
// Nhan Vĩnh Tiến
// Chu Đỗ Minh Tuân
// Chu Đỗ Minh Tuân 
// Nhan Vĩnh Tiến
// Chu Đỗ Minh Tuân 
// Chu Đỗ Minh Tuân
// Chu Đỗ Minh Tuân
// Chu Đỗ Minh Tuân
// Nhan Vĩnh Tiến
// Chu Đỗ Minh Tuân 
// Võ Mai Nhựt Anh 
// Chu Đỗ Minh Tuân 
// Lê Minh Phúc
// Nhan Vĩnh Tiến
// Trang Phú Vinh Hiển
// Nguyễn Anh Thư 
// Lê Minh Phúc 
// Trần Minh Hiển
// Trang Phú Vinh Hiển
// Trần Minh Hiển
// Ngô Dương Nhựt Thượng
// Nguyễn Thị Ngọc Huỳnh
// Nguyễn Cao Trí 
// Trần Anh Vũ
// Ngô Dương Nhựt Thượng
// Trần Anh Vũ
// Võ Mai Nhựt Anh 
// Nguyễn Cao Trí 
// Trần Thái Yến Oanh
// Nguyễn Anh Thư 
// Nguyễn Thị Ngọc Huỳnh
// Võ Mai Nhựt Anh
// Trần Anh Vũ 
// Trần Anh Vũ
// Ngô Dương Nhựt Thượng
// Trang Phú Vinh Hiển
// Trần Minh Hiển
// Nguyễn Thị Ngọc Huỳnh
// Trang Phú Vinh Hiển
// Trần Minh Hiển
// Nghiêm Đình Phúc
// Trang Phú Vinh Hiển
// Lê Minh Phúc 
// Nghiêm Đình Phúc
// Trần Minh Hiển
// Trần Thái Yến Oanh
// La Kim Anh
// Nguyễn Thị Ngọc Huỳnh
// Trần Thái Yến Oanh
// Nguyễn Thị Ngọc Huỳnh
// Trần Thị Thanh Thoảng 
// Nguyễn Thị Ngọc Huỳnh
// Trần Thái Yến Oanh
// Nguyễn Thị Ngọc Huỳnh
// Trần Minh Hiển
// Trần Minh Hiển
// Trang Phú Vinh Hiển
// Nguyễn Thị Ngọc Huỳnh
// Trần Minh Hiển
// Trang Phú Vinh Hiển
// Trần Minh Hiển
// Nguyễn Anh Thư 
// Trần Thị Thanh Thoảng 
// Trần Minh Hiển
// Nguyễn Thị Ngọc Huỳnh
// Châu Thị Huỳnh Như 
// Trang Phú Vinh Hiển
// Nguyễn Gia Huy
// Nguyễn Gia Huy
// Nguyễn Anh Thư 
// Nguyễn Cao Trí
// Nguyễn Anh Thư 
// Hồ Thị Thanh Ngân 
// Trang Phú Vinh Hiển 
// Nguyễn Anh Thư 
// Trần Minh Hiển
// Trần Minh Hiển
// Nguyễn Anh Thư 
// Lê Minh Phúc 



// Trang Phú Vinh Hiển
// Trần Thái Yến Oanh
// Nguyễn Thị Ngọc Huỳnh
// Trần Thị Thanh Thoảng`;
// console.log(names.split("\n"))
// let test1=names.split("\n").map((value)=>(value.trim()));
// console.log(test1);
// let test2=test1.filter((n)=>n!="");
// console.log(test2);
// let counters={}; //Tạo 1 obj với key là name, value là count
// test2.forEach((value)=>
//     counters[value]=(counters[value] || 0)+1
// )
// console.log(counters);

let raw_data=`
Trang Phú Vinh Hiển	1
Trần Minh Hiển	1
Nguyễn Anh Thư	2
Nguyễn Thị Ngọc Huỳnh	       2
Trần Thái Yến Oanh	1
Trần Thị Thanh Thoảng	1`;
//Tách dữ liệu thô thành mảng chứa các phần tử ngăn cách nhau bằng \n
let test1= raw_data.split("\n")//Trả về 1 mảng
    .map((value =>value.trim()))
    .filter((item)=> item!="");
console.log(test1);
let obj = test1.reduce((acc,value) =>
    {
    let parts= value.split("\t");
    let count= Number(parts.pop());
    // let key= parts.join(" ");
    acc[parts]=(acc[parts] || 0)+count;
    return acc;
    }
, {});
console.log(obj);