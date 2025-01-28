document.addEventListener("DOMContentLoaded", function () {
    const COLLEGES = {
        "atharva_college_of_engineering": {
            name: "Atharva College of Engineering",
            location: "Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad (W), Mumbai 400095, India",
            type: "AICTE Approved College",
            officials: {
                executive_president_founder: "Honourable Shri Sunil Rane Sir",
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
                executive_president_founder: "Honourable Shri Sunil Rane Sir",
                principal: "Dr. Preety Jain",
                trustees: ["Shrimati Pallavi Rane Madam", "Shrimati Varsha Rane Madam"],
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
                hod: "Vinod Yadav"
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
        // Check if the question is related to a specific college
        question = question.toLowerCase();

        if (["hello", "hi", "hey"].some(keyword => question.includes(keyword))) {
            return "How can I help you?";
        }
        //FOR ALL
        if (/\b(name|director)\b/.test(question)) {
            return `The name of director of the college is Dr. Pravin Newarde.`;
        }
        if (/\b(president|founder)\b/.test(question)) {
            return `The name of president and founder of the college is Honourable Shri Sunil Rane Sir.`;
        }
        if (/\b(trustees)\b/.test(question)) {
            return `The full name of trustee of the college are Shrimati Pallavi Rane Madam", "Shrimati Varsha Rane Madam.`;
        }
        // ACE
        if (/\b(principal|atharva college of engineering|ace)\b/.test(question)) {
            return `The principal of the college is Dr. Ramesh Kulkarni.`;
        }
        // HMCT
        if (/\b(principal|atharva college of hotel management and catering technology|ahmct)\b/.test(question)) {
            return `The name of principal of the college is Dr. Preety Jain.`;
        }
        // AIFT
        if (/\b(hod|atharva institute of film and television|aift)\b/.test(question)) {
            return `The Hod of the college is Saurabh DeshPandey.`;
        }
        // ASFA
        if (/\b(hod|atharva school of fashion and arts|asfa)\b/.test(question)) {
            return `The Hod of the college is Tanveer Khan.`;
        }
        // AIMS
        if (/\b(director of atharva institute of management studies|aims)\b/.test(question)) {
            return `The directors of the college are Dr. Henry Babu & Dr. Swati Prab.`;
        }
        // ADS
        if (/\b(hod|atharva data science)\b/.test(question)) {
            return `The Hod of the college is Prof. Vinod Yadav.`;
        }
        // Check if the question is about courses
        if (/\b(courses|course)\b/.test(question)) {
            if (/\b(atharva college of engineering)\b/.test){
                return `B.E in Computer Engineering, seats: 120, hod: Dr. Suvarna Pansambal
                    B.E in Information Technology, seats: 120, hod: Dr. Ulhas Kumar
                    B.E in Electronics and Telecommunication, seats: 120, hod: Dr. Bhavin Shah
                    B.E in Electronics and Computer Science, seats: 60, hod: Dr. Sangeeta Kotecha
                    B.E in Electrical Engineering, seats: 60.`;
            }
            if (/\b(atharva college of hotel management and catering technology)\b/.test(question)){
                return `B.Sc in Hospitality Studies, seats: 60, duration: "3 years", affiliated to: University of Mumbai
                    B.A in Culinary Arts, seats: 60, duration: "3 years", affiliated to: University of Mumbai
                    Craftsmanship Courses in Food & Beverage Service
                    Craftsmanship Courses in Cookery.`;
            }
            if (/\b(atharva institute of film and television)\b/.test(question)){
                return `B.A in Films, Television & New Media Production, duration: "3 years", affiliated to: University of Mumbai
                    Bachelor of Arts in Multimedia & Mass Communication, affiliated to: Mumbai University, seats: 60.`;
            }
            if (/\b(atharva school of fashion and arts)\b/.test(question)) {
                return `B.A in Fashion Designing, duration: "3 years", affiliated to:University of Mumbai
                    Visual Communication, duration: "2 years"
                    Retail Management, duration: "1 year"
                    Fashion Photography", duration: "1 year"
                    Garment Manufacturing Technology", duration: "1 year.`;
            }
            if (/\b(atharva institute of management studies)\b/.test(question)) {
                return `PGDM, Post Graduate Diploma in Management, duration: "2 years", specialization: ["Finance", "Marketing", "IT"]
                    MMS, Master in Management Studies", duration: "2 years", specialization: ["Finance", "Marketing", "IT"].`;
            }
            if (/\b(atharva data science)\b/.test(question)) {
                return `Bachelor of Science in Data Science, duration: "3 years", affiliated to:University of Mumbai.`;
            }
        }
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