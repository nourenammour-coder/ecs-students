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
"Adam Hani Al Broush" ,
"Adam Mohammad Khalifeh" ,
"Ali Ahmad Hammoud" ,
"Ali Imad Ibrahim" ,
"Aya Khalil Hashem" ,
"Aya Mohamad El Zein" ,
"Ciel Youssef Al Mawla" ,
"Elena Hasan Al Halabi" ,
"Elia Youssef Moughnieh" ,
"Hadi Mohamad Jibai" ,
"Hanan Walid Akli" ,
"Ilia Mohammad Hassan" ,
"Julie Ramzi Malaeb" ,
"Karim Maher Al Saifi" ,
"Leya Ahmad Farhat" ,
"Mahdi Ali Kanaan Omar" ,
"Mahmoud Zuheir Bahloul" ,
"Mohammad Ali Ghader" ,
"Mohammad Ihab Al Hajj Shehade" ,
"Mostafa Ahmad Itani" ,
"Naya Cheikh Louay El Emad" ,
"Naya Hussein Saad" ,
"Omar Mohamad AL Nahass" ,
"Remie Mazen Al Halabi" ,
"Rim Haidar Awada"
        // Continue until 25 students
    ],


    /* GRADE 7 B — 25 STUDENTS */

    G7B: [
"Ali Hussein Harkous" ,
"Alma Hassan Al Fata" ,
"Amir Talal Shaddad" ,
"Aya Mohamad Dalli" ,
"Badih Tarek Yassine" ,
"Batoul Hussein Khalife" ,
"Celia Hasan Saeed" ,
"Dani Shadi Bashroush" ,
"Ella Nassim AL Hajjar" ,
"Fadel Mazen Abbas" ,
"Joy Jamil Ghasham" ,
"Karim Mohammad Al Sayed" ,
"Lea Hussein Helbawi" ,
"Liam Marwan El Souky" ,
"Lyn Mohamad Bainy" ,
"Maria Khodr Nasreddine" ,
"Marwan Jad Al Halabi" ,
"Maysa Marwan Saab" ,
"Mohammad Ali Abbas Al Outa" ,
"Nai Arkan Harb" ,
"Rafic Basel Al Katerji" ,
"Rena Shadi Alameddine" ,
"Rimi Adel Chami" ,
"Ward Basel Al Moughrabi" ,
"Zeina Nader Taher"
        // Continue until 25 students
    ],


    /* GRADE 7 C — 24 STUDENTS */

    G7C: [
"Adam Ihab Halaweh" ,
"Ahmad Samer Ahmad" ,
"Ali Hasan Abou Taam" ,
"Alice Hasan Hassouna" ,
"Dina Mazen Al Oud" ,
"Ghassan Mohammad Ali Houmani" ,
"Haidar Mohammad El Khansa" ,
"Joudi Khaled Kaddouha" ,
"Karim Aref Haidar" ,
"Lamia Ibrahim Tirani" ,
"Lilia Bilal Hijazi" ,
"Mahdi Ali Dia" ,
"Manessa Hani Faour" ,
"Maryam Haitham Joumaa Al Masri" ,
"Mohammad Jawad Bassam Haysoun" ,
"Mona Issa Dokmak" ,
"Nai Rabih Enjbar" ,
"Naya Hamza Fayez" ,
"Naya Wissam Faour" ,
"Rema Mohamad Moussa" ,
"Salma Fadi Klaib" ,
"Tia Mohamad Al Sakka" ,
"Yasmina Shadi Barakat" ,
"Youssef Rami Jalloul"
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
"Manessa Khodor Saker"
"Manessa Rabih Berro" ,
"Mariam Ali Majed" ,
"Mira Kassem Saad" ,
"Mona Darwish Serhal" ,
"Noura Nabil Assi" ,
"Reina Hasan Al Chaar" ,
"Syla Rabih Halabi" ,
"Talia Mohammad Hammoud" ,
"Youssef Wissam Houry Homsi"

        // Continuez jusqu’à 20 élèves
    ],


    /* GRADE 8 A — 22 STUDENTS */

    G8A: [
"Adam Ali Al Haf" ,
"Adnan Rami El Khatib" ,
"Angelina Wissam El Daou" ,
"Bahaa El Deen Jamil Daou" ,
"Bashar Bashar AL Zarif" ,
"Eline Fadi Youssef" ,
"Eva Zakaria Baalbaki" ,
"Fatima Mohammad Dimashk" ,
"Hussein Ali Fawzi" ,
"Jad Khaled Al-Zaatary" ,
"Karim Ali Nasserdline" ,
"Layan Samer Ahmad" ,
"Mahdi Wissam Darwish" ,
"Malak Mohamad Mazyad" ,
"Malika Mostafa Daher" ,
"Mira Wissam El Helou" ,
"Mohammad Abdullah Ziad Yassine" ,
"Narjes Hussein Khawaja" ,
"Rama Mohammad Ghandour" ,
"Salah Abdul Latif Ezz El Dine" ,
"Sarah Wissam El Harakeh" ,
"Sireen Omar AbedalKader"
        // Continue until 22 students
    ],


    /* GRADE 8 B — 22 STUDENTS */

    G8B: [
"Ali Youssef Al Saadi" ,
"Amar Ali Al Attar" ,
"Aya Ali Issa" ,
"Ayanoor Hussein Zaiter" ,
"Bahij Imad Abo Kais" ,
"Eva Issam Zaki" ,
"Hanin Jad Lezeik" ,
"Jolie Ibrahim Assaf" ,
"Khaled Tarek Sabban" ,
"Layan Khaled Hashem" ,
"Mahdi Abdo Tarhini" ,
"Mohammad Abbas Janbein" ,
"Mohammad Ahmad Al Hajj" ,
"Nour Al Zahraa Abbas Awwad" ,
"Pia Mohammad Al Nazer" ,
"Rayyan Khodor Beckdashy" ,
"Rudy Hani Hmedeh" ,
"Sari Hasan Karim" ,
"Selena Hadi Allam" ,
"Tia Ahmad Osayran" ,
"Youssef Hasan Mroweh" ,
"Zahraa Ali Khalife"
        // Continue until 22 students
    ],


    /* GRADE 8 C — 22 STUDENTS */

    G8C: [
"Adam Hassan Al Fata" ,
"Ali Mohammad Khalil" ,
"Ali Tarek Kanso" ,
"Atallah Atallah Aoun" ,
"Bassem Nabil Raya" ,
"Daniel Wissam El Aridi" ,
"Fatima Mahdi Awada" ,
"Hussein Ali Srour" ,
"Jad Ahmad Ghader" ,
"Jud Fouad Bazzi" ,
"Judi Samer Al Wafai" ,
"Karim Ali Ghader" ,
"Layal Mohammad Al Haddad" ,
"Omar Ayman Al Shami" ,
"Rahaf Abbas Janbein" ,
"Rama Khaled Itani" ,
"Reina Rabah Mneimneh" ,
"Selena Walid Yassine" ,
"Tia Hasan Shehimy" ,
"Yara Ali Bazzi" ,
"Yasma Jamil Kahoul" ,
"Youssef Jamil Kahoul" 
        // Continue until 22 students
    ],


    /* EB8 — 12 ÉLÈVES */

    EB8: [
"Ahmad Jaafar Wahab" ,
"Ali Hasan Hammoud" ,
"Fahed Hani Al Mawla" ,
"Hussein Mohammad Younnes" ,
"Julia Majed Sabra" ,
"Juliana Jalal Ibrahim" ,
"Naya Rabih Halabi" ,
"Rahaf Samer Al Husseini" ,
"Reina Omar Behlok" ,
"Taline Ziad Ezzo" ,
"Yara Tarek Sibaii" ,
"Yehia Mohamad Zakaria Itani"

        // Continuez jusqu’à 12 élèves
    ],


    /* GRADE 10 A — 24 STUDENTS */

    G10A: [
"Abed El Karim Assem Kreidieh" ,
"Adam Issam Ousseily" ,
"Adam Talal Shaddad" ,
"Ali Amin Zreik" ,
"Ali Mohamad Fahs" ,
"Ali Al Reda Ali Fawzi" ,
"Ali Al Rida Abbas Al Outa" ,
"Celena Hasan Termos" ,
"Celine Imad Shakhashero" ,
"Dana Hasan Al Halabi" ,
"Ghina Hisham Marrash" ,
"Hoor Abdallah Al Souhail" ,
"Hussein Dib Youssef" ,
"Jude Ramzi Malaeb" ,
"Laith Louay Samman" ,
"Malek Tarek Sabban" ,
"Maria Kassem Saad" ,
"Mohamad Abdul latif Ezz El Dine" ,
"Mohammad Jawad Hasan Nasreddine" ,
"Nay Adham Khoueis" ,
"Nour Imad Ibrahim" ,
"Reine Imad Abou Naja" ,
"Taha Bilal Shatila" ,
"Tatiana Khodour Yamout"
        // Continue until 24 students
    ],


    /* GRADE 10 B — 23 STUDENTS */

    G10B: [
"Adam Zakaria Baalbaki" ,
"Ali Hassan Termos" ,
"Ali Hussein Younes" ,
"Alma Khalil Abdel Sater" ,
"Amira Samia Al Amir Ayyash Al Sahmarani" ,
"Celina Rabih Al Massalkhi" ,
"Fatima Nader Taher" ,
"Ghalia Nader Awwad" ,
"Hala Youssef Al Moujarkash" ,
"Jawad Mohammad Al Sayed" ,
"Karim Walid Zaatary" ,
"Lara Jihad AL Jaroudi" ,
"Layan Samer Mouawiya" ,
"Luna Riad Malaeb" ,
"Maarouf Restom Al Kayssi" ,
"Malek Walid Yassine" ,
"Mia Mohamad Al Sakka" ,
"Mohammad Samir Alaa Eddine" ,
"Mohammad Ryan Sadek Idriss" ,
"Mohammad Taim Basel Al Moughrabi" ,
"Ralph Shadi Alameddine" ,
"Serena Marwan Saab" ,
"Wael Khaled Shalabi"
        // Continue until 23 students
    ],


    /* GRADE 10 C — 23 STUDENTS */

    G10C: [
"Ali Mohammad Barakat" ,
"Ali El Reda Hasan Nasreddine" ,
"Ali Reda Bassam Haysoun" ,
"Christine Marwan El Souky" ,
"Hind Hisham Yehya" ,
"Hussein Mohammad El Zein" ,
"Jamal Khaled Al-Zaatary" ,
"Kamal Saadeddine Al Sherkawi Al Malla" ,
"Karim Mohammad Ballout" ,
"Karim Naser Majed" ,
"Lea Abbas Awwad" ,
"Mohamad Jawad Kobal Hijazi" ,
"Omar Khaled Itani" ,
"Othman Mohammad Al Baadarani" ,
"Rana Bilal Hijazi" ,
"Randa Hasan Rabah" ,
"Razan Hussein Al Ouzeir" ,
"Reda Malik Khalil" ,
"Rinas Youssef Hassan AlSheikh" ,
"Rowayda Abdel Rahman Al Tabosh" ,
"Roy Mazen Al Souki" ,
"Silya Ahmad Kassem El Ezmerli" ,
"Yasmina Amer Jaafar"
        // Continue until 23 students
    ],


    /* SECONDE — 8 ÉLÈVES */

    SECONDE: [
    "Acile Mohammad Younnes" ,
    "Ahmad Mohammad Berro" ,
    "Angela Ihab Jaber" ,
    "Carine Tarek Abou Ibrahim" ,
    "Julia Mohammad Saad" ,
    "Lamis Mohammad Al Akhras" ,
    "Lea Maher Hammoud" ,
    "Rahaf Omar Behlok"
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