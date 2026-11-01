// Add your books here. One line per book.
const books = [
  { title: "මඩොල් දූව", author: "මාර්ටින් වික්‍රමසිංහ", type: "නවකතා", no: "S-001" },
  { title: "ගම්පෙරළිය", author: "මාර්ටින් වික්‍රමසිංහ", type: "නවකතා", no: "S-002" },
  { title: "සිංහල ශබ්දකෝෂය", author: "සංස්කරණය", type: "ශබ්දකෝෂ", no: "R-010" },
  { title: "ළමා විශ්වකෝෂය", author: "සංස්කරණය", type: "විශ්වකෝෂ", no: "R-020" }
];

const q = document.getElementById("q");
const tbody = document.getElementById("results");
const empty = document.getElementById("empty");

function show(list) {
  tbody.innerHTML = "";
  list.forEach(b => {
    const tr = document.createElement("tr");
    [b.title, b.author, b.type, b.no].forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  empty.hidden = list.length > 0;
}

q.addEventListener("input", () => {
  const term = q.value.trim().toLowerCase();
  show(books.filter(b =>
    (b.title + " " + b.author + " " + b.type + " " + b.no).toLowerCase().includes(term)
  ));
});

show(books);