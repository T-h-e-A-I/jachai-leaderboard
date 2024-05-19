let jsonData = [
  {
    userName: "MD Musaddik Ibna Solimullah",
    userEmail: "musaddikibna1@gmail.com",
    accuracy: 88.08333333333334,
    examCount: 12,
    score: 1057,
    rank: 1,
  },
  {
    userName: "Yakeen ",
    userEmail: "yakeen.yp@gmail.com",
    accuracy: 87.25,
    examCount: 12,
    score: 1047,
    rank: 2,
  },
  {
    userName: "Nafiz\n",
    userEmail: "nerdcrab1122@gmail.com",
    accuracy: 83.25,
    examCount: 12,
    score: 999,
    rank: 3,
  },
  {
    userName: "Asraful Islam",
    userEmail: "asrafulislam0135@gmail.com",
    accuracy: 77.45454545454545,
    examCount: 11,
    score: 852,
    rank: 4,
  },
  {
    userName: "Mushfiq al anik",
    userEmail: "apurbokhan589@gmail.com",
    accuracy: 80,
    examCount: 10,
    score: 800,
    rank: 5,
  },
  {
    userName: "Md Badhon",
    userEmail: "mbadhon949@gmail.com",
    accuracy: 82.33333333333334,
    examCount: 9,
    score: 741.0000000000001,
    rank: 6,
  },
  {
    userName: "Hm foysal Iqbal",
    userEmail: "hmfoysaliqbal@gmail.com",
    accuracy: 73.77777777777777,
    examCount: 9,
    score: 664,
    rank: 7,
  },
  {
    userName: "ALVEE",
    userEmail: "mahtirhasanalvee@gmail.com",
    accuracy: 80.5,
    examCount: 8,
    score: 644,
    rank: 8,
  },
  {
    userName: "Anan Sadman",
    userEmail: "magiciananan@gmail.com",
    accuracy: 80.85714285714286,
    examCount: 7,
    score: 566,
    rank: 9,
  },
  {
    userName: "Abir Haider Sifat",
    userEmail: "abirhaidersifat@gmail.com",
    accuracy: 54.42857142857142,
    examCount: 7,
    score: 380.99999999999994,
    rank: 10,
  },
  {
    userName: "Lelouch ",
    userEmail: "aweshrumc@gmail.com",
    accuracy: 54.333333333333336,
    examCount: 6,
    score: 326,
    rank: 11,
  },
  {
    userName: "Md Etharul Islam",
    userEmail: "etharulislam2004@gmail.com",
    accuracy: 77,
    examCount: 4,
    score: 308,
    rank: 12,
  },
  {
    userName: "Tahsin Hassan",
    userEmail: "tahsinhassan33@gmail.com",
    accuracy: 41.85714285714286,
    examCount: 7,
    score: 293,
    rank: 13,
  },
  {
    userName: "Mehran Rafi ",
    userEmail: "rafi.rafan1122@gmail.com",
    accuracy: 56.666666666666664,
    examCount: 3,
    score: 170,
    rank: 14,
  },
  {
    userName: "Jaber Ahmed Deedar",
    userEmail: "jab3r0.0@gmail.com",
    accuracy: 53.333333333333336,
    examCount: 3,
    score: 160,
    rank: 15,
  },
  {
    userName: "Mehedi Hasan",
    userEmail: "mehedihasan447280@gmail.com",
    accuracy: 57.99999999999999,
    examCount: 2,
    score: 115.99999999999999,
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
