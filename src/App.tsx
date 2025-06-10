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
              <div className="filters-row">
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
                  <button className="action-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99992 13.6666C3.31802 13.6666 0.333252 10.6818 0.333252 6.99998C0.333252 3.31808 3.31802 0.333313 6.99992 0.333313C10.6818 0.333313 13.6666 3.31808 13.6666 6.99998C13.6666 10.6818 10.6818 13.6666 6.99992 13.6666ZM6.99992 12.3333C9.94545 12.3333 12.3333 9.94551 12.3333 6.99998C12.3333 4.05446 9.94545 1.66665 6.99992 1.66665C4.0544 1.66665 1.66659 4.05446 1.66659 6.99998C1.66659 9.94551 4.0544 12.3333 6.99992 12.3333ZM6.33499 9.66665L3.50658 6.83825L4.44939 5.89538L6.33499 7.78105L10.1063 4.00979L11.0491 4.9526L6.33499 9.66665Z" fill="#8E8E8E"/>
                    </svg>

                  </button>
                  <button className="action-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99992 13.6666C3.31802 13.6666 0.333252 10.6818 0.333252 6.99998C0.333252 3.31808 3.31802 0.333313 6.99992 0.333313C10.6818 0.333313 13.6666 3.31808 13.6666 6.99998C13.6666 10.6818 10.6818 13.6666 6.99992 13.6666ZM6.99992 12.3333C9.94545 12.3333 12.3333 9.94551 12.3333 6.99998C12.3333 4.05446 9.94545 1.66665 6.99992 1.66665C4.0544 1.66665 1.66659 4.05446 1.66659 6.99998C1.66659 9.94551 4.0544 12.3333 6.99992 12.3333ZM6.33499 9.66665L3.50658 6.83825L4.44939 5.89538L6.33499 7.78105L10.1063 4.00979L11.0491 4.9526L6.33499 9.66665Z" fill="#8E8E8E"/>
                    </svg>
                  </button>
                  <button className="action-icon">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00005 0C5.55317 0 6.00005 0.446875 6.00005 1V2.11562C6.05005 2.12187 6.09692 2.12812 6.14692 2.1375C6.15942 2.14062 6.1688 2.14062 6.1813 2.14375L7.6813 2.41875C8.22505 2.51875 8.58442 3.04063 8.48442 3.58125C8.38442 4.12187 7.86255 4.48438 7.32192 4.38438L5.83755 4.1125C4.85942 3.96875 3.99692 4.06563 3.39067 4.30625C2.78442 4.54688 2.54067 4.87812 2.48442 5.18437C2.42192 5.51875 2.4688 5.70625 2.52192 5.82188C2.57817 5.94375 2.69379 6.08125 2.92192 6.23438C3.43129 6.56875 4.21255 6.7875 5.22505 7.05625L5.31567 7.08125C6.20942 7.31875 7.30317 7.60625 8.11567 8.1375C8.55942 8.42812 8.97817 8.82187 9.23755 9.37187C9.50317 9.93125 9.55942 10.5563 9.43754 11.2219C9.22192 12.4094 8.40317 13.2031 7.38755 13.6187C6.95942 13.7937 6.4938 13.9062 6.00005 13.9625V15.0063C6.00005 15.5594 5.55317 16.0063 5.00005 16.0063C4.44692 16.0063 4.00005 15.5594 4.00005 15.0063V13.9156C3.98755 13.9125 3.97192 13.9125 3.95942 13.9094H3.95317C3.19067 13.7906 1.93755 13.4625 1.0938 13.0875C0.59067 12.8625 0.362545 12.2719 0.587545 11.7688C0.812545 11.2656 1.40317 11.0375 1.9063 11.2625C2.55942 11.5531 3.63442 11.8406 4.25629 11.9375C5.25317 12.0844 6.07505 12 6.6313 11.7719C7.15942 11.5563 7.40005 11.2437 7.4688 10.8687C7.52817 10.5375 7.4813 10.3469 7.42817 10.2312C7.3688 10.1062 7.25317 9.96875 7.02192 9.81563C6.50942 9.48125 5.72505 9.2625 4.70942 8.99375L4.62192 8.97188C3.7313 8.72813 2.63755 8.4375 1.82505 7.90625C1.3813 7.61562 0.96567 7.21875 0.706295 6.66875C0.443795 6.10938 0.39067 5.48438 0.51567 4.81875C0.74067 3.625 1.63442 2.85 2.65005 2.44688C3.06567 2.28125 3.52192 2.16875 4.00005 2.10313V1C4.00005 0.446875 4.44692 0 5.00005 0Z" fill="#8E8E8E"/>
                    </svg>
                  </button>
                  <button className="action-icon">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.33668 -0.000244141V11.9998H1.00334C0.63515 11.9998 0.33667 11.7012 0.33667 11.3331V7.66645C1.25714 7.66645 2.00334 6.92025 2.00334 5.99978C2.00334 5.07932 1.25714 4.33309 0.33667 4.33309V0.666423C0.33667 0.298236 0.63515 -0.000244141 1.00334 -0.000244141H8.33668ZM9.67002 -0.000244141H13.0033C13.3715 -0.000244141 13.67 0.298236 13.67 0.666423V4.33309C12.7495 4.33309 12.0033 5.07932 12.0033 5.99978C12.0033 6.92025 12.7495 7.66645 13.67 7.66645V11.3331C13.67 11.7012 13.3715 11.9998 13.0033 11.9998H9.67002V-0.000244141Z" fill="#8E8E8E"/>
                    </svg>

                  </button>
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
