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

const students = [

    /* GRADE 7 A — 25 STUDENTS */

    {
        fullName: "Student Name One",
        classCode: "G7A"
    },

    /* Add the other Grade 7 A students here */


    /* GRADE 7 B — 25 STUDENTS */

    {
        fullName: "Student Name Two",
        classCode: "G7B"
    },

    /* Add the other Grade 7 B students here */


    /* GRADE 7 C — 24 STUDENTS */

    {
        fullName: "Student Name Three",
        classCode: "G7C"
    },

    /* Add the other Grade 7 C students here */


    /* EB7 — 20 STUDENTS */

    {
        fullName: "Nom Complet Eleve",
        classCode: "EB7"
    },

    /* Ajoutez les autres élèves de EB7 ici */


    /* GRADE 8 A — 22 STUDENTS */

    {
        fullName: "Student Name Four",
        classCode: "G8A"
    },

    /* Add the other Grade 8 A students here */


    /* GRADE 8 B — 22 STUDENTS */

    {
        fullName: "Student Name Five",
        classCode: "G8B"
    },

    /* Add the other Grade 8 B students here */


    /* GRADE 8 C — 22 STUDENTS */

    {
        fullName: "Student Name Six",
        classCode: "G8C"
    },

    /* Add the other Grade 8 C students here */


    /* EB8 — 12 STUDENTS */

    {
        fullName: "Nom Complet Eleve Deux",
        classCode: "EB8"
    },

    /* Ajoutez les autres élèves de EB8 ici */


    /* GRADE 10 A — 24 STUDENTS */

    {
        fullName: "Student Name Seven",
        classCode: "G10A"
    },

    /* Add the other Grade 10 A students here */


    /* GRADE 10 B — 23 STUDENTS */

    {
        fullName: "Student Name Eight",
        classCode: "G10B"
    },

    /* Add the other Grade 10 B students here */


    /* GRADE 10 C — 23 STUDENTS */

    {
        fullName: "Student Name Nine",
        classCode: "G10C"
    },

    /* Add the other Grade 10 C students here */


    /* SECONDE — 8 STUDENTS */

    {
        fullName: "Nom Complet Eleve Trois",
        classCode: "SECONDE"
    }

    /* Do not add a comma after the final student */
];


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


        const foundStudent =
            students.find(function (student) {
                const studentClass =
                    classes[student.classCode];

                if (!studentClass) {
                    return false;
                }

                const correctName =
                    normalizeName(student.fullName) ===
                    enteredName;

                const correctDepartment =
                    !selectedDepartment ||
                    normalizeName(studentClass.department) ===
                    normalizeName(selectedDepartment);

                const correctLevel =
                    !selectedLevel ||
                    normalizeName(studentClass.level) ===
                    normalizeName(selectedLevel);

                return (
                    correctName &&
                    correctDepartment &&
                    correctLevel
                );
            });


        if (!foundStudent) {
            showError(
                "Name not found in this level. " +
                "Nom introuvable dans ce niveau. " +
                "Please verify the spelling or ask an ECS staff member."
            );

            return;
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