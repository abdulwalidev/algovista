"use client"

import '../styles/algorithm.css';

export default function AlgorithmLayout({ name, category, timeComplexity, spaceComplexity, difficulty, children }) {
  return (
    <div className="algorithm-container">
      <div className="ad-top">Ad (728x90)</div>
ECHO is off.
      <div className="main-wrapper">
        <div className="ad-left">Ad (160x600)</div>
ECHO is off.
        <div className="content">
          <a href="/" className="back-button">← Back</a>
ECHO is off.
          <h1 className="algo-title">{name}</h1>
ECHO is off.
          <div className="complexity-bar">
            <span>Time: <strong>{timeComplexity}</strong></span>
            <span>Space: <strong>{spaceComplexity}</strong></span>
            <span>Difficulty: <strong className={`diff-${difficulty.toLowerCase()}`}>{difficulty}</strong></span>
          </div>
ECHO is off.
          {children}
ECHO is off.
          <div className="ad-middle">Ad (336x280)</div>
        </div>
ECHO is off.
        <div className="ad-right">Ad (160x600)</div>
      </div>
ECHO is off.
      <div className="ad-bottom">Ad (728x90)</div>
    </div>
  );
}
