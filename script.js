// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (
    input.includes("hello there") ||
    input.includes("hi there") ||
    input.includes("hi chatbot")
  ) {
    output =
      "Hello, nice to meet you! Please type any key words related to Assessment and Testing, and I will give you suitable answers.";
  } else if (input.includes("unit quizzes") || input.includes("unit quiz")) {
    output =
      "Unit quizzes are applied for Levels: pre-A1, A1, A2, B1, and B2-. Unit quizzes are quizzes that are designed at the end of each lesson. The Language Institute designs the quizzes, and lecturers will assign them to the students online via Elearning and mark the accuracy of the students submission at the end of the course.";
  } else if (input.includes("what is your name")) {
    output =
      "My name is ATeam.<br> I'm an Assessment and Testing chatbot from the Language Institute - Van Lang Univeristy.";
  } else if (input.includes("thank you very much")) {
    output =
      "You're welcome. If you have any further questions or key words, please type in.";
    //new 1
  } else if (
    input.includes("đánh giá cuối kỳ") ||
    input.includes("cuối kỳ av 1-6") ||
    input.includes("cuối kỳ av 1-6") ||
    input.includes("cuối kỳ anh văn 1-6")
  ) {
    output =
      "Để xem Thông tin về đánh giá cuối kỳ Anh văn 1-6 (AV 1-6) bạn có thể xem tài liệu tại đây: <a href='https://vanlangunivn.sharepoint.com/:p:/s/TEACHINGDIARY/EeqPHvE-AYZArfPZPr_23kMBkQwV2cTHlz4NTQJDY7bR_Q?e=xw0Ojf', target='_blank'>tài liệu</a>.";
  } else if (
    input.includes("assessment guideline") ||
    input.includes("đánh giá") ||
    input.includes("khung tổng hợp")
  ) {
    output =
      "Để xem Khung tổng hợp đánh giá (Assessment Guidelines) bạn có thể xem tài liệu tại đây: <a href='https://vanlangunivn.sharepoint.com/:x:/s/TEACHINGDIARY/ESxRAI0lmotIrW8-OY4ZMv0Bk5g45OD_Ncadi_o9WE96ZQ?e=nc7EBD', target='_blank'>tài liệu</a>.";
  } else if (
    input.includes("liệu offline") ||
    input.includes("supplementary materials") ||
    input.includes("links for books")
  ) {
    output =
      "Để xem Tài liệu offline, links for books, hoặc supplementary materials (tài liệu bổ trợ) bạn có thể xem tài liệu tại đây: <a href='https://vanlangunivn.sharepoint.com/sites/TEACHINGDIARY/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTEACHINGDIARY%2FShared%20Documents%2F1%2E%20CURRICULUM%20DEVELOPMENT%2FH%E1%BB%8CC%20LI%E1%BB%86U%20OFFLINE&p=true&ga=1', target='_blank'>tài liệu</a>.";
  } else if (
    input.includes("nhật ký đảm bảo chất lượng") ||
    input.includes("quality assurance diary") ||
    input.includes("teaching diary")
  ) {
    output =
      "Để xem Nhật ký đảm bảo chất lượng bạn có thể xem tài liệu tại đây: <a href='https://vanlangunivn.sharepoint.com/sites/TEACHINGDIARY/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTEACHINGDIARY%2FShared%20Documents%2F1%2E%20CURRICULUM%20DEVELOPMENT%2FNH%E1%BA%ACT%20K%C3%9D%20%C4%90%E1%BA%A2M%20B%E1%BA%A2O%20CH%E1%BA%A4T%20L%C6%AF%E1%BB%A2NG&p=true&ga=1', target='_blank'>tài liệu</a>.";
  } else if (
    input.includes("đề cương") ||
    input.includes("detailed syllabus")
  ) {
    output =
      "Để xem Đề cương chi tiết bạn có thể xem tài liệu tại đây: <a href='https://vanlangunivn.sharepoint.com/sites/TEACHINGDIARY/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTEACHINGDIARY%2FShared%20Documents%2F1%2E%20CURRICULUM%20DEVELOPMENT%2F%C4%90%E1%BB%80%20C%C6%AF%C6%A0NG%20CHI%20TI%E1%BA%BET&p=true&ga=1', target='_blank'>tài liệu</a>.";
  } else if (input.includes("the unit-quizzes")) {
    output =
      "At our Language Institute, we have short quizzes after each lesson to help you learn. These quizzes cover the material you just studied and are designed for different skill levels, from beginner (pre-A1) to intermediate (B2-).<br> Your teacher will give you these quizzes online through our Elearning system.<br> After you finish the course, your teacher will review your quiz answers and give you feedback.";
    //new 1.3
  } else if (input.includes("hello")) {
    const responses = [
      "Hello! How can I assist you today?",
      "Hi there! What’s on your mind?",
      "Greetings! How’s your day going?",
      "Hello! What would you like to talk about?",
      "Hey! It's great to see you here.",
      "Hi! How can I help you today?",
      "Hello there! What brings you here?",
      "Hi! How are you doing today?",
      "Greetings! What can I do for you?",
      "Hello! I'm here to help with anything you need.",
      "Hey there! What’s up?",
      "Hi! Is there something specific you’d like to discuss?",
      "Hello! I hope you're having a wonderful day.",
      "Hi! What’s new with you?",
      "Hello! Let me know how I can assist you.",
    ];
    output = responses[Math.floor(Math.random() * responses.length)];
    //new 1.2
  } else if (input.includes("thank you")) {
    const responses = [
      "You're welcome! I'm glad I could help.",
      "No problem! If you have any more questions, feel free to ask.",
      "Anytime! I'm here to assist you.",
      "You're very welcome! Let me know if there's anything else you need.",
      "My pleasure! I'm happy to help out.",
      "No worries! I'm always here if you need assistance.",
      "Glad I could help! What else can I do for you?",
      "You're welcome! It was a pleasure to chat with you.",
      "Anytime! Just let me know if you need more information.",
      "You're welcome! I'm here for you whenever you need.",
      "Happy to help! If you have more questions, just ask.",
      "You're welcome! I appreciate your kind words.",
      "No problem at all! I'm here to support you.",
      "You're welcome! It’s great to be of assistance.",
      "Anytime! Feel free to reach out with more questions.",
    ];
    output = responses[Math.floor(Math.random() * responses.length)];
    //new 1.1
  } else if (input.includes("how was your day")) {
    const responses = [
      "It was great, thanks! I got a lot done at work and even had time to relax in the evening.",
      "Pretty good! I had some productive meetings and enjoyed a nice lunch.",
      "It was a bit hectic, but I managed to finish everything on my to-do list.",
      "I had a wonderful day! I went for a long walk and enjoyed the beautiful weather.",
      "My day was quite busy, but I learned a lot and met some interesting people.",
      "It was okay, just the usual routine. How about yours?",
      "I had a fantastic day! I tried a new recipe for dinner.",
      "It was a mixed bag; some things went well, and others were challenging.",
      "I had a relaxing day, spent most of it reading and catching up on shows.",
      "It was a long day, but I ended it with a great workout.",
      "My day was productive; I managed to cross off several tasks from my list.",
      "I had an exciting day filled with unexpected surprises!",
      "It was a bit stressful, but I handled it well and ended on a positive note.",
      "I enjoyed a quiet day at home, just what I needed.",
      "Overall, it was a good day! I’m looking forward to tomorrow.",
    ];
    output = responses[Math.floor(Math.random() * responses.length)];
    //new
  } else if (input.includes("learn english")) {
    const responses = [
      "Learning English can be very rewarding! What specific areas are you focusing on?",
      "There are many resources available, like apps and online courses. Have you tried any?",
      "Practice is key! Speaking with others can really help improve your skills.",
      "Reading books and watching movies in English can also be very beneficial.",
      "Are you looking for tips on grammar, vocabulary, or speaking fluently?",
      "Joining a language exchange group can be a fun way to practice.",
      "Consistency is important. How often do you practice your English?",
      "Listening to English podcasts can help with comprehension and pronunciation.",
      "You could also try writing in English every day to enhance your skills.",
      "Taking classes with a tutor can provide personalized guidance.",
      "Have you thought about using flashcards for vocabulary building?",
      "Engaging in conversation with native speakers is one of the best ways to learn.",
      "Setting small, achievable goals can make the learning process smoother.",
      "Don't be afraid to make mistakes; they are part of the learning journey!",
      "What resources have you found helpful so far in your English learning?",
    ];
    output = responses[Math.floor(Math.random() * responses.length)];
    //new 2
  } else if (input.includes("what did you eat for lunch")) {
    output = "I had a delicious salad with grilled chicken. What about you?";
  } else if (input.includes("have you seen any good movies lately")) {
    output =
      "Yes, I watched a fantastic thriller last weekend. Do you like thrillers?";
  } else if (input.includes("what's your favorite hobby")) {
    output =
      "I love reading books in my free time. It helps me unwind. What do you enjoy doing?";
  } else if (input.includes("how do you stay organized")) {
    output =
      "I use a planner and set reminders on my phone. It really helps me keep track of things!";
  } else if (input.includes("do you have any pets")) {
    output =
      "Yes, I have a dog named Max. He's very playful and loves to go for walks.";
  } else if (input.includes("what's your morning routine")) {
    output =
      "I usually start my day with a cup of coffee, followed by a quick workout and a shower.";
  } else if (input.includes("how do you relax after work")) {
    output =
      "I like to watch a show or read a book. It helps me disconnect from the day.";
  } else if (input.includes("what's your favorite weekend activity")) {
    output =
      "I enjoy hiking on weekends. It's a great way to enjoy nature and stay active.";
  } else if (input.includes("what's your favorite season")) {
    output =
      "I love spring! The flowers bloom, and the weather is just perfect.";
  } else if (input.includes("do you like cooking")) {
    output =
      "Absolutely! I find it therapeutic. What's your favorite dish to make?";
  } else if (input.includes("how often do you exercise")) {
    output = "I try to work out at least three times a week. How about you?";
  } else if (input.includes("what's your favorite book")) {
    output =
      "I really enjoyed 'The Alchemist' by Paulo Coelho. Have you read it?";
  } else if (input.includes("do you prefer coffee or tea")) {
    output =
      "I prefer coffee in the morning and tea in the evening. What do you like?";
  } else if (input.includes("what's your favorite TV show")) {
    output =
      "I'm a big fan of 'Stranger Things.' It has such an intriguing plot!";
  } else if (input.includes("do you like to travel")) {
    output =
      "Yes, I love exploring new places! What's your favorite travel destination?";
  } else if (input.includes("how do you stay motivated")) {
    output =
      "I set small goals and reward myself when I achieve them. What about you?";
  } else if (input.includes("what's your dream job")) {
    output =
      "I would love to work in a creative field, maybe as a writer or designer.";
  } else if (input.includes("how do you manage stress")) {
    output =
      "I practice mindfulness and take walks in nature. It really helps me relax.";
  } else if (input.includes("what's your favorite snack")) {
    output = "I can't resist popcorn, especially while watching movies!";
  } else if (input.includes("do you play any instruments")) {
    output = "I play the guitar! It's a fun way to express myself.";
  } else if (input.includes("how do you celebrate your birthday")) {
    output =
      "I usually have a small gathering with friends and family. How do you celebrate?";
  } else if (input.includes("what's your favorite childhood memory")) {
    output =
      "I loved going to the beach with my family every summer. What about you?";
  } else if (input.includes("how do you keep in touch with friends")) {
    output =
      "I use social media and texting. It's a great way to stay connected.";
  } else if (input.includes("what's your favorite holiday")) {
    output = "I love Christmas! The decorations and spirit are so joyful.";
  } else if (input.includes("do you like reading news")) {
    output =
      "Yes, I try to stay updated. It’s important to know what's happening around the world.";
  } else if (input.includes("how do you plan your week")) {
    output =
      "I usually take some time on Sunday to outline my tasks for the week.";
  } else if (input.includes("what's your favorite way to unwind")) {
    output = "I enjoy taking long baths with some calming music.";
  } else if (input.includes("do you like board games")) {
    output =
      "Yes! They’re a fun way to spend time with friends. What’s your favorite?";
  } else if (input.includes("how do you stay healthy")) {
    output =
      "I eat balanced meals and try to exercise regularly. It's all about balance!";
  } else if (input.includes("what's your go-to comfort food")) {
    output = "Mac and cheese is my ultimate comfort food. What’s yours?";
  } else if (input.includes("do you enjoy gardening")) {
    output = "Yes! It’s rewarding to see plants grow. Do you have a garden?";
  } else if (input.includes("what's your favorite music genre")) {
    output =
      "I love indie music! It has such a unique vibe. What do you listen to?";
  } else if (input.includes("how do you celebrate holidays")) {
    output = "I usually gather with family and enjoy a big meal together.";
  } else if (input.includes("what's your favorite dessert")) {
    output = "I can never resist chocolate cake. What about you?";
  } else if (input.includes("do you prefer the beach or the mountains")) {
    output =
      "I love the beach for relaxation, but the mountains are great for hiking!";
  } else if (input.includes("what's your favorite way to spend a Sunday")) {
    output = "I like to relax, read, and prepare for the week ahead.";
  } else if (input.includes("how do you stay productive")) {
    output = "I make to-do lists and prioritize tasks. It keeps me focused.";
  } else if (input.includes("do you like to dance")) {
    output = "Yes! Dancing is so much fun, especially at parties.";
  } else if (input.includes("what's your favorite app")) {
    output = "I love using meditation apps; they help me relax and focus.";
  } else if (input.includes("how do you enjoy your evenings")) {
    output = "I often watch movies or read. It's my way to unwind.";
  } else if (input.includes("what's your favorite breakfast")) {
    output = "I love pancakes with maple syrup. They’re the best!";
  } else if (input.includes("do you like photography")) {
    output = "Yes! Capturing moments is so rewarding. Do you take photos?";
  } else if (input.includes("how do you deal with challenges")) {
    output =
      "I try to stay positive and look for solutions. It helps me move forward.";
  } else if (input.includes("what's your favorite thing about your job")) {
    output =
      "I love the creativity involved in my work. It keeps things interesting.";
  } else if (input.includes("do you prefer city or country living")) {
    output =
      "I enjoy the vibrancy of the city, but sometimes I crave the peace of the countryside.";
  } else if (input.includes("how do you find work-life balance")) {
    output =
      "I set boundaries for work hours and make time for personal interests.";
  } else if (input.includes("what's your favorite family tradition")) {
    output =
      "We always have a big family dinner on holidays. It’s a special time.";
  } else if (input.includes("what's your favorite ice cream flavor")) {
    output = "I love mint chocolate chip! What’s yours?";
  } else if (input.includes("how do you stay informed about current events")) {
    output = "I read news articles online and listen to podcasts for updates.";
  } else if (input.includes("do you like to volunteer")) {
    output = "Yes, I find it fulfilling to give back to the community.";
  } else if (input.includes("how do you handle difficult conversations")) {
    output = "I try to stay calm and listen actively. Communication is key.";
  } else if (input.includes("what's your favorite outdoor activity")) {
    output =
      "I love biking on scenic trails. It’s such a refreshing experience.";
  } else if (
    input.includes("do you prefer reading physical books or e-books")
  ) {
    output =
      "I prefer physical books. There’s something special about holding a book.";
  } else if (input.includes("what's your favorite workout")) {
    output = "I enjoy yoga for its relaxation and physical benefits.";
  } else if (input.includes("how do you stay connected with family")) {
    output = "I call them regularly and send messages to check in.";
  } else if (
    input.includes("what's your favorite way to celebrate accomplishments")
  ) {
    output = "I like to treat myself to something special, like a nice dinner.";
  } else if (input.includes("do you like to write")) {
    output = "Yes, I enjoy journaling and writing short stories.";
  } else if (input.includes("how often do you go out with friends")) {
    output =
      "I try to go out at least once a week. It’s important to socialize.";
  } else if (
    input.includes("what's your favorite thing to do on a rainy day")
  ) {
    output = "I love curling up with a good book and a cup of tea.";
  } else if (input.includes("how do you plan a vacation")) {
    output =
      "I research destinations, create an itinerary, and book accommodations in advance.";
  } else if (input.includes("what's your favorite family recipe")) {
    output = "My grandmother's lasagna is the best! It’s a family favorite.";
  } else if (
    input.includes("do you prefer watching movies at home or in the theater")
  ) {
    output = "I enjoy the theater experience, but home is cozy too!";
  } else if (input.includes("how do you celebrate achievements")) {
    output = "I like to share the news with friends and enjoy a nice meal.";
  } else if (input.includes("what's your favorite form of exercise")) {
    output = "I really enjoy swimming; it’s refreshing and a great workout.";
  } else if (input.includes("do you like to shop")) {
    output =
      "Sometimes! I enjoy finding unique items, especially at local markets.";
  } else if (input.includes("how do you prioritize your tasks")) {
    output =
      "I focus on deadlines and importance to determine what to tackle first.";
  } else if (input.includes("what's your favorite thing to do alone")) {
    output =
      "I love going for a walk and enjoying some quiet time with my thoughts.";
  } else if (input.includes("do you enjoy cooking for others")) {
    output =
      "Absolutely! It’s always nice to share a meal with friends and family.";
  } else if (input.includes("how do you keep your home organized")) {
    output = "I declutter regularly and have a place for everything.";
  } else if (input.includes("what's your favorite way to spend a day off")) {
    output =
      "I love exploring new places or relaxing at home with a good book.";
  } else if (input.includes("do you like going to concerts")) {
    output = "Yes! Live music has such an amazing atmosphere.";
  } else if (input.includes("how do you manage your time effectively")) {
    output = "I use a calendar to schedule my tasks and set reminders.";
  } else if (input.includes("what's your favorite place to eat out")) {
    output = "I love Italian restaurants! Pasta is my weakness.";
  } else if (input.includes("how do you recharge after a long week")) {
    output =
      "I take it easy, catch up on sleep, and enjoy some leisure activities.";
  } else if (
    input.includes("what's your favorite way to learn something new")
  ) {
    output = "I enjoy taking online courses and watching tutorials.";
  } else if (input.includes("do you prefer staying in or going out")) {
    output = "I enjoy both, but sometimes staying in is more relaxing.";
  } else if (input.includes("how do you handle procrastination")) {
    output = "I set small deadlines for myself to stay on track.";
  } else if (input.includes("what's your favorite way to express creativity")) {
    output = "I love painting and drawing in my free time.";
  } else if (input.includes("do you like to try new foods")) {
    output = "Definitely! I’m always up for trying different cuisines.";
  } else if (input.includes("how do you feel about public speaking")) {
    output = "It makes me a bit nervous, but I try to practice to get better.";
  } else if (
    input.includes("what's your favorite way to connect with nature")
  ) {
    output = "I enjoy hiking and spending time in parks.";
  } else if (input.includes("do you have a favorite quote")) {
    output = "Yes! 'The journey of a thousand miles begins with one step.'";
  } else if (input.includes("how do you prepare for a busy day")) {
    output = "I plan the night before and get a good night's sleep.";
  } else if (
    input.includes("what's your favorite way to celebrate friendships")
  ) {
    output = "I love organizing get-togethers and spending quality time.";
  } else if (input.includes("do you prefer cats or dogs")) {
    output = "I love both, but I have a soft spot for dogs!";
  } else if (input.includes("how do you stay positive")) {
    output = "I focus on gratitude and surround myself with positive people.";
  } else if (input.includes("what's your favorite thing about your hometown")) {
    output = "I love the sense of community and the beautiful parks.";
  } else if (input.includes("how do you deal with setbacks")) {
    output =
      "I try to learn from them and move forward with a positive attitude.";
  } else if (input.includes("what's your favorite way to stay active")) {
    output = "I enjoy going for runs in my neighborhood.";
  } else if (input.includes("do you like to listen to podcasts")) {
    output = "Yes! I find them entertaining and informative.";
  } else if (input.includes("how do you keep your mind sharp")) {
    output = "I enjoy puzzles and reading to keep my brain engaged.";
  } else if (input.includes("what's your favorite way to start the day")) {
    output = "I love starting with a good breakfast and some light stretching.";
  } else if (input.includes("do you prefer summer or winter")) {
    output = "I prefer summer for its warmth and outdoor activities.";
  } else if (input.includes("how do you handle conflicts with others")) {
    output = "I try to communicate openly and find a compromise.";
  } else if (input.includes("what's your favorite type of cuisine")) {
    output = "I love Mediterranean food for its fresh flavors.";
  } else if (input.includes("how do you stay focused while working")) {
    output = "I minimize distractions and take regular breaks.";
  } else if (input.includes("do you enjoy spending time with family")) {
    output = "Absolutely! Family time is precious to me.";
  } else if (input.includes("what's your favorite way to pamper yourself")) {
    output = "I love getting a massage or enjoying a spa day.";
  } else if (input.includes("how do you stay cool in the summer")) {
    output =
      "I drink plenty of water and stay indoors during the hottest hours.";
  } else if (
    input.includes("what's your favorite activity to do with friends")
  ) {
    output = "I love going out for brunch or having game nights.";
  } else if (input.includes("how do you keep your spirits high")) {
    output = "I try to engage in activities that bring me joy and laughter.";
  } else if (input.includes("what's your favorite thing about weekends")) {
    output = "I love having the freedom to relax and do what I enjoy.";
  } else if (input.includes("do you enjoy cooking with others")) {
    output = "Yes! It’s a fun way to bond while creating something delicious.";
  } else if (input.includes("what's your favorite way to express gratitude")) {
    output =
      "I like to write thank-you notes or simply tell someone I appreciate them.";
  } else if (input.includes("how do you build new habits")) {
    output = "I start small and gradually increase my commitment over time.";
  } else if (input.includes("what's your favorite way to give back")) {
    output = "I volunteer at local shelters. It’s fulfilling work.";
  } else if (input.includes("do you prefer mornings or evenings")) {
    output =
      "I’m definitely a morning person; I love the quiet of the early hours.";
  } else if (input.includes("how do you celebrate small wins")) {
    output = "I acknowledge them and sometimes treat myself to something nice.";
  } else if (
    input.includes("what's your favorite way to learn about history")
  ) {
    output = "I enjoy visiting museums and reading historical novels.";
  } else if (input.includes("do you like to go for walks")) {
    output = "Yes! Walking helps me clear my mind and stay active.";
  } else if (input.includes("how do you handle busy schedules")) {
    output = "I prioritize my tasks and make sure to schedule downtime.";
  } else if (input.includes("what's your favorite type of exercise class")) {
    output = "I love yoga classes; they’re calming and great for flexibility.";
  } else if (input.includes("do you enjoy going to the gym")) {
    output = "I do! It’s a great way to stay fit and relieve stress.";
  } else if (input.includes("how do you maintain a positive mindset")) {
    output = "I practice gratitude and surround myself with uplifting people.";
  } else if (
    input.includes("what's your favorite way to spend time outdoors")
  ) {
    output = "I love having picnics in the park with friends.";
  } else if (input.includes("do you like team sports")) {
    output = "Yes! Playing soccer with friends is a lot of fun.";
  } else if (input.includes("how do you keep your energy up during the day")) {
    output = "I eat healthy snacks and stay hydrated.";
  } else if (
    input.includes("what's your favorite way to connect with friends")
  ) {
    output = "I love having coffee dates or going for walks together.";
  } else if (input.includes("do you enjoy brainstorming sessions")) {
    output = "Yes! They can lead to some great ideas and collaboration.";
  } else if (input.includes("how do you celebrate milestones")) {
    output = "I throw a small party or enjoy a nice dinner out.";
  } else if (
    input.includes("what's your favorite thing to do on a sunny day")
  ) {
    output = "I love going to the beach or having a barbecue.";
  } else if (input.includes("do you prefer reading fiction or non-fiction")) {
    output =
      "I enjoy both, but fiction often takes me on more imaginative journeys.";
  } else if (input.includes("how do you celebrate anniversaries")) {
    output =
      "I like to plan a special dinner or a weekend getaway to make it memorable.";
  } else if (input.includes("what's your favorite thing about your job")) {
    output =
      "I enjoy the collaborative environment and the challenges it presents.";
  } else if (
    input.includes("do you prefer online shopping or in-store shopping")
  ) {
    output =
      "I prefer online shopping for convenience, but I enjoy browsing in stores.";
  } else if (input.includes("how do you keep your workspace tidy")) {
    output = "I declutter regularly and have designated spots for everything.";
  } else if (input.includes("what's your favorite time of year")) {
    output = "I love autumn for the beautiful foliage and cooler temperatures.";
  } else if (input.includes("do you enjoy cooking experiments")) {
    output = "Yes! Trying new recipes is always exciting.";
  } else if (input.includes("how do you unwind after a long day")) {
    output = "I like to listen to music or take a warm bath to relax.";
  } else if (input.includes("what's your favorite family activity")) {
    output =
      "We enjoy game nights together; they’re always filled with laughter.";
  } else if (input.includes("do you like to go hiking")) {
    output = "Absolutely! Hiking is a great way to enjoy nature and stay fit.";
  } else if (input.includes("how do you keep yourself accountable for goals")) {
    output =
      "I share my goals with friends and check in regularly for support.";
    //new
  } else if (input.includes("what did you eat for lunch")) {
    output = "I had a delicious salad with grilled chicken. What about you?";
  } else if (input.includes("have you seen any good movies lately")) {
    output =
      "Yes, I watched a fantastic thriller last weekend. Do you like thrillers?";
  } else if (input.includes("what's your favorite hobby")) {
    output =
      "I love reading books in my free time. It helps me unwind. What do you enjoy doing?";
  } else if (input.includes("how do you stay organized")) {
    output =
      "I use a planner and set reminders on my phone. It really helps me keep track of things!";
  } else if (input.includes("do you have any pets")) {
    output =
      "Yes, I have a dog named Max. He's very playful and loves to go for walks.";
  } else if (input.includes("what's your morning routine")) {
    output =
      "I usually start my day with a cup of coffee, followed by a quick workout and a shower.";
  } else if (input.includes("how do you relax after work")) {
    output =
      "I like to watch a show or read a book. It helps me disconnect from the day.";
  } else if (input.includes("what's your favorite weekend activity")) {
    output =
      "I enjoy hiking on weekends. It's a great way to enjoy nature and stay active.";
  } else if (input.includes("thank you")) {
    output =
      "You're welcome. If you have any further questions or key words, please type in.";
    //new
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
    input.includes("viện ngôn ngữ") ||
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
