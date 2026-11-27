const initialStudents = [
  {number:"014",name:"Ana Manuel",className:"10.ª A"},
  {number:"021",name:"Bruno Paulo",className:"10.ª A"},
  {number:"033",name:"Carla João",className:"10.ª B"},
  {number:"042",name:"Daniel José",className:"10.ª B"},
  {number:"056",name:"Eva Miguel",className:"10.ª A"},
  {number:"061",name:"Fábio Luís",className:"10.ª B"}
];
let students = [...initialStudents];
let occurrences = [
 {title:"Conflito durante o intervalo",date:"2026-11-25",students:["Ana Manuel","Bruno Paulo"],description:"Discussão entre dois alunos no intervalo.",witnesses:"Professor de serviço",measure:"Conversa com os alunos e contacto aos encarregados.",status:"Em acompanhamento"},
 {title:"Atraso à primeira aula",date:"2026-11-24",students:["Carla João"],description:"Entrada na sala após o início da aula.",witnesses:"Professor da disciplina",measure:"Advertência verbal.",status:"Concluída"},
 {title:"Desentendimento no recreio",date:"2026-11-22",students:["Daniel José","Fábio Luís"],description:"Desentendimento verbal no recreio.",witnesses:"Funcionário",measure:"Mediação e acompanhamento.",status:"Pendente"}
];
const $ = id => document.getElementById(id);
const today = new Date().toISOString().slice(0,10);
$("occ-date").value = today;

$("login-form").addEventListener("submit", e => {e.preventDefault(); $("login-view").classList.add("hidden"); $("app-view").classList.remove("hidden"); renderAll();});
$("logout").addEventListener("click",()=>{$("app-view").classList.add("hidden");$("login-view").classList.remove("hidden");});
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.go)));
function showPage(page){
 document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
 $("page-"+page).classList.remove("hidden");
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 const titles={dashboard:"Visão geral",students:"Alunos e turmas",occurrences:"Ocorrências",history:"Histórico do aluno"};
 $("page-heading").textContent=titles[page];
 if(page==="history") renderHistory();
}
function statusClass(s){return s==="Concluída"?"done":s==="Em acompanhamento"?"progress":""}
function renderAll(){renderStudents();renderOccurrences();renderRecent();renderStudentOptions();renderHistory();$("stat-students").textContent=students.length;$("stat-occurrences").textContent=occurrences.length;$("stat-pending").textContent=occurrences.filter(o=>o.status!=="Concluída").length;}
function renderStudents(){
 const q=$("student-search").value.toLowerCase(),cl=$("class-filter").value;
 const rows=students.filter(s=>(s.name.toLowerCase().includes(q)||s.number.includes(q))&&(!cl||s.className===cl));
 $("students-table").innerHTML=rows.map(s=>`<tr><td>${s.number}</td><td><strong>${s.name}</strong></td><td>${s.className}</td><td><span class="pill done">Activo</span></td></tr>`).join("")||'<tr><td colspan="4">Nenhum aluno encontrado.</td></tr>';
}
function renderStudentOptions(){
 const opts=students.map(s=>`<option value="${s.name}">${s.name} — ${s.className}</option>`).join("");
 $("occ-students").innerHTML=opts;$("history-student").innerHTML='<option value="">Escolha um aluno</option>'+opts;
}
function renderOccurrences(){
 const q=$("occ-search").value.toLowerCase(),f=$("occ-filter").value;
 const list=occurrences.filter(o=>(o.title+" "+o.students.join(" ")).toLowerCase().includes(q)&&(!f||o.status===f));
 $("occurrence-list").innerHTML=list.map(o=>`<article class="occ-card"><div><h4>${o.title}</h4><p>${o.students.join(", ")} · ${formatDate(o.date)}</p><p>${o.description}</p></div><div class="meta"><span class="pill ${statusClass(o.status)}">${o.status}</span></div></article>`).join("")||'<div class="empty">Não existem ocorrências para os filtros seleccionados.</div>';
}
function renderRecent(){
 $("recent-table").innerHTML=occurrences.slice(0,4).map(o=>`<tr><td>${o.students.join(", ")}</td><td>${[...new Set(o.students.map(n=>students.find(s=>s.name===n)?.className).filter(Boolean))].join(", ")}</td><td>${o.title}</td><td>${formatDate(o.date)}</td><td><span class="pill ${statusClass(o.status)}">${o.status}</span></td></tr>`).join("");
}
function renderHistory(){
 const name=$("history-student").value;
 if(!name){$("history-content").innerHTML='<div class="empty" style="margin-top:14px">Seleccione um aluno para consultar o seu histórico.</div>';return;}
 const list=occurrences.filter(o=>o.students.includes(name));
 $("history-content").innerHTML=list.length?list.map(o=>`<article class="history-item"><h4>${o.title}</h4><p>Data: ${formatDate(o.date)} · Estado: ${o.status}</p><p><strong>Descrição:</strong> ${o.description}</p><p><strong>Medida:</strong> ${o.measure||"Não registada"}</p><p><strong>Testemunhas:</strong> ${o.witnesses||"Não indicadas"}</p></article>`).join(""):'<div class="empty" style="margin-top:14px">Este aluno ainda não tem ocorrências registadas.</div>';
}
function formatDate(d){return new Date(d+"T12:00:00").toLocaleDateString("pt-PT")}
$("student-search").addEventListener("input",renderStudents);$("class-filter").addEventListener("change",renderStudents);
$("occ-search").addEventListener("input",renderOccurrences);$("occ-filter").addEventListener("change",renderOccurrences);
$("history-student").addEventListener("change",renderHistory);
$("new-occurrence").addEventListener("click",()=>{$("occurrence-form").reset();$("occ-date").value=today;renderStudentOptions();$("occurrence-dialog").showModal();});
$("add-student").addEventListener("click",()=>{$("student-form").reset();$("student-dialog").showModal();});
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>$(b.dataset.close).close()));
$("occurrence-form").addEventListener("submit",e=>{
 e.preventDefault();const selected=[...$("occ-students").selectedOptions].map(o=>o.value);
 if(!selected.length){alert("Seleccione pelo menos um aluno.");return;}
 occurrences.unshift({title:$("occ-title").value,date:$("occ-date").value,students:selected,description:$("occ-description").value,witnesses:$("occ-witnesses").value,measure:$("occ-measure").value,status:$("occ-measure").value.trim()?"Em acompanhamento":"Pendente"});
 $("occurrence-dialog").close();renderAll();showPage("occurrences");
});
$("student-form").addEventListener("submit",e=>{
 e.preventDefault();students.push({number:$("student-number").value,name:$("student-name").value,className:$("student-class").value});
 $("student-dialog").close();renderAll();
});
renderAll();
