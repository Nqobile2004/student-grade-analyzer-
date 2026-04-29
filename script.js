let students = [];

// 🔤 Grade calculation
function getGrade(avg) {
  if (avg >= 75) return "A";
  if (avg >= 65) return "B";
  if (avg >= 50) return "C";
  if (avg >= 40) return "D";
  return "F";
}

// 🧠 Insight system
function getInsight(avg) {
  if (avg < 50) return "⚠️ At risk of failing";
  if (avg >= 75) return "🔥 Excellent performance";
  return "👍 Average performance";
}

async function addStudent() {
  console.log("Button clicked");

  const name = document.getElementById("name").value;

  try {
    const res = await fetch("http://localhost:5000/students/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, math: 50, science: 60, english: 70 })
    });

    console.log("Response:", res);

    loadStudents();

  } catch (error) {
    console.log("ERROR:", error);
  }
}
}

// 📥 Load students from backend
async function loadStudents() {
  try {
    const res = await fetch("http://localhost:5000/students");
    students = await res.json();
    displayStudents();
  } catch (error) {
    console.error("Error loading students:", error);
  }
}

// 📋 Display in table
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
        <td>${getInsight(student.average)}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });

  // 🏆 Top student
  if (students.length > 0) {
    document.getElementById("topStudent").innerText =
      "🏆 " + students[0].name + " (" + students[0].average + "%)";
  }

  renderChart();
}

// 📊 Chart using :contentReference[oaicite:0]{index=0}
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

// 🧹 Clear inputs
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("math").value = "";
  document.getElementById("science").value = "";
  document.getElementById("english").value = "";
}

// 🚀 Load data on page start
loadStudents();
