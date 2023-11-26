// Mendapatkan elemen daftar skor tertinggi dari DOM
const highScoresList = document.getElementById('highScoresList');

// Mengambil skor tertinggi dari penyimpanan lokal atau menginisialisasi sebagai array kosong
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Menetapkan HTML untuk elemen daftar skor tertinggi
highScoresList.innerHTML = `
<style>
    .high-scores-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .high-scores-table th, .high-scores-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    .name {
      
      color:#56a5eb;
    }
    .score {
      color: green; /* Warna untuk Skor */
    }
  </style>
  <table class="high-scores-table">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    ${highScores
      .map((score) => {
        // Membuat baris baru untuk setiap skor tertinggi
        return `<tr class="high-score">
                  <td class="name">${score.name}</td>
                  <td class="score">${score.score}</td>
                </tr>`;
      })
      .join('')}
  </table>`;
