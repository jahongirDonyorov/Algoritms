// -#-#-#-#-#-#-#-#-#-#  Algoritms  -#-#-#-#-#-#-#-#-#-#

// -=-=-=-=-=-=- KIRISH: Sonlar
// shunchake sonning uzi malumot (information) bulolmaydi u data hisoblanadi qachonke u biror narsani anglatsa (rang, yosh, sana, ism, va hokozo) information hisoblanadi

// -=-=-=-=-=-=- Algoritm Nima ?
// Algaritm bu bizning mommomizni yechadigan amallarning ketmaketligi hisoblanadi 
// u har hil kurinishda bulishi mmumkun (hayotimiz, code, matimatik formula va boshqa kurinishlarda bulishi mumkun)

//-=-=-=-=-=-

// INPUT  ---> ALGORITM ---> OUTPUT

// -=-=-=-=-

// Algaritmni shu tarizda tariflasak buladi 

// 1. 'input' kiradi va uning ustida 
// 2. 'algaritm' alam bajariladi 
// 3. 'output' va bizga uzimizga kerak javob (value) chiqadi


// ! ! !  -Algaritm jeniral (global) bulishi kerak yani aynan bitta berilgan inputda emas istalgan inputda ishlashi kerak-  ! ! !

// Algaritm tug'ri db aytishimiz uchun 2 ta xususiyatni bajarishi kerak
// 1. kutilgan output (natija) ni berish kerak 
// 2. va algaritm tuxtashi kerak

// -=-=-=-=-=- Son olilalari 
// yaxshiroq tushunish uchun Number ./number.png ga kirib kurishingz mumkun 

// 1. Natural: 0,1,2,3 
// 2. Integer: -1,-2,-3
// 3. rational: 1/2, -1/2, 2.25 // taqsim / bulish emas 
// 4. Real Algebraic: 
// 5. Real:


//  NAME      VALUE       TYPE

// number      123        int 

// sum        -123        int 

// pi         3.14        double

// averge    -3.14        


// =-=-=-=-=-=-= Number Systems (Sanoq Tizimlari)

//  System        Base                 Digits 

//  Binary         2             0 1
//  Octal          8             0 1 2 3 4 5 6 7      
//  Decimal        10            0 1 2 3 4 5 6 7 8 9
//  Hexadecimal    16            0 1 2 3 4 5 6 7 8 9 A B C D E F L G

// -=-=-=-=-=- Binary

// bu faqat 0 va 1 dan tashkil topgan (kampyuter Binary da ishlaydi)
// Yozish

// 0
// 1
// 10
// 11 / slotlarimiz tuldi yangi slot (raqam) qushamiz 100
// 100
// 101
// 110
// 111 / yana slotimiz tuldi endi yana yangi slot (raqam) qushib ketaveramiz 1000

// shu tariqada faqat 0 va 1 yordamida sonlarni tuzib ketaveramiz 

// -=-=- Binary dagi sonlarham uz urnida Decimal qaysidir songa tug'ri keladi 

//  Binary                  Decimal

//    0            =           0
//    1            =           1
//    10           =           2
//    11           =           3
//    100          =           4
//    101          =           5
//    111          =           6

// Dasturchi 2 lik sanoq sistemasi (Binary) dan 10 lik sanoq sistemasi (Decimal) ga utkazishni bilishi kerak
// Sababi kampyuterimiz xotirasi Binary da ishlaydi

// -=-=-=-=- Decimal ni Binary ga utkazish 

// 1 - usul.

// Sonning 2 bulingandagi qoldiqlari hisobga olinib ketadi
// 15 ni Binary ga utkazamiz

// 15 % 2 = 1  / 15 % 2 bulganda bulingan son 7 yana bulinadi toke 1 bulguncha 
// 7 % 2 = 1
// 3 % 2 = 1
// 1 % 2 = 1

// shu holatdagidek bulingan son 1 ga kelguncha bulinaveradi
// chiqqan qoldiqlar pastdan tepaga yoziladi va 15 ning binary dagi qiymati chiqadi 

//  decimal       binary
//    15    ===    1111

// 2 - usul.
// 2 ning darajalari orqali chiqarish
// masalan 50 ni chiqarish uchun 2ni 5chi darajasigacha yozib olamiz va eng katta darajasiga 50 bulgincha qolgan darajalarini quwib boramiz 

// 50

// 2**0 = 1
// 2**1 = 2
// 2**2 = 4
// 2**3 = 8
// 2**4 = 16
// 2**5 = 32

// Demak eng kattasi 5 daraja 32 ni olamiz + 4 - darajasi 16 + 1 - darjasi 2 ni olsak jami 50 buladi
// 50 = 32 + 16 + 2 = 2**5 + 2**4 + 2**1 = drajalari majvud ekan
// endi shularga qarab slotlarni tuldiramiz bor darajalarga 1 yuqlariga 0 quyamiz

// index
//   0    =   0 - yichilishida 0 - draja bulmaganligi uchun 0 quyildi
//   1    =   1 - yichilishda 2 ni 1 darajasi 2 ishlatilganligi uchun 1 quyildi
//   2    =   0
//   3    =   0
//   4    =   1
//   5    =   1
//   6    =   0

// qushishda yani manabuyirda bulgan (2**5 + 2**4 + 2**1) bulgan darajalarga 1 bulmaganlariga 0 quyiladi
// bund pastan tepaga uqilmaydi chunke index ga bittalab joylab chiqdik

// decimal       binary
//   50     =    0100110

// index quyishda bitta kup quyiladi eng katta draja 2**5 = 5 bulganligi uchun + 1 buladi va index 6  ta buladi 

// agar 70 ni hisoblasak eng katta qaraga 2**7 buladi va index 8 ta olinadi 