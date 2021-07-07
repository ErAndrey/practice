function Course(title, number, age, school, format) {
   this.number = number;
   this.title = title;
   this.age = age;
   this.school = school;
   this.format = format;
}

let courses = new Array();
let filteredCourses = new Array();

const course1 = new Course("Живопись и цифровая графика", "1", "1", "1", "1");
courses.push(course1);
const course2 = new Course("Я блогер", "2", "1", "2", "1");
courses.push(course2);
const course3 = new Course(
   "Основы информационных технологий",
   "3",
   "1",
   "2",
   "2"
);
courses.push(course3);
const course4 = new Course(
   "Основы программирования на языке Python",
   "4",
   "1",
   "3",
   "1"
);
courses.push(course4);
const course5 = new Course("Программирование LEGO-роботов", "5", "1", "3", "2");
courses.push(course5);

const course6 = new Course(
   "Основы моделирования в программе 3Ds Max (1 год)",
   "6",
   "2",
   "1",
   "1"
);
courses.push(course6);
const course7 = new Course(
   "Разработка компьютерных игр <br>(1 год)",
   "7",
   "2",
   "1",
   "2"
);
courses.push(course7);
const course8 = new Course(
   "Основы компьютерной графики и мультипликации",
   "8",
   "2",
   "2",
   "1"
);
courses.push(course8);
const course9 = new Course(
   "Персонажная графика в программе 3Ds Max (2 год)",
   "9",
   "2",
   "2",
   "2"
);
courses.push(course9);
const course10 = new Course(
   "Разработка компьютерных игр (2 год)",
   "10",
   "2",
   "3",
   "1"
);
courses.push(course10);

const course11 = new Course(
   "Разработка мобильных приложений",
   "11",
   "3",
   "1",
   "2"
);
courses.push(course11);
const course12 = new Course("Технологии веб-дизайна", "12", "3", "2", "1");
courses.push(course12);
const course13 = new Course("Школа искусств", "13", "3", "2", "2");
courses.push(course13);
const course14 = new Course(
   "Программирование Arduino-роботов",
   "14",
   "3",
   "3",
   "1"
);
courses.push(course14);
const course15 = new Course(
   "Разработка компьютерных игр в среде Scratch",
   "15",
   "3",
   "3",
   "2"
);
courses.push(course15);

function filter(attribute, value) {
   switch (attribute) {
      case 1:
         filteredCourses.forEach(function (item, i) {
            if (item.age != value) {
               delete filteredCourses[i];
            }
         });
         break;
      case 2:
         filteredCourses.forEach(function (item, i) {
            if (item.school != value) {
               delete filteredCourses[i];
            }
         });
         break;
      case 3:
         filteredCourses.forEach(function (item, i) {
            if (item.format != value) {
               delete filteredCourses[i];
            }
         });
         break;
   }
   displayCourses(filteredCourses);
}

function displayCourses(arr) {
   document.getElementById("courses-catalog").innerHTML = "";
   arr.forEach(function (item, i) {
      document.getElementById("courses-catalog").innerHTML +=
         '<div class="course-item">' +
         '<img class="course-img" src="images/frog_' +
         item.number +
         '.svg">' +
         '<p class="course-name">' +
         item.title +
         "</p>" +
         '<div class="course-attributes">' +
         '<p> <img src="images/icon_calendar.svg">' +
         item.age +
         "</p>" +
         '<p> <img src="images/icon_focus.svg">' +
         item.school +
         "</p>" +
         "</div>" +
         '<div class="course-actions">' +
         '<button class="course-submit">Записаться</button>' +
         '<a href="#">Подробнее</a>' +
         "</div>" +
         "</div>";
   });
}

window.onload = () => {
   filteredCourses = courses;
   displayCourses(courses);
};
