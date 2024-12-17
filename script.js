// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (
    input.includes("hello") ||
    input.includes("hi") ||
    input.includes("hi chatbot")
  ) {
    output =
      "Hello, nice to meet you! Please type any key words related to Assessment and Testing, and I will give you suitable answers.";
  } else if (input.includes("unit quizzes")) {
    output =
      "Levels applied: pre-A1, A1, A2, B1, and B2-. Unit quizzes are quizzes that are designed at the end of each lesson. The Language Institute designs the quizzes, and lecturers will assign them to the students online via Elearning and mark the accuracy of the students submission at the end of the course.";
  } else if (input.includes("what is your name")) {
    output =
      "My name is ATeam.<br> I'm an Assessment and Testing chatbot from the Language Institute - Van Lang Univeristy.";
  } else if (input.includes("thank you")) {
    output =
      "You're welcome. If you have any further questions or key words, please type in.";
  } else if (input.includes("cảm ơn") || input.includes("cam on")) {
    output = "Không có chi. Nếu bạn có thêm câu hỏi cứ nhắn nha.";
  } else if (
    input.includes("good morning") ||
    input.includes("good afternoon") ||
    input.includes("good evening")
  ) {
    output = "Well, have a nice day. What can I do for you?";
    // deep details SPARK
  } else if (input.includes("quá trình") || input.includes("progress")) {
    output =
      "Điểm quá trình được đánh giá theo 3 phương pháp đánh giá chính bao gồm bài tập về nhà MyELT (5%), kiểm tra cuối đơn vị bài học và bài tập trên Elearning (35%) và Thuyết trình dự án học tập (PBA) (20%). Phần thuyết trình dự án học tập (PBA) được thực hiện vào buổi lesson 14, tuy nhiên trước buổi 14 các nhóm làm dự án đã phải chuẩn bị ý tưởng và nội dung cho phần trình bày của nhóm.";
  } else if (
    input.includes("hoc lieu") ||
    input.includes("resource") ||
    input.includes("học liệu")
  ) {
    output =
      "SAU ĐÂY LÀ PHẦN HƯỚNG DẪN GIÁO VIÊN TRUY CẬP NGUỒN HỌC LIỆU CỦA SÁCH ĐANG DẠY. <br>- Bước 1: Tại màn hình chính của tài khoản, giáo viên click vào tựa sách mình cần truy cập. <br>- Bước 2: Tại đây, giáo viên sẽ thấy 3 tabs bên tay trái màn hình như trong hình bên dưới. <br>- Bước 3: Trong tab ‘Setting’: Giáo viên có thể truy cập để xem tất cả các exercise mà sinh viên sẽ làm đã được giáo viên giao trong phần Assignment. Giáo viên click vào ‘Launch course’. <br>Sau đó chọn unit mà giáo viên cần xem. <br>- Bước 4: Trong tab ‘CPT’: Giáo viên có thể vào đây để sử dụng phần mềm trình chiếu trực tuyến hoặc tải phần mềm về máy để sử dụng. <br>- Bước 5: Trong tab ‘Gradebook’: Giáo viên vào đây để xem tiến độ hoàn thành và điểm số trung bình của từng sinh viên đang enroll vào lớp của mình.";
  } else if (
    input.includes("adjust spark assignment") ||
    input.includes("edit spark assignment") ||
    input.includes("dieu chinh spark assignment")
  ) {
    output =
      "SAU ĐÂY LÀ HƯỚNG DẪN GIÁO VIÊN ĐIỀU CHỈNH THÔNG TIN CỦA ASSIGNMENT ĐÃ TẠO. <br>- Bước 1: Sau khi đã tạo xong assignment theo hướng dẫn, giáo viên sẽ thấy phần bài tập xuất hiện trong tab ‘Assignment’. <br>- Bước 2: Giáo viên muốn thay đổi thông tin của assignment nào, thì rê chuột lên phần assignment đó và click vào biểu tượng hình cây viết trên phần assignment đó. <br>- Bước 3: Giáo viên thực hiện lại các bước trong hướng dẫn đổi lại thông tin cần thiết.";
  } else if (
    input.includes("spark assignment") ||
    input.includes("assignment spark") ||
    input.includes("bai tap spark")
  ) {
    output =
      "SAU ĐÂY LÀ HƯỚNG DẪN GIÁO VIÊN TẠO ASSIGNMENT TRÊN SPARK. <br>Lưu ý: Trước khi tạo assignment, giáo viên phải chắc chắn rằng tất cả sinh viên của lớp đã enroll vào ‘Course key’ mà giáo viên mới tạo. <br>•	Bước 1: Sau khi tạo xong ‘Course Key’, tại màn hình chính của tài khoản, giáo viên click vào tab ‘Assignment’ để bắt đầu tạo assignment cho lớp. <br>•	Bước 2: Trong tab ‘Assignment’, giáo viên click vào ‘New Assignment’. <br>•	Bước 3: Giáo viên cần điền các thông tin cần thiết tại đây. <br>*	Name: Dùng tên học phần theo định dạng của trường mình cho học phần của mình sẽ dạy. <br>*	Start Date: Ngày bắt đầu của phần bài tập này. <br>* End Date: Ngày kết thúc của phần bài tập này. <br>(Giáo viên chú ý, đây là ngày bắt đầu và ngày kết thúc của phần bài tập giáo viên cần giao và sẽ khác với ngày bắt đầu và ngày kết thúc của học phần như đã tạo. Đây sẽ tuỳ thuộc vào quyết định của Viện cách giao bài tập và cách học phần được tính trong mỗi học kỳ. Xin vui lòng liên hệ với Viện ngôn ngữ để biết thêm về việc này. <br>*	Allow the users to try again: Giáo viên tick vào ô này nếu cho muốn cho phép học sinh làm lại bài tập được giao nhiều lần. Nếu không thì untick ô này. <br>* No dates: Giáo viên tick vào ô này nếu giáo viên không muốn áp ngày bắt đầu và kết thúc cho phần bài tập này. Nếu không thì giáo viên không tick vào ô này. <br>*	Sau đó click ‘Continue’. <br><br>•	Bước 4: Giáo viên click vào hình dấu ‘+’ Add course to select resources. <br>* Giáo viên chọn tựa sách mà mình sẽ dạy. <br>•	Bước 5: Click vào mũi tên chỉ xuống như trong hình bên dưới để xổ xuống các unit có trong sách. <br>•	Bước 6: Chọn nội dung bài tập. <br>*	Nếu giáo viên muốn giao hết bài tập 1 unit, thì chỉ cần click vào ô turn on. <br>* Nếu giáo viên muốn giao bài tập theo từng kỹ năng có trong 1 unit thì chỉ cần click vào mũi tên drop down. <br>* Sau đó click ‘Continue’. <br>•	Bước 7: Giao bài tập cho sinh viên. <br>* Giáo viên tick vào ô ‘All’ để gán bài tập cho tất cả sinh viên đã enroll vào ‘Course Key’ mà giáo viên đã tạo. <br>* Sau đó click ‘Create’. <br><br>•	Bước 8: Hệ thống sẽ hiển thị thông báo assignment đã được tạo theo thông tin giáo viên cung cấp.";
  } else if (
    input.includes("tao course tren spark") ||
    input.includes("spark") ||
    input.includes("spark for teacher") ||
    input.includes("teacher spark")
  ) {
    output =
      "SAU ĐÂY LÀ	HƯỚNG DẪN GIÁO VIÊN TẠO COURSE TRÊN SPARK: <br><br>•	Bước 1: Đối với các giáo viên chưa có tài khoản trên nền tảng SPARK, vui lòng liên hệ Viện ngôn ngữ để đăng ký khởi tạo tài khoản giáo viên. <br>•	Bước 2: Viện ngôn ngữ sẽ gửi yêu cầu đến Nhà xuất bản để khởi tạo tài khoản. <br>•	Bước 3: Nhà xuất bản sẽ gửi lại tài khoản vào email của giáo viên theo danh sách cấp bởi Viện ngôn ngữ kèm hướng dẫn sử dụng này. <br>•	Bước 4: Khởi tạo “Course” trên nền tảng SPARK. Dùng thông tin đăng nhập được cung cấp qua email, giáo viên login vào tài khoản của mình ở dưới <br>•	Bước 5: Sau khi login, giáo viên click vào “Create Course”. <br>•	Bước 6: Nhập các dữ liệu cần thiết như hệ thống yêu cầu <br>* Course Name: Điền theo yêu cầu của nhà trường <br>* Start Date: Chọn ngày bắt đầu của lớp mà giáo viên chuẩn bị dạy <br>* End Date: Chọn ngày kết thúc của lớp mà giáo viên chuẩn bị dạy <br>* Course Key: Bỏ trống phần này <br>* Description: Bỏ trống phần này <br>* Show/Hide ‘All Content’: <br>* Chọn ‘Show Unassigned’ <br>* Add publisher materials: Tại đây, giáo viên phải chọn đúng tựa sách mà mình đang cần dạy. <br>*	Sau đó click ‘Create’ để hoàn tất. <br><br>•	Bước 7: Sau khi hoàn tất bước 6, giáo viên sẽ thấy tựa sách cần dạy hiện lên trên màn hình dashboard của tài khoản. <br>* Giáo viên sẽ thấy ‘Key’ bên trong tựa sách sách vừa xuất hiện trên màn hình <br>*	Giáo viên cần cung cấp ‘Key’ này cho sinh viên để sinh viên enroll vào đúng lớp. <a href=https://learn.eltngl.com/> <br>Link tạo Spark Course.";
    // deep details assessment
  } else if (input.includes("pre a1") || input.includes("pre a1 assessment")) {
    output =
      "Pre A1 Assessment includes Formative assessment and Summative assessment. <br>* Formative assessment includes Presentation (20%), Unit quizzes (20%) + (online learning), and Homework (MyELT/myTimeENGLISH) (20%). Each component is measured in the scale of 10 (points). <br>* Summative assessment consists of three main components: 1) Listening, Reading, Vocabulary, Grammar (20%); 2) Writing (10%); 3) Speaking (10%)";
  } else if (input.includes("fuck")) {
    output =
      "That's a bad word. It's not polite to say that. Next time, please don't say again.";
  } else if (input.includes("how are you")) {
    output =
      "I'm fine. Hope you are good, too. If you have any further questions or key words, please type in.";
  } else if (input.includes("assessment")) {
    output =
      "Assessment in the Language Institute includes Formative assessment and Summative assessment. Formative assessment consists of quizzes, homework and Project-Based Assessment (PBA). Meanwhile, Summative assessment comprises Receptive skills (Listening and Reading) and Productive skills (Speaking and Writing)";
  } else if (input.includes("eligibility")) {
    output =
      "If a student misses MORE than 20% of the course, he/she will NOT be allowed to take the final exam, no matter with or without noting his/her lecturer about the absence. Under the circumstances that the student’s absence results from a force majeure (with supporting documents), then the lecturers may consider and decide the student’s attendance status of that lesson.";
  } else if (
    input.includes("ok") ||
    input.includes("got it") ||
    input.includes("understand")
  ) {
    output = "It's nice when you can understand.";
  } else if (input.includes("unit quiz")) {
    output =
      "Levels applied: pre-A1, A1, A2, B1, and B2-. Unit quizzes are quizzes that are designed at the end of each lesson. The Language Institute designs the quizzes, and lecturers will assign them to the students online via Elearning and mark the accuracy of the students submission at the end of the course.";
  } else if (input.includes("ielts")) {
    output =
      "Levels applied: A1, A2, B1, B2- and B2. IELTS Practice including different types of IELTS task in terms of Listening, Speaking, Reading and Writing is assigned at the end of each lesson/unit.";
  } else if (input.includes("ielts practice")) {
    output =
      "Levels applied: A1, A2, B1, B2- and B2. IELTS Practice including different types of IELTS task in terms of Listening, Speaking, Reading and Writing is assigned at the end of each lesson/unit.";
    // deep details general information
  } else if (input.includes("what is your role")) {
    output =
      "My role is to help you understand Assessment and Testing in the Language Institute - Van Lang University.";
  } else if (input.includes("what can you do")) {
    output =
      "I can chat with you and answer some simple questions or give you answers based on your key words.";
  } else if (
    input.includes("vien ngon ngu") ||
    input.includes("vnn") ||
    input.includes("language institute")
  ) {
    output =
      "Viện Ngôn ngữ - Trường Đại học Văn Lang được thành lập với sứ mệnh nâng cao năng lực ngoại ngữ cho các sinh viên VLU. Với phương pháp và công nghệ giảng dạy liên tục được cập nhật phù hợp với khả năng của người học cũng như thích ứng với bối cảnh toàn cầu hoá, Viện Ngôn ngữ sẽ luôn đồng hành, giúp học viên phát huy vai trò và thế mạnh của mình trong công cuộc cạnh tranh trên thị trường lao động quốc tế.";
  } else if (
    input.includes("nice") ||
    input.includes("good") ||
    input.includes("wonderful") ||
    input.includes("amazing")
  ) {
    output = "Thank you for your kindness. Please, feel free to ask me more.";
  } else if (
    input.includes("van lang language institute") ||
    input.includes("vlu")
  ) {
    output =
      "Van Lang Language Institute was established with the mission of improving foreign language skills for VLU students. With teaching methods and technologies constantly updated in accordance with learners' abilities and adapted to the context of globalization, Van Lang Language Institute will always accompany and help students promote their roles and strengths in the competition in the international labor market.";
  } else if (input.includes("myelt")) {
    output =
      "In terms of MyELT Homework, it is assigned from MyELT system. For AVTC0 (Get Started) lecturers will assign homework from mytimeEnglish for the students. At the end of the course lecturers will mark the completeness of the students' submission.";
  } else {
    output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function () {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});
