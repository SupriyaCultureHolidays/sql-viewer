import { useEffect, useRef, useState } from "react";
import { tables, tableIcons, statusColors, tableKeys, tableTypes, questions } from "./data";
import "./App.css";

const STATUS_COLS = new Set(["status", "order_status", "payment_status", "payment_method", "payment_gateway"]);

function Badge({ value, onClick, copied }) {
  const color = statusColors[value] ?? "#94a3b8";
  return (
    <span className={`badge badge-copy ${copied ? "badge-copied" : ""}`} onClick={onClick} style={{ background: color + "22", color, border: `1px solid ${color}55` }} title="Click to copy">
      {copied ? "✓" : value}
    </span>
  );
}

function MobileCardView({ name }) {
  const { columns, rows } = tables[name];
  const { pk, fk } = tableKeys[name];
  const types = tableTypes[name];
  const [copiedBadge, setCopiedBadge] = useState("");

  function copyBadge(val) {
    navigator.clipboard.writeText(val);
    setCopiedBadge(val);
    setTimeout(() => setCopiedBadge(""), 1500);
  }

  return (
    <>
      <div className="mobile-table-bar">
        <span className="mobile-title">{tableIcons[name]} {name}</span>
        <span className="mobile-meta">{columns.length} cols · {rows.length} rows</span>
      </div>

      <div className="mobile-scroll">
        <div className="mobile-cards">
          {rows.map((row, i) => (
            <div key={i} className="mobile-card">
              <div className="card-row-num">Row {i + 1}</div>
              {columns.map((col) => {
                const val = row[col];
                const isNull = val === null || val === undefined;
                const isStatus = STATUS_COLS.has(col) && !isNull;
                const isPK = col === pk;
                const isFKRef = fk[col];
                return (
                  <div key={col} className="card-field">
                    <div className="card-col">
                      <div className="card-col-name">
                        {col}
                        {isPK && <span className="inline-badge pk">PK</span>}
                        {isFKRef && <span className="inline-badge fk">FK</span>}
                      </div>
                      {types[col] && <span className={`type-chip type-${types[col].toLowerCase()}`}>{types[col]}</span>}
                    </div>
                    <div className="card-val">
                      {isNull ? (
                        <span className="null">NULL</span>
                      ) : isStatus ? (
                        <Badge value={String(val)} onClick={() => copyBadge(String(val))} copied={copiedBadge === String(val)} />
                      ) : (
                        <span className="card-val-text">{String(val)}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <p className="note">⚡ {rows.length} sample rows</p>
      </div>
    </>
  );
}

function TableView({ name }) {
  const { columns, rows } = tables[name];
  const { pk, fk } = tableKeys[name];
  const types = tableTypes[name];
  const [copied, setCopied] = useState("");
  const [copiedCol, setCopiedCol] = useState("");
  const [copiedBadge, setCopiedBadge] = useState("");

  function copyBadge(val) {
    navigator.clipboard.writeText(val);
    setCopiedBadge(val);
    setTimeout(() => setCopiedBadge(""), 1500);
  }

  const queries = [
    { label: "SELECT *", sql: `SELECT * FROM ${name};` },
    { label: "COUNT", sql: `SELECT COUNT(*) FROM ${name};` },
    { label: "LIMIT 10", sql: `SELECT * FROM ${name} LIMIT 10;` },
    { label: "DESC", sql: `DESC ${name};` },
  ];

  function copy(sql) {
    navigator.clipboard.writeText(sql);
    setCopied(sql);
    setTimeout(() => setCopied(""), 1500);
  }

  function copyCol(col) {
    navigator.clipboard.writeText(col);
    setCopiedCol(col);
    setTimeout(() => setCopiedCol(""), 1500);
  }

  return (
    <div className="table-view">
      <div className="table-header">
        <h2>{tableIcons[name]} {name}</h2>
        <span className="meta">{columns.length} columns · {Object.keys(tables).indexOf(name) + 1} of {Object.keys(tables).length} tables</span>
      </div>

      <div className="quick-queries">
        {queries.map((q) => (
          <button
            key={q.label}
            className={`query-btn ${copied === q.sql ? "copied" : ""}`}
            onClick={() => copy(q.sql)}
            title={q.sql}
          >
            {copied === q.sql ? "✓ Copied!" : q.label}
          </button>
        ))}
      </div>

      <div className="sql-box">
        <code>SELECT * FROM {name};</code>
      </div>

      <div className="scroll-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((col) => {
                const isPK = col === pk;
                const isFKRef = fk[col];
                return (
                  <th key={col} className="th-copy" onClick={() => copyCol(col)} title="Click to copy">
                    <div className="th-top">
                      {isPK && <span className="key-badge pk" title="Primary Key — unique identifier for each row">PK</span>}
                      {isFKRef && <span className="key-badge fk" title={`Foreign Key → ${isFKRef}`}>FK</span>}
                      {col}
                      <span className={`th-badge ${copiedCol === col ? "th-badge--show" : ""}`}>
                        {copiedCol === col ? "✓" : "⎘"}
                      </span>
                    </div>
                    {types[col] && <div className={`type-chip type-${types[col].toLowerCase()}`}>{types[col]}</div>}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => {
                  const val = row[col];
                  const isNull = val === null || val === undefined;
                  const isStatus = STATUS_COLS.has(col) && !isNull;
                  return (
                    <td key={col}>
                      {isNull ? (
                        <span className="null">NULL</span>
                      ) : isStatus ? (
                        <Badge value={String(val)} onClick={() => copyBadge(String(val))} copied={copiedBadge === String(val)} />
                      ) : (
                        String(val)
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="note">⚡ Showing {rows.length} sample rows — run queries in your MySQL client</p>
    </div>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth <= 600);
  useState(() => {
    const fn = () => setMobile(window.innerWidth <= 600);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  });
  return mobile;
}

function QuestionPanel({ activeQ, onSelect, activeTable }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelRef = useRef(null);

  function handleSelect(q) {
    onSelect(q);
    setOpen(false);
    setSearch("");
    setShowAnswer(false);
  }

  function handleClear() {
    onSelect(null);
    setShowAnswer(false);
  }

  function copyAnswer() {
    const text = activeQ?.answer;
    if (!text) return;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function fallbackCopy(text) {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  const filtered = questions.filter(
    (q) => q.text.toLowerCase().includes(search.toLowerCase()) || q.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="qpanel" ref={panelRef}>
      <button
        className="qpanel-toggle"
        onClick={() => {
          setOpen((o) => !o);
          setShowAnswer(false);
        }}
      >
        <span>📝 Questions</span>
        <span className="qpanel-toggle-meta">
          {activeQ ? <span className="qpanel-active-id">{activeQ.id}</span> : "Select a question"}
          <span className="qpanel-arrow">{open ? "▲" : "▼"}</span>
        </span>
      </button>

      {activeQ && (
        <div className="qpanel-current">
          <span className="qbadge">{activeQ.id}</span>
          <span className="qtext">{activeQ.text}</span>
          <button className="qclear" onClick={handleClear} title="Clear">✕</button>
        </div>
      )}

      {activeQ && (
        <div className="qanswer-bar">
          <button
            className={`qanswer-toggle ${showAnswer ? "qanswer-toggle--open" : ""}`}
            onClick={() => setShowAnswer((s) => !s)}
          >
            {showAnswer ? "🙈 Hide Answer" : "💡 Show Answer"}
          </button>
          {showAnswer && (
            <button className={`qanswer-copy ${copied ? "qanswer-copy--done" : ""}`} onClick={copyAnswer}>
              {copied ? "✓ Copied" : "⧉ Copy"}
            </button>
          )}
        </div>
      )}

      {activeQ && showAnswer && (
        <pre className="qanswer-code">{activeQ.answer}</pre>
      )}

      {open && (
        <div className="qpanel-dropdown">
          <input
            className="qsearch"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <div className="qlist">
          {filtered.map((q) => {
              const isActive = activeQ?.id === q.id;
              const involvesCurrentTable = q.tables.includes(activeTable);
              return (
                <button
                  key={q.id}
                  className={`qitem ${isActive ? "qitem--active" : ""} ${involvesCurrentTable ? "qitem--related" : ""}`}
                  onClick={() => handleSelect(q)}
                >
                  <span className="qitem-id">{q.id}</span>
                  <span className="qitem-text">{q.text}</span>
                  {involvesCurrentTable && <span className="qitem-dot" title="Uses current table" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const tableNames = Object.keys(tables);
  const [active, setActive] = useState(tableNames[0]);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeQ, setActiveQ] = useState(null);
  const isMobile = useIsMobile();

  const filtered = tableNames.filter((t) => t.includes(search.toLowerCase()));

  function selectTable(name) {
    setActive(name);
    setSidebarOpen(false);
  }

  return (
    <div className="app">
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-top">
          <div className="brand">🗄️ ECOMMERCE DB</div>
          <input
            className="search"
            placeholder="Search tables..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <nav>
          {filtered.map((name) => {
            const isRelated = activeQ?.tables.includes(name);
            return (
              <button
                key={name}
                className={`nav-item ${active === name ? "active" : ""} ${isRelated ? "nav-item--related" : ""}`}
                onClick={() => selectTable(name)}
              >
                <span className="icon">{tableIcons[name]}</span>
                <span className="tname">{name}</span>
                <span className="col-count">{tables[name].columns.length}</span>
                {isRelated && <span className="nav-dot" />}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">{tableNames.length} tables total</div>
      </aside>

      <main className="main">
        <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          ☰
        </button>
        <QuestionPanel activeQ={activeQ} onSelect={setActiveQ} activeTable={active} />
        {isMobile ? <MobileCardView key={active} name={active} /> : <TableView key={active} name={active} />}
      </main>
    </div>
  );
}
