# المتغيرات
isRed = False
isSweet = False

# دالة لطرح الأسئلة
def ask_question(question: str) -> bool:
    basic.show_string(question)  # عرض السؤال على الشاشة
    
    # الانتظار حتى يتم الضغط على أحد الأزرار
    while not (input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B)):
        basic.pause(10)
    
    # تحديد الإجابة بناءً على الزر A أو B
    answer = input.button_is_pressed(Button.A)
    
    # الانتظار حتى يتم رفع اليد عن الزر
    while input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        basic.pause(10)
    
    return answer

# دالة لبدء العمل مباشرة عند التشغيل
def start_program():
    global isRed, isSweet
    
    # طرح السؤال الأول
    isRed = ask_question("Red?")
    basic.pause(500)  # تأخير قبل السؤال التالي
    
    # طرح السؤال الثاني
    isSweet = ask_question("Sweet?")
    basic.pause(500)  # تأخير قبل عرض النتيجة
    
    # عرض النتيجة بناءً على الإجابات
    if isRed and isSweet:
        basic.show_icon(IconNames.HAPPY)  # وجه سعيد
    else:
        basic.show_icon(IconNames.SAD)    # وجه حزين
    
    # تأخير قبل مسح الشاشة
    basic.pause(3000)
    basic.clear_screen()

# تشغيل البرنامج مباشرة عند بدء التشغيل
start_program()