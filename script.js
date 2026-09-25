// =====================================================
// EDUTRACK - ADVANCED STUDENT RESULT SYSTEM
// =====================================================

// EmailJS Configuration
// Replace these placeholders with your actual EmailJS Account Credentials
const EMAILJS_PUBLIC_KEY = "UZm2-QJuTUp0i98VA"; 
const EMAILJS_SERVICE_ID = "service_li5efya";
const EMAILJS_TEMPLATE_ID = "template_srdcxzv";

// Initialize EmailJS
emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

// =====================================================
// SUBJECTS AND DIFFERENT SUBJECT TEACHERS
// =====================================================

const subjects = [
    { name: "English Language", teacher: "Mrs. Grace" },
    { name: "Mathematics", teacher: "Mr. Michael" },
    { name: "Biology", teacher: "Mrs. Esther" },
    { name: "Chemistry", teacher: "Mr. David" },
    { name: "Physics", teacher: "Mr. Samuel" },
    { name: "Computer Studies", teacher: "Mr. Daniel" },
    { name: "Civic Education", teacher: "Mrs. Blessing" },
    { name: "Literature", teacher: "Mrs. Victoria" },
    { name: "Agricultural Science", teacher: "Mr. Peter" },
    { name: "Economics", teacher: "Miss. Janet" }
];

// =====================================================
// STUDENTS
// =====================================================

const students = [
    {
        name: "Igenegbai Dickson Morris",
        id: "ET-001",
        className: "SS1",
        attendance: "97%",
        position: "1st",
        scores: [86, 91, 88, 84, 93, 95, 89, 87, 90, 92],
        report: "Dickson has demonstrated excellent academic performance this term. He participates actively in class, submits assignments on time and shows strong understanding across most subjects."
    },
    {
        name: "Divine Adelenka",
        id: "ET-002",
        className: "SS1",
        attendance: "95%",
        position: "2nd",
        scores: [89, 87, 91, 85, 88, 94, 86, 90, 84, 89],
        report: "Divine is a hardworking and responsible student. She performs strongly in class and maintains good attendance."
    },
    {
        name: "Petra Agbo",
        id: "ET-003",
        className: "SS1",
        attendance: "96%",
        position: "3rd",
        scores: [84, 92, 86, 89, 87, 91, 85, 88, 90, 86],
        report: "Petra demonstrates good academic ability and participates positively in classroom activities."
    },
    {
        name: "Justice Ibekwe",
        id: "ET-004",
        className: "SS1",
        attendance: "94%",
        position: "4th",
        scores: [82, 88, 90, 83, 85, 92, 87, 84, 89, 91],
        report: "Justice is cooperative and shows good understanding of most lessons. Continued revision will improve his performance."
    },
    {
        name: "Big Joe",
        id: "ET-005",
        className: "SS1",
        attendance: "93%",
        position: "5th",
        scores: [86, 84, 88, 90, 81, 89, 85, 87, 92, 83],
        report: "Big Joe participates actively and performs well in practical and theoretical subjects."
    },
    {
        name: "Clara Esose",
        id: "ET-006",
        className: "SS1",
        attendance: "98%",
        position: "6th",
        scores: [90, 86, 83, 88, 85, 91, 84, 89, 87, 82],
        report: "Clara is focused and responsible. Her excellent attendance supports her steady academic progress."
    },
    {
        name: "Joyce Jhon",
        id: "ET-007",
        className: "SS1",
        attendance: "92%",
        position: "7th",
        scores: [81, 85, 87, 80, 84, 90, 82, 86, 88, 85],
        report: "Joyce is respectful and participates in lessons. More revision in difficult subjects is recommended."
    },
    {
        name: "Osama Bladwin",
        id: "ET-008",
        className: "SS1",
        attendance: "91%",
        position: "8th",
        scores: [79, 83, 85, 81, 88, 86, 80, 84, 87, 82],
        report: "Osama is improving steadily and participates well during practical activities."
    },
    {
        name: "Flowish Tunde",
        id: "ET-009",
        className: "SS1",
        attendance: "90%",
        position: "9th",
        scores: [78, 81, 84, 79, 83, 87, 80, 82, 85, 81],
        report: "Flowish has shown steady progress and should continue practicing challenging topics."
    },
    {
        name: "Clair Peter",
        id: "ET-010",
        className: "SS1",
        attendance: "89%",
        position: "10th",
        scores: [76, 80, 82, 78, 81, 84, 79, 83, 85, 80],
        report: "Clair is making progress but should devote more time to revision and assignment practice."
    }
];

// =====================================================
// GRADE SYSTEM & REMARKS
// =====================================================

function getGrade(score) {
    if (score >= 75) return "A";
    if (score >= 65) return "B";
    if (score >= 55) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
}

function getRemark(score) {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
}

// =====================================================
// SEARCH STUDENTS
// =====================================================

const searchBox = document.getElementById("search");
const studentList = document.getElementById("students");

function displayStudents(searchText = "") {
    studentList.innerHTML = "";

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredStudents.length === 0) {
        studentList.innerHTML = `<p class="no-student">No student found.</p>`;
        return;
    }

    filteredStudents.forEach(student => {
        const card = document.createElement("div");
        card.className = "student";
        card.innerHTML = `
            <b>${student.name}</b>
            <small>${student.id}</small>
            <small>Class: ${student.className}</small>
            <small>Position: ${student.position}</small>
        `;
        card.onclick = function () {
            openStudent(student);
        };
        studentList.appendChild(card);
    });
}

searchBox.addEventListener("input", (e) => {
    displayStudents(e.target.value);
});

// =====================================================
// OPEN STUDENT PROFILE
// =====================================================

let selectedStudent = null;

function openStudent(student) {
    selectedStudent = student;

    document.getElementById("profile").classList.remove("hidden");
    document.getElementById("name").textContent = student.name;
    document.getElementById("id").textContent = "Student ID: " + student.id;
    document.getElementById("className").textContent = student.className;
    document.getElementById("attendance").textContent = student.attendance;
    document.getElementById("position").textContent = student.position;
    document.getElementById("report").textContent = student.report;
    document.getElementById("teacher").textContent = "Mr. Daniel";

    document.getElementById("avatar").textContent = student.name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    createResult(student);

    window.scrollTo({
        top: document.getElementById("profile").offsetTop - 20,
        behavior: "smooth"
    });
}

// =====================================================
// CREATE RESULT TABLE
// =====================================================

function createResult(student) {
    const resultBody = document.getElementById("resultBody");
    resultBody.innerHTML = "";

    let totalScore = 0;

    subjects.forEach((subject, index) => {
        const total = student.scores[index];
        const ca = Math.round(total * 0.30);
        const exam = total - ca;
        const grade = getGrade(total);

        totalScore += total;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <b>${subject.name}</b><br>
                <small>Teacher: ${subject.teacher}</small>
            </td>
            <td>${ca}</td>
            <td>${exam}</td>
            <td><b>${total}</b></td>
            <td class="grade">${grade}</td>
        `;
        resultBody.appendChild(row);
    });

    const average = Math.round(totalScore / subjects.length);

    document.getElementById("totalScore").textContent = totalScore + " / " + (subjects.length * 100);
    document.getElementById("avgScore").textContent = average + "%";
    document.getElementById("average").textContent = average + "%";
    document.getElementById("overallGrade").textContent = getGrade(average);
}

// =====================================================
// ADVANCED GMAIL COMPLAINT SENDING
// =====================================================

document.getElementById("send").onclick = async function () {
    if (!selectedStudent) {
        alert("Please select a student first.");
        return;
    }

    const complaint = document.getElementById("complaintText").value.trim();
    const teacher = document.getElementById("complaintTeacher").value.trim();
    const date = document.getElementById("date").value;

    if (!complaint) {
        alert("Please enter a complaint.");
        return;
    }

    if (!teacher) {
        alert("Please enter the teacher name.");
        return;
    }

    const sendButton = document.getElementById("send");
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    const emailData = {
        to_email: "igenegbaidickson0@gmail.com",
        student_name: selectedStudent.name,
        student_id: selectedStudent.id,
        student_class: selectedStudent.className,
        teacher_name: teacher,
        complaint_date: date,
        complaint: complaint,
        student_position: selectedStudent.position,
        attendance: selectedStudent.attendance
    };

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            emailData
        );

        console.log("Email sent successfully:", response);

        document.getElementById("success").classList.remove("hidden");
        document.getElementById("complaintText").value = "";

        sendButton.textContent = "✓ Sent Successfully";
    } catch (error) {
        console.error("Email sending error:", error);
        const status = error && error.status ? error.status : "unknown";
        const detail = error && error.text ? error.text : (error && error.message) || "No further details returned.";
        alert(
            "The complaint could not be sent.\n\n" +
            "Status: " + status + "\n" +
            "Details: " + detail + "\n\n" +
            "Common causes: expired Gmail connection in EmailJS, a deleted/renamed template, a domain not on the allowed origins list, or the monthly send quota being reached."
        );
        sendButton.textContent = "✓ Send Complaint";
    }

    setTimeout(() => {
        sendButton.disabled = false;
        sendButton.textContent = "✓ Send Complaint";
    }, 3000);
};

// Set default date
document.getElementById("date").value = new Date().toISOString().split("T")[0];

// Initial call
displayStudents();
