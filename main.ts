//  المتغيرات
let isRed = false
let isSweet = false
//  دالة لطرح الأسئلة
function ask_question(question: string): boolean {
    basic.showString(question)
    //  عرض السؤال على الشاشة
    //  الانتظار حتى يتم الضغط على أحد الأزرار
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(10)
    }
    //  تحديد الإجابة بناءً على الزر A أو B
    let answer = input.buttonIsPressed(Button.A)
    //  الانتظار حتى يتم رفع اليد عن الزر
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.pause(10)
    }
    return answer
}

//  دالة لبدء العمل مباشرة عند التشغيل
function start_program() {
    
    //  طرح السؤال الأول
    isRed = ask_question("Red?")
    basic.pause(500)
    //  تأخير قبل السؤال التالي
    //  طرح السؤال الثاني
    isSweet = ask_question("Sweet?")
    basic.pause(500)
    //  تأخير قبل عرض النتيجة
    //  عرض النتيجة بناءً على الإجابات
    if (isRed && isSweet) {
        basic.showIcon(IconNames.Happy)
    } else {
        //  وجه سعيد
        basic.showIcon(IconNames.Sad)
    }
    
    //  وجه حزين
    //  تأخير قبل مسح الشاشة
    basic.pause(3000)
    basic.clearScreen()
}

//  تشغيل البرنامج مباشرة عند بدء التشغيل
start_program()
