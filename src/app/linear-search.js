"use client"

import { useState, useEffect } from 'react';

export default function LinearSearch() {
  const [array] = useState([5, 2, 8, 1, 9, 3, 7, 4, 6]);
  const [target, setTarget] = useState(7);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [found, setFound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click Start!');
  const [activeLine, setActiveLine] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [speed, setSpeed] = useState(600);

  const reset = () => {
    setCurrentIndex(-1);
    setFound(false);
    setIsPlaying(false);
    setMessage('Click Start!');
    setActiveLine(0);
    setSubStep(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      // Step 0: Show for loop iteration
      if (subStep === 0) {
        const nextIndex = currentIndex + 1;
        
        if (nextIndex >= array.length) {
          setMessage(`${target} not found!`);
          setIsPlaying(false);
          setActiveLine(6);
          return;
        }
        
        setCurrentIndex(nextIndex);
        setActiveLine(1);
        setMessage(`Loop iteration: i = ${nextIndex}`);
        setSubStep(1);
      }
      // Step 1: Show the if check
      else if (subStep === 1) {
        setActiveLine(3);
        setMessage(`Checking: arr[${currentIndex}] = ${array[currentIndex]} == ${target}?`);
        setSubStep(2);
      }
      // Step 2: Result
      else if (subStep === 2) {
        if (array[currentIndex] === target) {
          setFound(true);
          setActiveLine(4);
          setMessage(`Found ${target} at index ${currentIndex}! 🎉`);
          setIsPlaying(false);
        } else {
          setMessage(`${array[currentIndex]} ≠ ${target}, continue...`);
          setSubStep(0);
        }
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [isPlaying, subStep, currentIndex, array, target, found]);

  const start = () => {
    reset();
    setIsPlaying(true);
    setSubStep(0);
  };

  const codeLines = [
    'int linearSearch(int arr[], int n, int target) {',
    '    for (int i = 0; i < n; i++) {  ← Loop iteration',
    '        ',
    '        if (arr[i] == target)  ← Checking condition',
    '            return i;  ← Found!',
    '    }',
    '    return -1;  ← Not found',
    '}'
  ];

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
      {/* Top Banner Ad */}
      <div style={{ 
        backgroundColor: '#2a2a2a', 
        padding: '15px',
        textAlign: 'center',
        borderBottom: '1px solid #444'
      }}>
        <div style={{ 
          width: '728px', 
          height: '90px', 
          backgroundColor: '#333',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          borderRadius: '5px'
        }}>
          Ad Space (728x90)
        </div>
      </div>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Sidebar Ad */}
        <div style={{ width: '160px', padding: '20px' }}>
          <div style={{ 
            position: 'sticky',
            top: '20px',
            backgroundColor: '#333',
            width: '160px',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            borderRadius: '5px',
            fontSize: '12px',
            textAlign: 'center'
          }}>
            Ad Space<br/>(160x600)
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '40px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '10px' }}>Linear Search</h1>
          
          {/* Complexity Info */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px',
            marginBottom: '30px',
            fontSize: '16px'
          }}>
            <div>Time: <span style={{ color: '#22c55e', fontWeight: 'bold' }}>O(n)</span></div>
            <div>Space: <span style={{ color: '#22c55e', fontWeight: 'bold' }}>O(1)</span></div>
            <div>Steps: <span style={{ color: '#eab308', fontWeight: 'bold' }}>{currentIndex >= 0 ? currentIndex + 1 : 0}</span></div>
          </div>

          {/* Controls */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <label style={{ fontSize: '18px', marginRight: '10px' }}>Find:</label>
            <input
              type="number"
              value={target}
              onChange={(e) => { setTarget(Number(e.target.value)); reset(); }}
              style={{ 
                width: '80px', 
                padding: '10px', 
                fontSize: '18px',
                backgroundColor: '#333',
                color: 'white',
                border: '2px solid #555',
                borderRadius: '5px',
                marginRight: '20px'
              }}
            />
            
            <label style={{ fontSize: '18px', marginRight: '10px' }}>Speed:</label>
            <input
              type="range"
              min="200"
              max="1500"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              style={{ 
                width: '150px',
                marginRight: '10px',
                verticalAlign: 'middle'
              }}
            />
            <span style={{ fontSize: '14px', color: '#888', marginRight: '20px' }}>
              {speed < 400 ? 'Fast' : speed < 800 ? 'Medium' : 'Slow'}
            </span>
            
            <button
              onClick={start}
              style={{ 
                padding: '12px 30px',
                fontSize: '18px',
                backgroundColor: '#22c55e',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Start
            </button>
            
            <button
              onClick={reset}
              style={{ 
                padding: '12px 30px',
                fontSize: '18px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>

          {/* Message */}
          <div style={{ 
            textAlign: 'center', 
            fontSize: '20px', 
            marginBottom: '30px',
            padding: '15px',
            backgroundColor: '#333',
            borderRadius: '10px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {message}
          </div>

          {/* Array Visualization */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px',
            marginBottom: '40px'
          }}>
            {array.map((num, idx) => {
              let bgColor = '#555';
              if (idx === currentIndex && found) bgColor = '#22c55e';
              else if (idx === currentIndex) bgColor = '#eab308';
              else if (idx < currentIndex) bgColor = '#333';
              
              return (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      borderRadius: '10px',
                      transition: 'all 0.3s',
                      border: idx === currentIndex ? '3px solid white' : 'none'
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ 
                    marginTop: '8px',
                    fontSize: '14px',
                    color: '#888',
                    fontWeight: 'bold'
                  }}>
                    [{idx}]
                  </div>
                </div>
              );
            })}
          </div>

          {/* C++ Code */}
          <div style={{ 
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '40px'
          }}>
            <div style={{ 
              color: '#888',
              fontSize: '14px',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}>
              C++ CODE (Execution Flow):
            </div>
            <pre style={{ 
              fontFamily: 'monospace',
              fontSize: '16px',
              margin: 0,
              lineHeight: '1.8'
            }}>
              {codeLines.map((line, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: activeLine === idx ? '#3a3a00' : 'transparent',
                    padding: '4px 8px',
                    borderLeft: activeLine === idx ? '4px solid #eab308' : '4px solid transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  {line}
                </div>
              ))}
            </pre>
          </div>

          {/* Middle Ad */}
          <div style={{ 
            backgroundColor: '#333',
            width: '336px',
            height: '280px',
            margin: '40px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            borderRadius: '5px'
          }}>
            Ad Space (336x280)
          </div>
        </div>

        {/* Right Sidebar Ad */}
        <div style={{ width: '160px', padding: '20px' }}>
          <div style={{ 
            position: 'sticky',
            top: '20px',
            backgroundColor: '#333',
            width: '160px',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            borderRadius: '5px',
            fontSize: '12px',
            textAlign: 'center'
          }}>
            Ad Space<br/>(160x600)
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <div style={{ 
        backgroundColor: '#2a2a2a',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #444',
        marginTop: '40px'
      }}>
        <div style={{ 
          width: '728px', 
          height: '90px', 
          backgroundColor: '#333',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          borderRadius: '5px'
        }}>
          Ad Space (728x90)
        </div>
      </div>
    </div>
  );
}