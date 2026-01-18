"use client"

import AlgorithmLayout from '@/components/AlgorithmLayout';
import { useState, useEffect } from 'react';

export default function BubbleSort() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [comparing, setComparing] = useState([-1, -1]);
  const [sorted, setSorted] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(600);
  const [message, setMessage] = useState('Click Start to begin sorting!');
  const [currentPass, setCurrentPass] = useState(0);

  const reset = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setComparing([-1, -1]);
    setSorted([]);
    setIsPlaying(false);
    setMessage('Click Start to begin sorting!');
    setCurrentPass(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const bubbleSortStep = async () => {
      let arr = [...array];
      let n = arr.length;
      let swapped = false;

      for (let i = 0; i < n - currentPass - 1; i++) {
        setComparing([i, i + 1]);
        setMessage(`Comparing ${arr[i]} and ${arr[i + 1]}`);
ECHO is off.
        await new Promise(resolve => setTimeout(resolve, speed));

        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          setArray([...arr]);
          setMessage(`Swapped! ${arr[i + 1]} > ${arr[i]}`);
          swapped = true;
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }

      setSorted([...sorted, n - currentPass - 1]);
      setCurrentPass(currentPass + 1);
      setComparing([-1, -1]);

      if (currentPass >= n - 1 || !swapped) {
        setMessage('Sorting complete! 🎉');
        setIsPlaying(false);
        setSorted(Array.from({ length: n }, (_, i) => i));
      }
    };

    bubbleSortStep();
  }, [isPlaying, currentPass, speed]);

  return (
    <AlgorithmLayout
      name="Bubble Sort"
      category="Sorting"
      timeComplexity="O^(n²^)"
      spaceComplexity="O^(1^)"
      difficulty="Easy"
    >
      <div className="controls">
        <label>Speed:</label>
        <input 
          type="range" 
          min="200" 
          max="1500" 
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span style={{ color: '#888', fontSize: '14px', marginRight: '20px' }}>
          {speed < 400 ? 'Fast' : speed < 800 ? 'Medium' : 'Slow'}
        </span>
        <button className="btn-start" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Start'}
        </button>
        <button className="btn-reset" onClick={reset}>Reset</button>
      </div>
ECHO is off.
      <div className="message-box">
        {message}
      </div>
ECHO is off.
      <div className="visualization">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '10px',
          alignItems: 'flex-end',
          height: '300px'
        }}>
          {array.map((num, idx) => {
            let bgColor = '#555';
            if (sorted.includes(idx)) bgColor = '#22c55e';
            else if (comparing.includes(idx)) bgColor = '#eab308';
ECHO is off.
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: `${num * 3}px`,
                  backgroundColor: bgColor,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '8px 8px 0 0',
                  transition: 'all 0.3s',
                  color: 'white'
                }}>
                  {num}
                </div>
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
                  [{idx}]
                </div>
              </div>
            );
          })}
        </div>
      </div>
ECHO is off.
      <div className="code-block">
        <div className="code-block-title">C++ CODE:</div>
        <pre>{`void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n-1; i++) {
    bool swapped = false;
    for (int j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
        swapped = true;
      }
    }
    if (!swapped) break; // Optimized version
  }
}`}</pre>
      </div>

      <div style={{ 
        backgroundColor: '#2a2a2a',
        borderRadius: '10px',
        padding: '30px',
        marginTop: '40px'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>How Bubble Sort Works</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#ccc' }}>
          Bubble Sort works by repeatedly stepping through the list, comparing adjacent 
          elements and swapping them if they are in the wrong order. The pass through 
          the list is repeated until the list is sorted.
        </p>
        <br/>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#ccc' }}>
          <strong style={{ color: '#22c55e' }}>Why "Bubble"?</strong> The largest elements 
          "bubble up" to the end of the array with each pass, like bubbles rising in water!
        </p>
      </div>
    </AlgorithmLayout>
  );
}
