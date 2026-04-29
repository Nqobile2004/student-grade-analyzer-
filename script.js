let students = JSON.parse(localStorage.getItem("students")) || [];

function getGrade(avg) {
  if (avg >= 75) return "A";
  if (avg >= 65) return "B";
  if (avg >= 50) return "C";
  if (avg >= 40) return "D";
  return "F";
}

function getInsight(avg) {
  if (avg < 50) return "⚠️ At risk of failing";
  if (avg >= 75) return "🔥 Excellent performance";
  return "👍 Average performance";
}

function addStudent() {
  const name = document.getElementById("name").value;
  const math = +document.getElementById("math").value;
  const science = +document.getElementById("science").value;
  const english = +document.getElementById("english").value;

  if (!name || math === 0 || science === 0 || english === 0) {
    alert("Please fill all fields correctly");
    return;
  }

  const average = ((math + science + english) / 3).toFixed(1);

  const student = {
    name,
    average: Number(average),
    grade: getGrade(average),
    status: average >= 50 ? "Pass" : "Fail",
    insight: getInsight(average),
    marks: [math, science, english]
  };

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
  clearInputs();
}

function displayStudents() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  students.sort((a, b) => b.average - a.average);

  students.forEach(student => {
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.average}</td>
        <td>${student.grade}</td>
        <td class="${student.status === "Pass" ? "pass" : "fail"}">
          ${student.status}
        </td>
        <td>${student.insight}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });

  if (students.length > 0) {
    document.getElementById("topStudent").innerText =
      "🏆 " + students[0].name + " (" + students[0].average + "%)";
  }

  renderChart();
}

function renderChart() {
  const ctx = document.getElementById("chart").getContext("2d");

  const labels = students.map(s => s.name);
  const data = students.map(s => s.average);

  if (window.chart) {
    window.chart.destroy();
  }

  window.chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Average Marks",
        data: data
      }]
    }
  });
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("math").value = "";
  document.getElementById("science").value = "";
  document.getElementById("english").value = "";
}

displayStudents();
