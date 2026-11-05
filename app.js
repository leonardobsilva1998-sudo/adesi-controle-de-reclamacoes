// ===== Configuração do Supabase (chave pública: pode ficar visível) =====
const SUPABASE_URL="https://vhklzcqlmccvvwksdrho.supabase.co";
const SUPABASE_KEY="sb_publishable_TpNzCpkLhI6p5mnIxJsXtw_1_Tw1LAb";
const MARKUP=`

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-list" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2.8h6v3H9z"/><path d="M9 10h.01M12 10h4M9 14h.01M12 14h4M9 18h.01M12 18h4"/></symbol>
  <symbol id="i-act" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M7 14l3-3 3 3 4-5"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l-2 2"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.5L16 9.5"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/></symbol>
  <symbol id="i-clip" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2.8h6v3H9z"/><path d="M9 13l2 2 4-4"/></symbol>
  <symbol id="i-case" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></symbol>
</svg>

<div class="login" id="login">
  <form class="login-card" id="login-form" novalidate>
    <img class="login-logo" src="logo.png" alt="Adesi Coating" width="520" height="170">
    <h2 class="login-title">Controle de Reclamações</h2>
    <label for="l-email">E-mail<input id="l-email" type="email" autocomplete="username" required></label>
    <label for="l-senha">Senha<input id="l-senha" type="password" autocomplete="current-password" required></label>
    <p class="login-erro" id="l-erro" hidden></p>
    <button class="btn verde" type="submit" id="l-entrar">Entrar</button>
    <div class="login-ou"><span>ou</span></div>
    <button class="btn ghost" type="button" id="l-visualizar">Visualização</button>
    <p class="note login-nota">Na visualização você vê tudo, mas não consegue cadastrar nem editar.</p>
  </form>
</div>
<main class="panel" id="painel" hidden>
  <div class="head">
    <h1>Controle de Reclamações</h1>
    <span class="logo-plate"><img class="logo" alt="Adesi Coating" width="520" height="170" src="logo.png"></span>
    <div class="head-actions">
      <button class="btn ghost" id="btn-conta" type="button">Entrar</button>
      <button class="btn" id="btn-new" type="button">+ Nova reclamação</button>
    </div>
  </div>

  <nav class="tabs" role="tablist" aria-label="Seções">
    <button class="tab" role="tab" id="tab-rec" data-view="reclamacoes" aria-selected="true" type="button">Reclamações</button>
    <button class="tab" role="tab" id="tab-doc" data-view="documentacoes" aria-selected="false" type="button">Documentações</button>
  </nav>
  <p class="note pubnote" id="pub-note" hidden></p>

  <div class="view" id="view-reclamacoes">
  <section class="stats" aria-label="Resumo">
    <button class="stat" data-status="" type="button" aria-pressed="false"><svg class="i"><use href="#i-list"/></svg><span class="n" id="s-total">0</span><span class="l">Total de reclamações</span></button>
    <button class="stat" data-status="andamento" type="button" aria-pressed="false"><svg class="i"><use href="#i-act"/></svg><span class="n" id="s-andamento">0</span><span class="l">Em andamento</span></button>
    <button class="stat" data-status="aguardando" type="button" aria-pressed="false"><svg class="i"><use href="#i-clock"/></svg><span class="n" id="s-aguardando">0</span><span class="l">Aguardando retorno</span></button>
    <button class="stat" data-status="concluida" type="button" aria-pressed="false"><svg class="i"><use href="#i-check"/></svg><span class="n" id="s-concluida">0</span><span class="l">Concluídas</span></button>
  </section>

  <section aria-labelledby="h-setores">
    <h2 id="h-setores">Aguardando retorno dos setores</h2>
    <div class="sectors" id="sectors"></div>
  </section>

  <section aria-labelledby="h-lista">
    <div class="listhead">
      <h2 id="h-lista">Reclamações</h2>
      <div class="filters">
        <span id="active-filter"></span>
        <select class="search mes" id="mes" aria-label="Filtrar por mês"><option value="">Todos os meses</option></select>
        <input class="search" id="q" type="search" placeholder="Buscar empresa ou pedido" aria-label="Buscar empresa ou pedido">
      </div>
    </div>
    <div class="items" id="items"></div>
    <p class="note" id="sync-note"></p>
  </section>
  </div>

  <div class="view" id="view-documentacoes" hidden>
    <section class="stats three" aria-label="Resumo das documentações">
      <button class="stat" data-dstatus="" type="button" aria-pressed="false"><svg class="i"><use href="#i-list"/></svg><span class="n" id="d-total">0</span><span class="l">Total de solicitações</span></button>
      <button class="stat" data-dstatus="pendente" type="button" aria-pressed="false"><svg class="i"><use href="#i-clock"/></svg><span class="n" id="d-pendente">0</span><span class="l">Pendentes</span></button>
      <button class="stat" data-dstatus="concluido" type="button" aria-pressed="false"><svg class="i"><use href="#i-check"/></svg><span class="n" id="d-concluido">0</span><span class="l">Concluídas</span></button>
    </section>
    <section aria-labelledby="h-docs">
      <div class="listhead">
        <h2 id="h-docs">Documentações para clientes</h2>
        <div class="filters">
          <span id="d-active-filter"></span>
          <input class="search" id="dq" type="search" placeholder="Buscar cliente ou documento" aria-label="Buscar documentações">
        </div>
      </div>
      <div class="items" id="d-items"></div>
      <p class="note" id="d-sync-note"></p>
    </section>
  </div>
</main>

<div class="overlay" id="d-overlay" hidden>
  <form class="modal" id="d-form" novalidate>
    <h3 id="d-form-title">Nova solicitação de documentos</h3>
    <label for="d-cliente">Cliente<input id="d-cliente" required maxlength="120"></label>
    <div class="grid2">
      <label for="d-solicitado">Data da solicitação<input id="d-solicitado" type="date"></label>
      <label for="d-enviado">Data de envio<input id="d-enviado" type="date"></label>
    </div>
    <label for="d-docs">Documentos enviados<textarea id="d-docs" maxlength="3000" placeholder="Um documento por linha. Ex.: Laudo técnico, Nota fiscal, Certificado de qualidade"></textarea></label>
    <label for="d-status">Situação<select id="d-status">
      <option value="pendente">Pendente</option>
      <option value="concluido">Concluído</option>
    </select></label>
    <label for="d-obs">Observação<textarea id="d-obs" maxlength="2000"></textarea></label>
    <div class="actions">
      <button class="btn danger" id="d-btn-del" type="button" hidden>Excluir</button>
      <div class="right">
        <button class="btn ghost" id="d-btn-cancel" type="button">Cancelar</button>
        <button class="btn" type="submit" id="d-btn-save">Salvar</button>
      </div>
    </div>
  </form>
</div>

<div class="overlay" id="overlay" hidden>
  <form class="modal" id="form" novalidate>
    <h3 id="form-title">Nova reclamação</h3>
    <div class="grid2">
      <label for="f-cliente">Cliente<input id="f-cliente" required maxlength="120"></label>
      <label for="f-pedido">Nº do pedido / contato<input id="f-pedido" maxlength="80"></label>
    </div>
    <label for="f-desc">Descrição da reclamação<textarea id="f-desc" maxlength="2000"></textarea></label>
    <div class="grid2">
      <label for="f-abertura">Data da reclamação<input id="f-abertura" type="date"></label>
      <label for="f-retorno">Data de retorno ao cliente<input id="f-retorno" type="date"></label>
    </div>
    <div class="grid2">
      <label for="f-status">Status<select id="f-status">
        <option value="andamento">Em andamento</option>
        <option value="aguardando">Aguardando retorno</option>
        <option value="concluida">Concluída</option>
      </select></label>
      <label for="f-setor">Setor responsável pelo retorno<select id="f-setor">
        <option value="">Nenhum</option>
      </select></label>
    </div>
    <div class="actions">
      <button class="btn danger" id="btn-del" type="button" hidden>Excluir</button>
      <div class="right">
        <button class="btn ghost" id="btn-cancel" type="button">Cancelar</button>
        <button class="btn" type="submit" id="btn-save">Salvar</button>
      </div>
    </div>
  </form>
</div>
<div class="toast" id="toast" hidden></div>

`;
document.body.insertAdjacentHTML("afterbegin",MARKUP);

const SETORES=[
  {id:"expedicao",nome:"Expedição",desc:"Aguardando posicionamento da expedição",icon:"i-box"},
  {id:"qualidade",nome:"Controle de Qualidade",desc:"Aguardando análise da qualidade",icon:"i-clip"},
  {id:"comercial",nome:"Comercial",desc:"Aguardando retorno do comercial",icon:"i-case"},
  {id:"clientes",nome:"Clientes",desc:"Aguardando resposta do cliente",icon:"i-user"}
];
const STATUS={andamento:"Em andamento",aguardando:"Aguardando retorno",concluida:"Concluída"};
const $=s=>document.querySelector(s);
// Filtro por mês (pela data da reclamação)
const MESES=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let filtroMes="";
function mesDe(r){return (r.abertura||"").slice(0,7)}
function doMes(){return filtroMes?items.filter(r=>mesDe(r)===filtroMes):items}
function atualizarMeses(){
  const sel=$("#mes");if(!sel)return;
  const set=new Set(items.map(mesDe).filter(Boolean));if(filtroMes)set.add(filtroMes);
  const lista=[...set].sort().reverse();
  sel.textContent="";
  const t=document.createElement("option");t.value="";t.textContent="Todos os meses";sel.appendChild(t);
  lista.forEach(m=>{const o=document.createElement("option");o.value=m;o.textContent=MESES[+m.slice(5,7)-1]+" de "+m.slice(0,4);sel.appendChild(o)});
  sel.value=filtroMes;
}
let items=[], filtroSetor="", filtroStatus="", editId=null, delArmed=false, db=null, col=null;

SETORES.forEach(s=>{const o=document.createElement("option");o.value=s.id;o.textContent=s.nome;$("#f-setor").appendChild(o)});

function hoje(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function fmt(iso){if(!iso)return"";const[y,m,d]=iso.split("-");return d+"/"+m+"/"+y}
function diasAte(iso){const a=new Date(hoje()+"T00:00:00"),b=new Date(iso+"T00:00:00");return Math.round((b-a)/86400000)}
// Conta como "aguardando o setor" só quando o status é Aguardando retorno e o setor está marcado
const aguardandoSetor=(r,s)=>r.status==="aguardando"&&r.setor===s;

function renderSectors(){
  const box=$("#sectors");box.textContent="";
  SETORES.forEach(s=>{
    const n=doMes().filter(r=>aguardandoSetor(r,s.id)).length;
    const b=document.createElement("button");b.type="button";b.className="sector";b.setAttribute("aria-pressed",String(filtroSetor===s.id));
    b.innerHTML=`<div class="top"><span class="t"></span><span class="pill${n?"":" zero"}">${n} ${n===1?"pendente":"pendentes"}</span></div><div class="d"><svg class="i"><use href="#${s.icon}"/></svg><span></span></div>`;
    b.querySelector(".t").textContent=s.nome;b.querySelector(".d span").textContent=s.desc;
    b.onclick=()=>{filtroSetor=filtroSetor===s.id?"":s.id;filtroStatus="";render()};
    box.appendChild(b);
  });
}
function renderStats(){
  $("#s-total").textContent=doMes().length;
  ["andamento","aguardando","concluida"].forEach(k=>$("#s-"+k).textContent=doMes().filter(r=>r.status===k).length);
  document.querySelectorAll(".stat[data-status]").forEach(b=>b.setAttribute("aria-pressed",String(!filtroSetor&&b.dataset.status===filtroStatus&&filtroStatus!=="")));
}
function prazoTag(r){
  if(r.status==="concluida")return`<span class="tag ok">Concluída</span>`;
  if(!r.retorno)return`<span class="tag">Sem data de retorno</span>`;
  const d=diasAte(r.retorno);
  if(d<0)return`<span class="tag late">Atrasada ${-d} ${d===-1?"dia":"dias"} · ${fmt(r.retorno)}</span>`;
  if(d===0)return`<span class="tag today">Retornar hoje</span>`;
  if(d<=2)return`<span class="tag today">Retornar em ${d} ${d===1?"dia":"dias"} · ${fmt(r.retorno)}</span>`;
  return`<span class="tag">Retorno ${fmt(r.retorno)}</span>`;
}
function renderList(){
  const q=$("#q").value.trim().toLowerCase();
  let list=doMes().slice();
  if(filtroSetor)list=list.filter(r=>aguardandoSetor(r,filtroSetor));
  else if(filtroStatus)list=list.filter(r=>r.status===filtroStatus);
  if(q)list=list.filter(r=>(r.cliente+" "+(r.pedido||"")+" "+(r.desc||"")).toLowerCase().includes(q));
  // Abertas primeiro, ordenadas pela data de retorno mais próxima
  list.sort((a,b)=>(a.status==="concluida")-(b.status==="concluida")||(a.retorno||"9999").localeCompare(b.retorno||"9999"));
  const af=$("#active-filter");af.textContent="";
  const label=filtroSetor?SETORES.find(s=>s.id===filtroSetor).nome:(filtroStatus?STATUS[filtroStatus]:"");
  if(label){const c=document.createElement("button");c.type="button";c.className="chip";c.textContent=label+"  ✕";c.setAttribute("aria-label","Limpar filtro "+label);c.onclick=()=>{filtroSetor="";filtroStatus="";render()};af.appendChild(c)}
  const box=$("#items");box.textContent="";
  if(!list.length){const e=document.createElement("div");e.className="empty";
    e.textContent=items.length?(filtroMes?"Nenhuma reclamação neste mês com esse filtro.":"Nenhuma reclamação neste filtro."):"Nenhuma reclamação cadastrada ainda. Use “+ Nova reclamação” para registrar a primeira.";box.appendChild(e);return}
  list.forEach(r=>{
    const el=document.createElement("article");el.className="item"+(r.status==="concluida"?" done":(r.status==="andamento"?" prog":(r.status==="aguardando"?" late":"")));
    const setor=SETORES.find(s=>s.id===r.setor);
    el.innerHTML=`<div class="who"></div><button class="row-btn" type="button">Editar</button><div class="what"></div><div class="meta">${prazoTag(r)}${r.status!=="concluida"?`<span class="tag${r.status==="aguardando"?" wait":(r.status==="andamento"?" prog":"")}">${STATUS[r.status]}</span>`:""}${setor?`<span class="tag"></span>`:""}${r.abertura?`<span class="tag">Aberta ${fmt(r.abertura)}</span>`:""}</div>`;
    el.querySelector(".who").textContent=r.cliente+(r.pedido?" · "+r.pedido:"");
    el.querySelector(".what").textContent=r.desc||"";
    if(setor)el.querySelector(".meta .tag:nth-child("+(r.status!=="concluida"?3:2)+")").textContent="Setor: "+setor.nome;
    el.querySelector(".row-btn").onclick=()=>openForm(r);
    box.appendChild(el);
  });
}
function render(){atualizarMeses();renderStats();renderSectors();renderList()}

document.querySelectorAll(".stat[data-status]").forEach(b=>b.onclick=()=>{filtroSetor="";filtroStatus=filtroStatus===b.dataset.status?"":b.dataset.status;render()});
$("#q").oninput=renderList;
$("#mes").onchange=e=>{filtroMes=e.target.value;render()};

function openForm(r){
  editId=r?r.id:null;delArmed=false;
  $("#form-title").textContent=r?"Editar reclamação":"Nova reclamação";
  $("#f-cliente").value=r?.cliente||"";$("#f-pedido").value=r?.pedido||"";$("#f-desc").value=r?.desc||"";
  $("#f-abertura").value=r?.abertura||hoje();$("#f-retorno").value=r?.retorno||"";
  $("#f-status").value=r?.status||"andamento";$("#f-setor").value=r?.setor||"";
  $("#btn-del").hidden=!r;$("#btn-del").textContent="Excluir";
  $("#overlay").hidden=false;$("#f-cliente").focus();
}
function closeForm(){$("#overlay").hidden=true;editId=null}
$("#btn-new").onclick=()=>{if(aba==="documentacoes")openDoc(null);else openForm(null)};
$("#btn-cancel").onclick=closeForm;
$("#overlay").addEventListener("click",e=>{if(e.target.id==="overlay")closeForm()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#overlay").hidden)closeForm()});

let toastT;function toast(m){const t=$("#toast");t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2400)}

$("#form").addEventListener("submit",async e=>{
  e.preventDefault();
  const cliente=$("#f-cliente").value.trim();
  if(!cliente){$("#f-cliente").focus();toast("Informe o nome do cliente");return}
  const status=$("#f-status").value,setor=$("#f-setor").value;
  if(status==="aguardando"&&!setor){$("#f-setor").focus();toast("Escolha o setor responsável pelo retorno");return}
  const data={cliente,pedido:$("#f-pedido").value.trim(),desc:$("#f-desc").value.trim(),abertura:$("#f-abertura").value,
    retorno:$("#f-retorno").value,status,setor,atualizado:new Date().toISOString()};
  const id=editId||("r"+Date.now().toString(36)+Math.random().toString(36).slice(2,6));
  closeForm();
  await salvar(id,data);
  toast(editId===null?"Reclamação salva":"Alterações salvas");
});
$("#btn-del").onclick=async()=>{
  if(!delArmed){delArmed=true;$("#btn-del").textContent="Confirmar exclusão";return}
  const id=editId;closeForm();await excluir(id);toast("Reclamação excluída");
};

// ---- Dados (Supabase) ----
async function salvar(id,data){
  if(!editor){toast("Somente visualização");return}
  const {desc,...resto}=data;
  const {error}=await sb.from("reclamacoes").upsert({id,...resto,descricao:desc||""});
  if(error){toast(erroMsg(error));return}
  await carregarReclamacoes();
}
async function excluir(id){
  if(!editor)return;
  const {error}=await sb.from("reclamacoes").delete().eq("id",id);
  if(error){toast(erroMsg(error));return}
  await carregarReclamacoes();
}
// ================= Abas =================
let aba="reclamacoes";
function mostrarAba(v){
  aba=v==="documentacoes"?"documentacoes":"reclamacoes";
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",String(t.dataset.view===aba)));
  $("#view-reclamacoes").hidden=aba!=="reclamacoes";
  $("#view-documentacoes").hidden=aba!=="documentacoes";
  $("#btn-new").textContent=aba==="documentacoes"?"+ Nova solicitação":"+ Nova reclamação";
  document.querySelector(".head h1").textContent=aba==="documentacoes"?"Controle de Documentos":"Controle de Reclamações";
}
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{mostrarAba(t.dataset.view);try{history.replaceState(null,"","#"+aba)}catch{location.hash=aba}});
window.addEventListener("hashchange",()=>mostrarAba(location.hash.slice(1)));
mostrarAba(location.hash.slice(1));

// ================= Documentações para clientes =================
let docs=[],dFiltro="",dEditId=null,dDelArmed=false;
function renderDocs(){
  $("#d-total").textContent=docs.length;
  $("#d-pendente").textContent=docs.filter(d=>d.status!=="concluido").length;
  $("#d-concluido").textContent=docs.filter(d=>d.status==="concluido").length;
  document.querySelectorAll("[data-dstatus]").forEach(b=>b.setAttribute("aria-pressed",String(dFiltro!==""&&b.dataset.dstatus===dFiltro)));
  const q=$("#dq").value.trim().toLowerCase();
  let list=docs.slice();
  if(dFiltro)list=list.filter(d=>(d.status==="concluido"?"concluido":"pendente")===dFiltro);
  if(q)list=list.filter(d=>(d.cliente+" "+(d.documentos||"")+" "+(d.obs||"")).toLowerCase().includes(q));
  list.sort((a,b)=>(a.status==="concluido")-(b.status==="concluido")||(b.solicitado||"").localeCompare(a.solicitado||""));
  const af=$("#d-active-filter");af.textContent="";
  if(dFiltro){const c=document.createElement("button");c.type="button";c.className="chip";const l=dFiltro==="pendente"?"Pendentes":"Concluídas";c.textContent=l+"  ✕";c.setAttribute("aria-label","Limpar filtro "+l);c.onclick=()=>{dFiltro="";renderDocs()};af.appendChild(c)}
  const box=$("#d-items");box.textContent="";
  if(!list.length){const e=document.createElement("div");e.className="empty";
    e.textContent=docs.length?"Nenhuma solicitação neste filtro.":"Nenhuma solicitação de documentos ainda. Use “+ Nova solicitação” para registrar a primeira.";box.appendChild(e);return}
  list.forEach(d=>{
    const ok=d.status==="concluido";
    const el=document.createElement("article");el.className="item "+(ok?"done":"pend");
    el.innerHTML=`<div class="who"></div><button class="row-btn" type="button">Editar</button><div class="meta"><span class="tag ${ok?"ok":"pend"}">${ok?"Concluído":"Pendente"}</span>${d.solicitado?`<span class="tag">Solicitado ${fmt(d.solicitado)}</span>`:""}${d.enviado?`<span class="tag">Enviado ${fmt(d.enviado)}</span>`:`<span class="tag">Ainda não enviado</span>`}</div>`;
    el.querySelector(".who").textContent=d.cliente;
    if(d.documentos){
      const w=document.createElement("div");w.className="docs-list";
      const lb=document.createElement("span");lb.className="lbl";lb.textContent="Documentos enviados";w.appendChild(lb);
      if(d.documentos){const t=document.createElement("div");t.className="txt";t.textContent=d.documentos;w.appendChild(t)}
      el.appendChild(w);
    }
    if(d.obs){const o=document.createElement("div");o.className="obs";o.textContent=d.obs;el.appendChild(o)}
    el.querySelector(".row-btn").onclick=()=>openDoc(d);
    box.appendChild(el);
  });
}
document.querySelectorAll("[data-dstatus]").forEach(b=>b.onclick=()=>{dFiltro=dFiltro===b.dataset.dstatus?"":b.dataset.dstatus;renderDocs()});
$("#dq").oninput=renderDocs;

function openDoc(d){
  dEditId=d?d.id:null;dDelArmed=false;
  $("#d-form-title").textContent=d?"Editar solicitação de documentos":"Nova solicitação de documentos";
  $("#d-cliente").value=d?.cliente||"";$("#d-solicitado").value=d?.solicitado||hoje();$("#d-enviado").value=d?.enviado||"";
  $("#d-docs").value=d?.documentos||"";$("#d-status").value=d?.status||"pendente";$("#d-obs").value=d?.obs||"";
    $("#d-btn-del").hidden=!d;$("#d-btn-del").textContent="Excluir";
  $("#d-overlay").hidden=false;$("#d-cliente").focus();
}
function closeDoc(){$("#d-overlay").hidden=true;dEditId=null}
$("#d-btn-cancel").onclick=closeDoc;
$("#d-overlay").addEventListener("click",e=>{if(e.target.id==="d-overlay")closeDoc()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#d-overlay").hidden)closeDoc()});


$("#d-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const cliente=$("#d-cliente").value.trim();
  if(!cliente){$("#d-cliente").focus();toast("Informe o nome do cliente");return}
  const data={cliente,solicitado:$("#d-solicitado").value,enviado:$("#d-enviado").value,documentos:$("#d-docs").value.trim(),
    status:$("#d-status").value,obs:$("#d-obs").value.trim(),atualizado:new Date().toISOString()};
  const novo=dEditId===null;
  const id=dEditId||("d"+Date.now().toString(36)+Math.random().toString(36).slice(2,6));
  closeDoc();
  if(!editor){toast("Somente visualização");return}
  const {error}=await sb.from("documentacoes").upsert({id,...data});
  if(error){toast(erroMsg(error));return}
  toast(novo?"Solicitação salva":"Alterações salvas");await carregarDocs();
});
$("#d-btn-del").onclick=async()=>{
  if(!dDelArmed){dDelArmed=true;$("#d-btn-del").textContent="Confirmar exclusão";return}
  const id=dEditId;closeDoc();
  if(!editor)return;
  const {error}=await sb.from("documentacoes").delete().eq("id",id);
  if(error){toast(erroMsg(error));return}
  toast("Solicitação excluída");await carregarDocs();
};

renderDocs();

// ================= Acesso e carregamento =================
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
let editor=false,canal=null;
function erroMsg(e){
  const m=(e&&e.message)||"";
  if(/row-level security|permission|JWT|not authorized/i.test(m))return"Sua sessão expirou. Entre de novo para editar.";
  if(/Failed to fetch|NetworkError/i.test(m))return"Sem conexão com o servidor. Verifique a internet.";
  return"Não foi possível concluir. Tente de novo.";
}
async function carregarReclamacoes(){
  const {data,error}=await sb.from("reclamacoes").select("*");
  if(error){$("#sync-note").textContent="Não foi possível carregar as reclamações. Recarregue a página.";return}
  items=data.map(({descricao,...r})=>({...r,desc:descricao||""}));$("#sync-note").textContent=editor?"":"Somente visualização";render();
}
async function carregarDocs(){
  const {data,error}=await sb.from("documentacoes").select("*");
  if(error){$("#d-sync-note").textContent="Não foi possível carregar as documentações. Recarregue a página.";return}
  docs=data;$("#d-sync-note").textContent=editor?"":"Somente visualização";renderDocs();
}
function ouvirMudancas(){
  if(canal)return;
  canal=sb.channel("painel")
    .on("postgres_changes",{event:"*",schema:"public",table:"reclamacoes"},()=>carregarReclamacoes())
    .on("postgres_changes",{event:"*",schema:"public",table:"documentacoes"},()=>carregarDocs())
    .subscribe();
}
function abrirPainel(comoEditor){
  editor=comoEditor;
  document.body.classList.toggle("readonly",!editor);
  $("#btn-new").hidden=!editor;
  $("#btn-conta").textContent=editor?"Sair":"Entrar";
  $("#login").hidden=true;$("#painel").hidden=false;
  $("#sync-note").textContent="Carregando…";$("#d-sync-note").textContent="Carregando…";
  carregarReclamacoes();carregarDocs();ouvirMudancas();
}
function mostrarLogin(){
  $("#painel").hidden=true;$("#login").hidden=false;$("#l-erro").hidden=true;$("#l-senha").value="";$("#l-email").focus();
}
$("#login-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const email=$("#l-email").value.trim(),senha=$("#l-senha").value;
  const erro=$("#l-erro");erro.hidden=true;
  if(!email||!senha){erro.textContent="Preencha o e-mail e a senha.";erro.hidden=false;return}
  $("#l-entrar").disabled=true;$("#l-entrar").textContent="Entrando…";
  const {error}=await sb.auth.signInWithPassword({email,password:senha});
  $("#l-entrar").disabled=false;$("#l-entrar").textContent="Entrar";
  if(error){erro.textContent=/Invalid login/i.test(error.message)?"E-mail ou senha incorretos.":"Não foi possível entrar agora. Verifique a internet e tente de novo.";erro.hidden=false;return}
  abrirPainel(true);
});
$("#l-visualizar").onclick=()=>abrirPainel(false);
$("#btn-conta").onclick=async()=>{if(editor){await sb.auth.signOut();toast("Você saiu")}mostrarLogin()};
(async()=>{
  const {data:{session}}=await sb.auth.getSession();
  if(session)abrirPainel(true);else mostrarLogin();
})();

// Atualiza os prazos à meia-noite sem recarregar
setInterval(()=>{if($("#overlay").hidden)renderList()},60000);

