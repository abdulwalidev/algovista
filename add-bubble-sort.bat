// FIND THIS in src/app/page.js (around line 350):

          {/* Bubble Sort - Coming Soon */}
          <div style={{ 
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '28px',
            border: '2px solid #e5e5e5',
            cursor: 'not-allowed',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: 0.5
          }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px'
              }}>
                📊
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#4b4b4b', marginBottom: '4px' }}>
                  Bubble Sort
                </h3>
                <p style={{ color: '#777', fontSize: '15px' }}>
                  Coming soon...
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#f7f7f7',
              color: '#afafaf',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '700'
            }}>
              LOCKED 🔒
            </div>
          </div>

// REPLACE WITH THIS:

          {/* Bubble Sort - CLICKABLE */}
          <Link href="/sorting/bubble-sort" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '28px',
              border: '2px solid #e5e5e5',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateX(8px)';
              e.currentTarget.style.borderColor = '#58cc02';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.borderColor = '#e5e5e5';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e7ffe5',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px'
                }}>
                  📊
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#4b4b4b', marginBottom: '4px' }}>
                    Bubble Sort
                  </h3>
                  <p style={{ color: '#777', fontSize: '15px' }}>
                    Simple sorting with bubbling elements
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#dcfce7',
                  color: '#16a34a',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '700'
                }}>
                  EASY
                </div>
                <div style={{
                  color: '#58cc02',
                  fontSize: '32px',
                  fontWeight: '700'
                }}>
                  →
                </div>
              </div>
            </div>
          </Link>