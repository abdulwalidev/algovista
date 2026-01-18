"use client"

import AlgorithmLayout from '@/components/AlgorithmLayout';

export default function SelectionSort() {
  return (
    <AlgorithmLayout
      name="Selection Sort"
      category="Sorting"
      timeComplexity="O^(n²^)"
      spaceComplexity="O^(1^)"
      difficulty="Easy"
    >
      <div className="controls">
        <label>Speed:</label>
        <input type="range" min="200" max="1500" defaultValue="600" />
        <button className="btn-start">Start</button>
        <button className="btn-reset">Reset</button>
      </div>
ECHO is off.
      <div className="message-box">
        Click Start to begin!
      </div>
ECHO is off.
      <div className="visualization">
        🎨 Selection Sort Visualization Area
      </div>
ECHO is off.
      <div className="code-block">
        <div className="code-block-title">C++ CODE:</div>
        <pre>{`void selectionSort(int arr[], int n) {
  for (int i = 0; i < n-1; i++) {
    int minIdx = i;
    for (int j = i+1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr[i], arr[minIdx]);
  }
}`}</pre>
      </div>
    </AlgorithmLayout>
  );
}
