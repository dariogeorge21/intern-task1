import './App.css'

export default function App() {

  type Guest = {
    name: string;
    email: string;
    time: string;
  };

  const guests: Guest[] = [
    { name: 'Ananthu M P', email: 'emp2@acme', time: '5 days ago' },
    { name: 'Aro Ann', email: 'anann23', time: '1 week ago' },
    { name: 'Ananthu M P', email: 'emp2@acme', time: '2 weeks ago' },
    { name: 'Ananthu M P', email: 'ananthu.mp2173', time: '3 weeks ago' },
    { name: 'Ananthu M P', email: 'emp2@acme', time: '4 weeks ago' },
    { name: 'Aswin Asok', email: 'aswinasokofficial', time: '4 weeks ago' },
    { name: 'Ananthu M P', email: 'emp2@acme', time: '4 weeks ago' },
    { name: 'Aswin Asok', email: 'aswinasokofficial', time: '4 weeks ago' },
    { name: 'Ananthu M P', email: 'ananthumpk.magic', time: '5 weeks ago' }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="logo">MeetMyPass</div>
          <div className="event-title">
            <span className="demo-badge">DEMO</span>
            Paradox Productions Meet-Up
          </div>
        </div>
        <div className="header-right">
          <span>Hi user@gmail.com</span>
          <button className="view-docs">View Docs</button>
        </div>
      </header>

      <nav className="nav-tabs">
        <span>Overview</span>
        <span>Insights</span>
        <span className="active">Guests</span>
        <span>Event Page</span>
        <span>Form Builder</span>
        <span>Scan QR</span>
        <span>In-Event</span>
        <span>Logs</span>
        <span>Finance</span>
        <span>Post Event</span>
        <span>Child Events</span>
      </nav>

      <main className="main-content">
        <section className="at-glance">
          <h2>At a Glance</h2>
          <div className="stats-bar">
            <div className="stat">
              <span className="number">80</span>
              <span className="label">unique guests</span>
            </div>
            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-stats">
                <span className="shortlisted">59 shortlisted</span>
                <span className="unclaimed">11 unclaimed</span>
              </div>
            </div>
            <div className="last-registered">
              Last Registered 1st May at 7:42 PM
            </div>
          </div>
          <div className="ticket-info">
            <span>(260) Special Ticket</span>
            <span>(3) Demo Paid Ticket</span>
            <span>(4) Hackathon</span>
            <span>(50) New Ticket</span>
          </div>
        </section>

        <section className="action-buttons">
          <button className="action-btn">Dropped Users</button>
          <button className="action-btn">Blacklisted Users</button>
          <button className="action-btn">Export Data</button>
          <button className="action-btn">Add Guest</button>
        </section>

        <section className="guests-section">
          <h2>Guests List</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="guests-header">
            <h3>Recent Guests(30)</h3>
            <div className="filters">
              <div className="filters-row">{/* Add CSS for horizontal layout */}
                <select>
                  <option>Select Multiple</option>
                </select>
                <select>
                  <option>Checked In</option>
                </select>
                <select>
                  <option>Approval Status</option>
                </select>
                <select>
                  <option>Registration Status</option>
                </select>
              </div>
            </div>
          </div>

          <div className="guests-table">
            {guests.map((guest: Guest, index: number) => (
              <div key={index} className="guest-row">
                <div className="guest-info">
                  <span className="guest-name">{guest.name}</span>
                  <span className="guest-email">{guest.email}</span>
                </div>
                <div className="guest-time">{guest.time}</div>
                <div className="guest-actions">
                  <button className="action-icon">✏️</button>
                  <button className="action-icon">👁️</button>
                  <button className="action-icon">💬</button>
                  <button className="action-icon">📋</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pagination">
          <div className="records-info">89 Records</div>
          <div className="page-info">
            <span>Per Page: 30</span>
            <span>1 of 3</span>
            <div className="page-controls">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
