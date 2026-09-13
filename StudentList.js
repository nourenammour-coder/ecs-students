/* =====================================================
   CLASS INFORMATION

   Grade 10 C information was not provided.
   Replace "TO UPDATE" with its block and floor.
===================================================== */

const classes = {
    G7A: {
        department: "English",
        level: "G7",
        className: "Grade 7 - A",
        block: "Block D",
        floor: "Floor 2"
    },

    G7B: {
        department: "English",
        level: "G7",
        className: "Grade 7 - B",
        block: "Block C",
        floor: "Floor 1"
    },

    G7C: {
        department: "English",
        level: "G7",
        className: "Grade 7 - C",
        block: "Block B",
        floor: "Floor 1"
    },

    EB7: {
        department: "French",
        level: "EB7",
        className: "EB7",
        block: "Bloc E",
        floor: "Étage 3"
    },

    G8A: {
        department: "English",
        level: "G8",
        className: "Grade 8 - A",
        block: "Block C",
        floor: "Floor 1"
    },

    G8B: {
        department: "English",
        level: "G8",
        className: "Grade 8 - B",
        block: "Block C",
        floor: "Floor 1"
    },

    G8C: {
        department: "English",
        level: "G8",
        className: "Grade 8 - C",
        block: "Block C",
        floor: "Floor 1"
    },

    EB8: {
        department: "French",
        level: "EB8",
        className: "EB8",
        block: "Bloc E",
        floor: "Étage 3"
    },

    G10A: {
        department: "English",
        level: "G10",
        className: "Grade 10 - A",
        block: "Block D",
        floor: "Floor 2"
    },

    G10B: {
        department: "English",
        level: "G10",
        className: "Grade 10 - B",
        block: "Block D",
        floor: "Floor 2"
    },

    G10C: {
        department: "English",
        level: "G10",
        className: "Grade 10 - C",
        block: "TO UPDATE",
        floor: "TO UPDATE"
    },

    SECONDE: {
        department: "French",
        level: "Seconde",
        className: "2nde",
        block: "Bloc E",
        floor: "Étage 3"
    }
};


/* =====================================================
   STUDENT NAMES

   Replace the examples with the real student names.

   Available class codes:

   G7A, G7B, G7C, EB7
   G8A, G8B, G8C, EB8
   G10A, G10B, G10C, SECONDE
===================================================== */

/* =====================================================
   STUDENTS GROUPED BY CLASS

   Write only the student names inside their class.
   Keep quotation marks and commas between names.
===================================================== */

const studentsByClass = {

    /* GRADE 7 A — 25 STUDENTS */

    G7A: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 25 students
    ],


    /* GRADE 7 B — 25 STUDENTS */

    G7B: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 25 students
    ],


    /* GRADE 7 C — 24 STUDENTS */

    G7C: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 24 students
    ],


    /* EB7 — 20 ÉLÈVES */

    EB7: [
"Adriana Fadi Kaidbey" ,
"Ahmad Wissam Meaini" ,
"Ali Hani Fayad Hamadeh" ,
"Ali Ihab Jabber" ,
"Elsa Issa Awada" ,
"Jihad Jad Reslan" ,
"Khalil Izzat Ghandour" ,
"Line Hasan Reslan" ,
"Lynn Mahmoud Nasser" ,
"Malak Ali Ghabriss" ,
"Manessa Rabih Berro" ,
"Mariam Ali Majed" ,
"Mira Kassem Saad" ,
"Mona Darwish Serhal" ,
"Noura Nabil Assi" ,
"Reina Hasan Al Chaar" ,
"Syla Rabih Halabi" ,
"Talia Mohammad Hammoud" ,
"Youssef Wissam Houry Homsi" ,

        // Continuez jusqu’à 20 élèves
    ],


    /* GRADE 8 A — 22 STUDENTS */

    G8A: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 22 students
    ],


    /* GRADE 8 B — 22 STUDENTS */

    G8B: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 22 students
    ],


    /* GRADE 8 C — 22 STUDENTS */

    G8C: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 22 students
    ],


    /* EB8 — 12 ÉLÈVES */

    EB8: [
        "Nom Complet Élève Un",
        "Nom Complet Élève Deux",
        "Nom Complet Élève Trois"
        // Continuez jusqu’à 12 élèves
    ],


    /* GRADE 10 A — 24 STUDENTS */

    G10A: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 24 students
    ],


    /* GRADE 10 B — 23 STUDENTS */

    G10B: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 23 students
    ],


    /* GRADE 10 C — 23 STUDENTS */

    G10C: [
        "Student One Full Name",
        "Student Two Full Name",
        "Student Three Full Name"
        // Continue until 23 students
    ],


    /* SECONDE — 8 ÉLÈVES */

    SECONDE: [
        "Nom Complet Élève Un",
        "Nom Complet Élève Deux",
        "Nom Complet Élève Trois"
        // Continuez jusqu’à 8 élèves
    ]

};

/* MOTIVATIONAL MESSAGES */

const frenchMessages = [
    "Une nouvelle aventure commence aujourd’hui. Fais-en une année inoubliable !",
    "Cette année est la tienne : apprends, grandis et brille !",
    "Sois curieux, courageux et crois toujours en toi !",
    "Ta place est prête et ton nouveau voyage commence maintenant !",
    "Rêve grand, avance avec confiance et laisse briller ta lumière !"
];

const englishMessages = [
    "A new adventure begins today. Make it an unforgettable year!",
    "This is your year to learn, grow and shine!",
    "Be curious, be courageous and always believe in yourself!",
    "Your place is ready and your new journey begins now!",
    "Dream big, move forward with confidence and let your light shine!"
];


/* HTML ELEMENTS */

const searchArea =
    document.getElementById("searchArea");

const searchForm =
    document.getElementById("searchForm");

const studentNameInput =
    document.getElementById("studentName");

const errorMessage =
    document.getElementById("errorMessage");

const studentResult =
    document.getElementById("studentResult");

const levelBadge =
    document.getElementById("levelBadge");

const resultSmallTitle =
    document.getElementById("resultSmallTitle");

const studentWelcome =
    document.getElementById("studentWelcome");

const welcomeMessage =
    document.getElementById("welcomeMessage");

const departmentLabel =
    document.getElementById("departmentLabel");

const departmentValue =
    document.getElementById("departmentValue");

const classLabel =
    document.getElementById("classLabel");

const classValue =
    document.getElementById("classValue");

const blockLabel =
    document.getElementById("blockLabel");

const blockValue =
    document.getElementById("blockValue");

const floorLabel =
    document.getElementById("floorLabel");

const floorValue =
    document.getElementById("floorValue");

const classDirection =
    document.getElementById("classDirection");

const motivationCard =
    document.getElementById("motivationCard");

const restartButton =
    document.getElementById("restartButton");
/* CAPITALIZE THE NAME WHILE THE STUDENT IS TYPING */

studentNameInput.addEventListener("input", function () {
    const originalPosition = studentNameInput.selectionStart;

    studentNameInput.value =
        studentNameInput.value
            .toLowerCase()
            .replace(
                /(^|[\s'-])([a-zà-ÿ])/g,
                function (match, separator, letter) {
                    return separator + letter.toUpperCase();
                }
            );

    studentNameInput.setSelectionRange(
        originalPosition,
        originalPosition
    );
});

/* READ THE DEPARTMENT AND LEVEL FROM THE QR LINK */

const websiteParameters =
    new URLSearchParams(window.location.search);

const selectedDepartment =
    websiteParameters.get("department");

const selectedLevel =
    websiteParameters.get("level");


if (selectedDepartment || selectedLevel) {
    levelBadge.style.display = "block";

    if (selectedDepartment === "French") {
        levelBadge.textContent =
            `Département français • ${selectedLevel || ""}`;
    } else {
        levelBadge.textContent =
            `English Department • ${selectedLevel || ""}`;
    }
}


/* CAPITALIZE EACH PART OF THE NAME */

function capitalizeFullName(name) {
    return name
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .replace(
            /(^|[\s'-])([a-zà-ÿ])/g,
            function (match, separator, letter) {
                return separator + letter.toUpperCase();
            }
        );
}


/* NORMALIZE THE NAME FOR SEARCHING */

function normalizeName(name) {
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}


/* SHOW AN ERROR */

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("visible");
    studentNameInput.focus();
}


/* SEARCH FOR THE STUDENT */

searchForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const capitalizedName =
            capitalizeFullName(studentNameInput.value);

        studentNameInput.value = capitalizedName;

        const enteredName =
            normalizeName(capitalizedName);


        if (enteredName.split(" ").length < 2) {
            showError(
                "Please enter your complete name. " +
                "Écris ton nom complet, s’il te plaît."
            );

            return;
        }


        let foundStudent = null;

for (const classCode in studentsByClass) {
    const studentClass = classes[classCode];

    if (!studentClass) {
        continue;
    }

    const correctDepartment =
        !selectedDepartment ||
        normalizeName(studentClass.department) ===
        normalizeName(selectedDepartment);

    const correctLevel =
        !selectedLevel ||
        normalizeName(studentClass.level) ===
        normalizeName(selectedLevel);

    if (!correctDepartment || !correctLevel) {
        continue;
    }

    const matchingName =
        studentsByClass[classCode].find(function (studentName) {
            return normalizeName(studentName) === enteredName;
        });

    if (matchingName) {
        foundStudent = {
            fullName: matchingName,
            classCode: classCode
        };

        break;
    }
}

        showStudent(foundStudent);
    }
);


/* DISPLAY THE STUDENT RESULT */

function showStudent(student) {
    const studentClass =
        classes[student.classCode];

    const displayedName =
        capitalizeFullName(student.fullName);

    const messageNumber =
        displayedName.length % frenchMessages.length;


    errorMessage.classList.remove("visible");
    searchArea.classList.add("hidden");
    levelBadge.style.display = "none";
    studentResult.classList.add("visible");


    if (studentClass.department === "French") {
        document.documentElement.lang = "fr";

        resultSmallTitle.textContent =
            "Bienvenue à Evergreen Community School";

        studentWelcome.textContent =
            `Bienvenue, ${displayedName} !`;

        welcomeMessage.textContent =
            "Nous sommes très heureux de t’accueillir. " +
            "Voici les informations pour rejoindre ta classe.";

        departmentLabel.textContent =
            "Département";

        departmentValue.textContent =
            "Département français";

        classLabel.textContent =
            "Classe";

        classValue.textContent =
            studentClass.className;

        blockLabel.textContent =
            "Bloc";

        blockValue.textContent =
            studentClass.block;

        floorLabel.textContent =
            "Étage";

        floorValue.textContent =
            studentClass.floor;

        classDirection.textContent =
            `Cherche l’étiquette « ${studentClass.className} » ` +
            "affichée sur le mur à l’extérieur de ta salle.";

        motivationCard.textContent =
            frenchMessages[messageNumber];

        restartButton.textContent =
            "← Retour à la recherche";

    } else {
        document.documentElement.lang = "en";

        resultSmallTitle.textContent =
            "Welcome to Evergreen Community School";

        studentWelcome.textContent =
            `Welcome, ${displayedName}!`;

        welcomeMessage.textContent =
            "We are very happy to have you with us. " +
            "Here is the information you need to find your classroom.";

        departmentLabel.textContent =
            "Department";

        departmentValue.textContent =
            "English Department";

        classLabel.textContent =
            "Class";

        classValue.textContent =
            studentClass.className;

        blockLabel.textContent =
            "Block";

        blockValue.textContent =
            studentClass.block;

        floorLabel.textContent =
            "Floor";

        floorValue.textContent =
            studentClass.floor;

        classDirection.textContent =
            `Look for the “${studentClass.className}” label ` +
            "on the wall outside your classroom.";

        motivationCard.textContent =
            englishMessages[messageNumber];

        restartButton.textContent =
            "← Back to search";
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* RETURN TO THE SEARCH PAGE */

restartButton.addEventListener(
    "click",
    function () {
        studentResult.classList.remove("visible");
        searchArea.classList.remove("hidden");

        if (selectedDepartment || selectedLevel) {
            levelBadge.style.display = "block";
        }

        studentNameInput.value = "";
        errorMessage.classList.remove("visible");

        document.documentElement.lang = "en";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(function () {
            studentNameInput.focus();
        }, 400);
    }
);