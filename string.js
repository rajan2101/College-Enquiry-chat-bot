document.addEventListener("DOMContentLoaded", function () {
    var ace = "Atharva College of Engineering"
    const COLLEGES = {
        "atharva_college_of_engineering": {
            name: "Atharva College of Engineering",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "AICTE Approved College",
            officials: {
                founder: "Honourable Shri Sunil Rane Sir",
                principal: "Dr. Ramesh Kulkarni",
                director: "Dr. Pravin Newarde",
                trustees: ["Shrimati Pallavi Rane Madam", "Shrimati Varsha Rane Madam"]
            },
            courses: [
                { name: "B.E in Computer Engineering", seats: 120, hod: "Dr. Suvarna Pansambal" },
                { name: "B.E in Information Technology", seats: 120, hod: "Dr. Ulhas Kumar" },
                { name: "B.E in Electronics and Telecommunication", seats: 120, hod: "Dr. Bhavin Shah" },
                { name: "B.E in Electronics and Computer Science", seats: 60, hod: "Dr. Sangeeta Kotecha" },
                { name: "B.E in Electrical Engineering", seats: 60 }
            ]
        },
        "atharva_college_of_hotel_management": {
            name: "Atharva College of Hotel Management and Catering Technology",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "Affiliated to University of Mumbai",
            officials: {
                principal: "Dr. Preety Jain",
                vice_president: "Sir Joseph Furtado"
            },
            courses: [
                { name: "B.Sc in Hospitality Studies", seats: 60, duration: "3 years", affiliated_to: "University of Mumbai" },
                { name: "B.A in Culinary Arts", seats: 60, duration: "3 years", affiliated_to: "University of Mumbai" },
                { name: "Craftsmanship Courses in Food & Beverage Service" },
                { name: "Craftsmanship Courses in Cookery" }
            ]
        },
        "atharva_institute_of_films_and_television": {
            name: "Atharva Institute of Films and Television",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "Affiliated to University of Mumbai",
            officials: {
                hod: "Saurabh DeshPandey"
            },
            courses: [
                { name: "B.A in Films, Television & New Media Production", duration: "3 years", affiliated_to: "University of Mumbai" },
                { name: "Bachelor of Arts in Multimedia & Mass Communication", affiliated_to: "Mumbai University", seats: 60 }
            ]
        },
        "atharva_school_of_fashion_and_arts": {
            name: "Atharva School of Fashion and Arts",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "Affiliated to University of Mumbai",
            officials: {
                hod: "Tanveer Khan"
            },
            courses: [
                { name: "B.A in Fashion Designing", duration: "3 years", affiliated_to: "University of Mumbai" },
                { name: "Visual Communication", duration: "2 years" },
                { name: "Retail Management", duration: "1 year" },
                { name: "Fashion Photography", duration: "1 year" },
                { name: "Garment Manufacturing Technology", duration: "1 year" }
            ]
        },
        "atharva_institute_of_management_studies": {
            name: "Atharva Institute of Management Studies",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "Affiliated to University of Mumbai",
            officials: {
                pgdm_director: "Dr. Henry Babu",
                mms_director: "Dr. Swati Prab"
            },
            courses: [
                { name: "PGDM, Post Graduate Diploma in Management", duration: "2 years", specialization: ["Finance", "Marketing", "IT"] },
                { name: "MMS, Master in Management Studies", duration: "2 years" }
            ]
        },
        "atharva_data_science": {
            name: "Atharva Data Science",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "Affiliated to University of Mumbai",
            officials: {
                hod: "Vinod Yadav",
                principal: "Dr. Preety Jain"
            },
            courses: [
                { name: "Bachelor of Science in Data Science", duration: "3 years", affiliated_to: "University of Mumbai" }
            ]
        }
    };

    const chatMessages = document.querySelector(".chat-messages");
    const userInput = document.getElementById("user-input");

    function appendMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender + "-message");
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
    }

    function answerQuestion(question) {
        question = question.toLowerCase();

        // Check if the question is related to a specific college
        for (const collegeKey in COLLEGES) {
            const college = COLLEGES[collegeKey];
            if (question.includes(college.name.toLowerCase())) {
                return getCollegeInfo(college);
            }
        }
        if (["hello", "hi", "hey"].some(keyword => question.includes(keyword))) {
            return "How can I help you?";
        }
        if (/\b(name|director)\b/.test(question)) {
            return `The name of director of the college is Dr. Pravin Nemade.`;
        }
        if (/\b(president|founder|who is the founder of the college|who is the founder of this college)\b/.test(question)) {
            return `The name of president and founder of the college is Honourable Shri Sunil Rane Sir.`;
        }
        if (/\b(trustee|trustees|trusty)\b/.test(question)) {
            return `The trustee of the college are Shrimati Pallavi Rane Madam, Shrimati Varsha Rane Madam.`;
        }
        if (/\b(sunil rane sir|sunil rane)\b/.test(question)) {
            return `He is the founder and president of Atharva Group of Institutes.`;
        }
        if (/\b(infrastructure)\b/.test(question)) {
            return `There are three main buildings namely, Phase 1 ,Phase 2 and Phase 3 and all of these phases have great infrastructure and developmentS.`;
        }
        if (/\b(founded)\b/.test(question)) {
            return `ATHARAVA WAS FOUNDED IN 1999.`;
        }
        if (/\b(completed|passed)\b/.test(question)) {
            return `ATHARAVA HAS COMPLETED 24 YEARS.`;
        }
        if (/\b(pravin nemade sir|pravin nemade)\b/.test(question)) {
            return `He is the director of Atharva Group of Institutes.`;
        }
        return 'I cant provide the information because the data is limited.U can contact here for more Tel.: 91-022-40294949'

    }
    function getCollegeInfo(college) {
        let info = `College Name: ${college.name}\nLocation: ${college.location}\nType: ${college.type}\n`;

        if (college.officials) {
            info += "Officials:\n";
            for (const role in college.officials) {
                info += `${role}: ${college.officials[role]}\n`;
            }
        }

        if (college.courses) {
            info += "Courses Offered:\n";
            college.courses.forEach(course => {
                info += `${course.name}`;
                if (course.seats) {
                    info += ` (Seats: ${course.seats})`;
                }
                if (course.duration) {
                    info += ` (Duration: ${course.duration})`;
                }
                if (course.affiliated_to) {
                    info += ` (Affiliated to: ${course.affiliated_to})`;
                }
                if (course.hod) {
                    info += ` (HOD: ${course.hod})`;
                }
                info += "\n";
            });
        }

        return info;
    }

    function handleUserInput() {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") {
            return;
        }

        appendMessage("You: " + userMessage, "user");

        if (["exit", "quit", "bye"].includes(userMessage.toLowerCase())) {
            appendMessage("ChatBot: Goodbye!", "bot");
            userInput.setAttribute("disabled", "true");
        } else {
            const response = answerQuestion(userMessage);
            appendMessage("ChatBot: " + response, "bot");
        }

        userInput.value = "";
    }

    document.getElementById("send-button").addEventListener("click", handleUserInput);

    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
