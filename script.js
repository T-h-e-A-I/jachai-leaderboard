let jsonData = [
  {
    userName: "Yakeen ",
    userEmail: "yakeen.yp@gmail.com",
    accuracy: 90.75,
    examCount: 8,
    score: 726,
    rank: 1,
  },
  {
    userName: "MD Musaddik Ibna Solimullah",
    userEmail: "musaddikibna1@gmail.com",
    accuracy: 90.75,
    examCount: 8,
    score: 726,
    rank: 2,
  },
  {
    userName: "Mushfiq al anik",
    userEmail: "apurbokhan589@gmail.com",
    accuracy: 84.5,
    examCount: 8,
    score: 676,
    rank: 3,
  },
  {
    userName: "Nafiz\n",
    userEmail: "nerdcrab1122@gmail.com",
    accuracy: 83.125,
    examCount: 8,
    score: 665,
    rank: 4,
  },
  {
    userName: "Anan Sadman",
    userEmail: "magiciananan@gmail.com",
    accuracy: 80.8571428571429,
    examCount: 7,
    score: 566,
    rank: 5,
  },
  {
    userName: "Asraful Islam",
    userEmail: "asrafulislam0135@gmail.com",
    accuracy: 74.1428571428571,
    examCount: 7,
    score: 519,
    rank: 6,
  },
  {
    userName: "Md Badhon",
    userEmail: "mbadhon949@gmail.com",
    accuracy: 85.3333333333333,
    examCount: 6,
    score: 512,
    rank: 7,
  },
  {
    userName: "ALVEE",
    userEmail: "mahtirhasanalvee@gmail.com",
    accuracy: 83.3333333333333,
    examCount: 6,
    score: 500,
    rank: 8,
  },
  {
    userName: "Hm foysal Iqbal",
    userEmail: "hmfoysaliqbal@gmail.com",
    accuracy: 74.6,
    examCount: 5,
    score: 373,
    rank: 9,
  },
  {
    userName: "Lelouch ",
    userEmail: "aweshrumc@gmail.com",
    accuracy: 54.3333333333333,
    examCount: 6,
    score: 326,
    rank: 10,
  },
  {
    userName: "Abir Haider Sifat",
    userEmail: "abirhaidersifat@gmail.com",
    accuracy: 60.6,
    examCount: 5,
    score: 303,
    rank: 11,
  },
  {
    userName: "Tahsin Hassan",
    userEmail: "tahsinhassan33@gmail.com",
    accuracy: 47.1666666666667,
    examCount: 6,
    score: 283,
    rank: 12,
  },
  {
    userName: "Md Etharul Islam",
    userEmail: "etharulislam2004@gmail.com",
    accuracy: 85.5,
    examCount: 2,
    score: 171,
    rank: 13,
  },
  {
    userName: "Mehran Rafi ",
    userEmail: "rafi.rafan1122@gmail.com",
    accuracy: 56.6666666666667,
    examCount: 3,
    score: 170,
    rank: 14,
  },
  {
    userName: "Jaber Ahmed Deedar",
    userEmail: "jab3r0.0@gmail.com",
    accuracy: 53.3333333333333,
    examCount: 3,
    score: 160,
    rank: 15,
  },
  {
    userName: "Mehedi Hasan",
    userEmail: "mehedihasan447280@gmail.com",
    accuracy: 66,
    examCount: 1,
    score: 66,
    rank: 16,
  },
  {
    userName: "Abid Istieak",
    userEmail: "istieakabid@gmail.com",
    accuracy: 65,
    examCount: 1,
    score: 65,
    rank: 17,
  },
  {
    userName: "Tasfik Khan",
    userEmail: "tasfik2006@gmail.com",
    accuracy: 30,
    examCount: 1,
    score: 30,
    rank: 18,
  },
  {
    userName: "Musafir Ali",
    userEmail: "amusafir49@gmail.com",
    accuracy: 23,
    examCount: 1,
    score: 23,
    rank: 19,
  },
];
// Function to generate table rows
async function generateTableRows() {
  if (jsonData.length == 0) {
    const response = await fetch(
      "https://xms-back-1.onrender.com/api/v1/user/course/rank/663a7bf60208645bc913a778"
    );
    jsonData = response.json();
  }
  var tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";
  jsonData.forEach(function (user) {
    var row = "<tr>";
    row += "<td>" + user.userName + "</td>";
    row += "<td>" + user.accuracy.toFixed(2) + "</td>";
    row += "<td>" + user.examCount + "</td>";
    row += "<td>" + user.score.toFixed(2) + "</td>";
    row += "<td>" + user.rank + "</td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  });
}

// Call the function to generate table rows
generateTableRows();
