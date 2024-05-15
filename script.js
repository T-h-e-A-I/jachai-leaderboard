let jsonData = [
  {
    userName: "Yakeen ",
    userEmail: "yakeen.yp@gmail.com",
    accuracy: 90.85714285714286,
    examCount: 7,
    score: 636,
    rank: 1,
  },
  {
    userName: "MD Musaddik Ibna Solimullah",
    userEmail: "musaddikibna1@gmail.com",
    accuracy: 90.14285714285715,
    examCount: 7,
    score: 631.0000000000001,
    rank: 2,
  },
  {
    userName: "Mushfiq al anik",
    userEmail: "apurbokhan589@gmail.com",
    accuracy: 86.28571428571429,
    examCount: 7,
    score: 604,
    rank: 3,
  },
  {
    userName: "Nafiz\n",
    userEmail: "nerdcrab1122@gmail.com",
    accuracy: 83.57142857142857,
    examCount: 7,
    score: 585,
    rank: 4,
  },
  {
    userName: "Anan Sadman",
    userEmail: "magiciananan@gmail.com",
    accuracy: 81.5,
    examCount: 6,
    score: 489,
    rank: 5,
  },
  {
    userName: "Asraful Islam",
    userEmail: "asrafulislam0135@gmail.com",
    accuracy: 72,
    examCount: 6,
    score: 432,
    rank: 6,
  },
  {
    userName: "ALVEE",
    userEmail: "mahtirhasanalvee@gmail.com",
    accuracy: 83,
    examCount: 5,
    score: 415,
    rank: 7,
  },
  {
    userName: "Md Badhon",
    userEmail: "mbadhon949@gmail.com",
    accuracy: 82.39999999999999,
    examCount: 5,
    score: 411.99999999999994,
    rank: 8,
  },
  {
    userName: "Lelouch ",
    userEmail: "aweshrumc@gmail.com",
    accuracy: 54.333333333333336,
    examCount: 6,
    score: 326,
    rank: 9,
  },
  {
    userName: "Hm foysal Iqbal",
    userEmail: "hmfoysaliqbal@gmail.com",
    accuracy: 69.5,
    examCount: 4,
    score: 278,
    rank: 10,
  },
  {
    userName: "Abir Haider Sifat",
    userEmail: "abirhaidersifat@gmail.com",
    accuracy: 64,
    examCount: 4,
    score: 256,
    rank: 11,
  },
  {
    userName: "Tahsin Hassan",
    userEmail: "tahsinhassan33@gmail.com",
    accuracy: 46.2,
    examCount: 5,
    score: 231,
    rank: 12,
  },
  {
    userName: "Mehran Rafi ",
    userEmail: "rafi.rafan1122@gmail.com",
    accuracy: 56.666666666666664,
    examCount: 3,
    score: 170,
    rank: 13,
  },
  {
    userName: "Jaber Ahmed Deedar",
    userEmail: "jab3r0.0@gmail.com",
    accuracy: 53.333333333333336,
    examCount: 3,
    score: 160,
    rank: 14,
  },
  {
    userName: "Md Etharul Islam",
    userEmail: "etharulislam2004@gmail.com",
    accuracy: 76,
    examCount: 1,
    score: 76,
    rank: 15,
  },
  {
    userName: "Abid Istieak",
    userEmail: "istieakabid@gmail.com",
    accuracy: 65,
    examCount: 1,
    score: 65,
    rank: 16,
  },
  {
    userName: "Tasfik Khan",
    userEmail: "tasfik2006@gmail.com",
    accuracy: 30,
    examCount: 1,
    score: 30,
    rank: 17,
  },
  {
    userName: "Musafir Ali",
    userEmail: "amusafir49@gmail.com",
    accuracy: 23,
    examCount: 1,
    score: 23,
    rank: 18,
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