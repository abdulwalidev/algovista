"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Modern Navigation */}
      <div style={{ 
        backgroundColor: '#fff',
        borderBottom: '2px solid #e5e5e5',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: 'bold',
            color: '#1cb0f6',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>💡</span>
            AlgoLearn
          </div>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button style={{ 
              background: 'none',
              border: 'none',
              color: '#777',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: '700',
              padding: '8px 16px',
              borderRadius: '12px',
              transition: 'background 0.2s'
            }}>
              EXPLORE
            </button>
            <button style={{
              backgroundColor: '#1cb0f6',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '12px',
              fontSize: '15px',
              cursor: 'pointer',
              fontWeight: '700',
              boxShadow: '0 4px 0 #1899D6',
              transition: 'transform 0.1s'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(2px)';
              e.currentTarget.style.boxShadow = '0 2px 0 #1899D6';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 0 #1899D6';
            }}>
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Duolingo Style */}
      <div style={{ 
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '48px',
            fontWeight: '800',
            color: '#4b4b4b',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            The fun way to learn algorithms
          </h1>
          <p style={{ 
            fontSize: '20px',
            color: '#777',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Learn DSA through interactive visualizations. It's fun, effective, and 100% free.
          </p>
          
          <button style={{
            backgroundColor: '#58cc02',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '16px',
            fontSize: '17px',
            cursor: 'pointer',
            fontWeight: '700',
            boxShadow: '0 6px 0 #58A700',
            transition: 'transform 0.1s',
            marginBottom: '20px'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(3px)';
            e.currentTarget.style.boxShadow = '0 3px 0 #58A700';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 0 #58A700';
          }}>
            GET STARTED
          </button>
          
          <div style={{ 
            display: 'flex', 
            gap: '30px',
            marginTop: '40px',
            fontSize: '15px',
            color: '#777'
          }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#4b4b4b' }}>20+</div>
              <div>Algorithms</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#4b4b4b' }}>1</div>
              <div>Active learners</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#4b4b4b' }}>100%</div>
              <div>Free (maybe depends we("i") might make it 2$/month if we bouttu end up broke, we need bread gng🙏, pls understand)</div>
            </div>
          </div>
        </div>

        {/* Mascot/Illustration Area */}
        <div style={{
          
          borderRadius: 'px',
          padding: 'px',
          textAlign: 'center',
          
        }}>
          <div style={{ fontSize: '120px' }}>🎯</div>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#4b4b4b',
            marginTop: '20px'
          }}>
            Start your journey!
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div style={{ 
        backgroundColor: '#f7f7f7',
        padding: '60px 20px'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '36px',
            fontWeight: '800',
            color: '#4b4b4b',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Choose your path
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {/* Searching Path */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid #e5e5e5',
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#1cb0f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e5e5';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#4b4b4b', marginBottom: '12px' }}>
                Searching
              </h3>
              <p style={{ color: '#777', fontSize: '15px', marginBottom: '16px' }}>
                Master search algorithms from linear to binary
              </p>
              <div style={{
                backgroundColor: '#e5f5ff',
                color: '#1cb0f6',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'inline-block'
              }}>
                3 LESSONS
              </div>
            </div>

            {/* Sorting Path */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid #e5e5e5',
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#58cc02';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e5e5';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#4b4b4b', marginBottom: '12px' }}>
                Sorting
              </h3>
              <p style={{ color: '#777', fontSize: '15px', marginBottom: '16px' }}>
                Learn sorting from bubble to quick sort
              </p>
              <div style={{
                backgroundColor: '#e7ffe5',
                color: '#58cc02',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'inline-block'
              }}>
                5 LESSONS
              </div>
            </div>

            {/* Graphs Path */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid #e5e5e5',
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#ff9600';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e5e5';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌳</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#4b4b4b', marginBottom: '12px' }}>
                Graphs
              </h3>
              <p style={{ color: '#777', fontSize: '15px', marginBottom: '16px' }}>
                Explore DFS, BFS, and pathfinding
              </p>
              <div style={{
                backgroundColor: '#fff0e5',
                color: '#ff9600',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'inline-block'
              }}>
                6 LESSONS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Algorithms - Interactive Cards */}
      <div style={{ 
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <h2 style={{ 
          fontSize: '36px',
          fontWeight: '800',
          color: '#4b4b4b',
          marginBottom: '40px'
        }}>
          Start learning 🚀
        </h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          {/* Linear Search - CLICKABLE */}
          <Link href="/linear-search" style={{ textDecoration: 'none' }}>
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
              e.currentTarget.style.borderColor = '#1cb0f6';
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
                  backgroundColor: '#e5f5ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px'
                }}>
                  🔍
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#4b4b4b', marginBottom: '4px' }}>
                    Linear Search
                  </h3>
                  <p style={{ color: '#777', fontSize: '15px' }}>
                    Check each element one by one
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
                  color: '#1cb0f6',
                  fontSize: '32px',
                  fontWeight: '700'
                }}>
                  →
                </div>
              </div>
            </div>
          </Link>

          {/* Binary Search - Coming Soon */}
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
                🎯
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#4b4b4b', marginBottom: '4px' }}>
                  Binary Search
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
          </div>
        </div>

      {/* Footer CTA */}
      <div style={{
        backgroundColor: '#1cb0f6',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: 'white',
          marginBottom: '16px'
        }}>
          Ready to start?
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '32px'
        }}>
          Join thousands learning algorithms the fun way
        </p>
        <button style={{
          backgroundColor: '#fff',
          color: '#1cb0f6',
          border: 'none',
          padding: '16px 48px',
          borderRadius: '16px',
          fontSize: '17px',
          cursor: 'pointer',
          fontWeight: '700',
          boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
          transition: 'transform 0.1s'
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(3px)';
          e.currentTarget.style.boxShadow = '0 3px 0 rgba(0,0,0,0.1)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 0 rgba(0,0,0,0.1)';
        }}>
          START NOW - IT'S FREE
        </button>
      </div>
    </div>
  );
}