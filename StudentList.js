
        /* ==============================================
           STUDENTS

           Replace these examples with the real students.
        ============================================== */

        const students = [
            {
                fullName: "Lina Karim Haddad",
                department: "French",
                level: "EB6",
                section: "A",
                building: "Bâtiment 1",
                floor: "Premier étage",
                room: "Salle 104"
            },

            {
                fullName: "Jad Rami Nammour",
                department: "French",
                level: "EB7",
                section: "B",
                building: "Bâtiment 2",
                floor: "Rez-de-chaussée",
                room: "Salle 203"
            },

            {
                fullName: "Maya Samir Khoury",
                department: "French",
                level: "EB8",
                section: "A",
                building: "Bâtiment 2",
                floor: "Premier étage",
                room: "Salle 214"
            },

            {
                fullName: "Nour Ali Saad",
                department: "French",
                level: "EB9",
                section: "C",
                building: "Bâtiment 2",
                floor: "Deuxième étage",
                room: "Salle 226"
            },

            {
                fullName: "Elie Georges Daher",
                department: "French",
                level: "Seconde",
                section: "A",
                building: "Bâtiment 3",
                floor: "Premier étage",
                room: "Salle 304"
            },

            {
                fullName: "Sarah Fadi Saliba",
                department: "French",
                level: "Première",
                section: "B",
                building: "Bâtiment 3",
                floor: "Deuxième étage",
                room: "Salle 316"
            },

            {
                fullName: "Rita Joseph Azar",
                department: "French",
                level: "Terminale",
                section: "A",
                building: "Bâtiment 3",
                floor: "Troisième étage",
                room: "Salle 327"
            },

            {
                fullName: "Nour Elias Nammour",
                department: "English",
                level: "G6",
                section: "A",
                building: "Building 1",
                floor: "First floor",
                room: "Room 108"
            },

            {
                fullName: "Lea Walid Karam",
                department: "English",
                level: "G7",
                section: "B",
                building: "Building 1",
                floor: "Second floor",
                room: "Room 118"
            },

            {
                fullName: "Omar Nabil Hamdan",
                department: "English",
                level: "G8",
                section: "A",
                building: "Building 2",
                floor: "First floor",
                room: "Room 218"
            },

            {
                fullName: "Maria Tony Rizk",
                department: "English",
                level: "G9",
                section: "C",
                building: "Building 2",
                floor: "Second floor",
                room: "Room 229"
            },

            {
                fullName: "Karl Michel Abi Raad",
                department: "English",
                level: "G10",
                section: "A",
                building: "Building 3",
                floor: "First floor",
                room: "Room 307"
            },

            {
                fullName: "Yara Hassan Daher",
                department: "English",
                level: "G11",
                section: "B",
                building: "Building 3",
                floor: "Second floor",
                room: "Room 318"
            },

            {
                fullName: "Anthony Roy Hanna",
                department: "English",
                level: "G12",
                section: "A",
                building: "Building 3",
                floor: "Third floor",
                room: "Room 329"
            }
        ];


        /* Motivational messages */

        const frenchMessages = [
            "Cette année est la tienne : apprends, grandis et brille !",
            "Une nouvelle aventure commence aujourd’hui. Rends-la inoubliable !",
            "Sois curieux(se), courageux(se) et crois toujours en toi !",
            "Ta place est prête et ton nouveau voyage commence maintenant !",
            "Rêve grand, avance avec confiance et laisse briller ta lumière !"
        ];

        const englishMessages = [
            "This is your year to learn, grow and shine!",
            "A new adventure begins today. Make it unforgettable!",
            "Be curious, be courageous and always believe in yourself!",
            "Your place is ready and your new journey begins now!",
            "Dream big, move forward with confidence and let your light shine!"
        ];


        /* HTML elements */

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

        const buildingLabel =
            document.getElementById("buildingLabel");

        const buildingValue =
            document.getElementById("buildingValue");

        const floorLabel =
            document.getElementById("floorLabel");

        const floorValue =
            document.getElementById("floorValue");

        const roomLabel =
            document.getElementById("roomLabel");

        const roomValue =
            document.getElementById("roomValue");

        const motivationCard =
            document.getElementById("motivationCard");

        const restartButton =
            document.getElementById("restartButton");


        /* Read QR-code information */

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
            } else if (selectedDepartment === "English") {
                levelBadge.textContent =
                    `English Department • ${selectedLevel || ""}`;
            } else {
                levelBadge.textContent =
                    selectedLevel || "";
            }
        }


        /* Normalize names */

        function normalizeName(name) {
            return name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, " ")
                .trim()
                .toLowerCase();
        }


        /* Search */

        searchForm.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                const enteredName =
                    normalizeName(studentNameInput.value);

                if (enteredName.split(" ").length < 2) {
                    showError(
                        "Please enter your complete name. " +
                        "Écris ton nom complet, s’il te plaît."
                    );

                    return;
                }

                const foundStudent =
                    students.find(function (student) {

                        const correctName =
                            normalizeName(student.fullName) ===
                            enteredName;

                        const correctDepartment =
                            !selectedDepartment ||
                            normalizeName(student.department) ===
                            normalizeName(selectedDepartment);

                        const correctLevel =
                            !selectedLevel ||
                            normalizeName(student.level) ===
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


        /* Error */

        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.classList.add("visible");

            studentNameInput.focus();
        }


        /* Display the student */

        function showStudent(student) {
            errorMessage.classList.remove("visible");

            /* Hide the entire search section */

            searchArea.classList.add("hidden");

            /* Show the result section */

            studentResult.classList.add("visible");


            const messageNumber =
                student.fullName.length % frenchMessages.length;


            if (student.department === "French") {

                document.documentElement.lang = "fr";

                resultSmallTitle.textContent =
                    "Bienvenue à Evergreen Community School";

                studentWelcome.textContent =
                    `Bienvenue, ${student.fullName} !`;

                welcomeMessage.textContent =
                    "Nous sommes très heureux de t’accueillir. " +
                    "Voici toutes les informations pour rejoindre ta classe.";

                departmentLabel.textContent =
                    "Département";

                departmentValue.textContent =
                    "Département français";

                classLabel.textContent =
                    "Niveau et section";

                classValue.textContent =
                    `${student.level} – Section ${student.section}`;

                buildingLabel.textContent =
                    "Bâtiment";

                buildingValue.textContent =
                    student.building;

                floorLabel.textContent =
                    "Étage";

                floorValue.textContent =
                    student.floor;

                roomLabel.textContent =
                    "Salle";

                roomValue.textContent =
                    student.room;

                motivationCard.textContent =
                    frenchMessages[messageNumber];

                restartButton.textContent =
                    "Chercher un autre nom";

            } else {

                document.documentElement.lang = "en";

                resultSmallTitle.textContent =
                    "Welcome to Evergreen Community School";

                studentWelcome.textContent =
                    `Welcome, ${student.fullName}!`;

                welcomeMessage.textContent =
                    "We are very happy to have you with us. " +
                    "Here is everything you need to find your classroom.";

                departmentLabel.textContent =
                    "Department";

                departmentValue.textContent =
                    "English Department";

                classLabel.textContent =
                    "Grade and section";

                classValue.textContent =
                    `${student.level} – Section ${student.section}`;

                buildingLabel.textContent =
                    "Building";

                buildingValue.textContent =
                    student.building;

                floorLabel.textContent =
                    "Floor";

                floorValue.textContent =
                    student.floor;

                roomLabel.textContent =
                    "Classroom";

                roomValue.textContent =
                    student.room;

                motivationCard.textContent =
                    englishMessages[messageNumber];

                restartButton.textContent =
                    "Search another name";
            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }


        /* Return to the search */

        restartButton.addEventListener(
            "click",
            function () {

                studentResult.classList.remove("visible");
                searchArea.classList.remove("hidden");

                studentNameInput.value = "";

                studentNameInput.focus();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );