"use client";

import Head from "next/head";

/* =========================
   DATA CONFIG (EDIT HERE)
========================= */

const stats = [
  { value: "10+", label: "Algorithm Visualizations" },
  { value: "6", label: "Sorting Algorithms" },
  { value: "100%", label: "Free & Open Source" },
];

const sortingAlgorithms = [
  {
    title: "Bubble Sort",
    desc: "Simple comparison-based sorting",
    complexity: "O(n²)",
    image: "/img/bubblesort.png",
    link: "/bubble_sort",
  },
  {
    title: "Selection Sort",
    desc: "Find minimum and swap",
    complexity: "O(n²)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    link: "/selection_sort",
  },
  {
    title: "Insertion Sort",
    desc: "Build sorted array incrementally",
    complexity: "O(n²)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    link: "/insertion_sort",
  },
  {
    title: "Merge Sort",
    desc: "Divide and conquer",
    complexity: "O(n log n)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    link: "/merge_sort",
  },
  {
    title: "Quick Sort",
    desc: "Efficient partitioning",
    complexity: "O(n log n)",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500",
    link: "/quick_sort",
  },
  {
    title: "Heap Sort",
    desc: "Binary heap based sorting",
    complexity: "O(n log n)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500",
    link: "/heap_sort",
  },
];

const graphAlgorithms = [
  {
    title: "BFS Traversal",
    desc: "Breadth-first graph traversal",
    complexity: "O(V + E)",
    image: "/img/graph.png",
    link: "/bfs_graph",
  },
  {
    title: "Dijkstra",
    desc: "Shortest path algorithm",
    complexity: "O((V+E) log V)",
    image: "/img/dj.png",
    link: "/dijkstra",
  },
];

/* =========================
   REUSABLE CARD
========================= */

function AlgorithmCard({ item }) {
  return (
    <a href={item.link} className="portfolio-item">
      <div className="overlay">
        <div className="portfolio-item-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <span className="complexity-badge">
            Time: {item.complexity}
          </span>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </a>
  );
}

/* =========================
   PAGE
========================= */

export default function Home() {
  return (
    <>
      <Head>
        <title>DSA Navigator</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=PT+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/css/bootstrap.min.css"
        />
      </Head>

      {/* HERO */}
      <section className="untree_co-section text-center">
        <div className="container">
          <h1 className="heading">
            DSA<span className="text-primary">.</span> Navigator
          </h1>
          <p className="subheading mt-4">
            Master <strong>Data Structures & Algorithms</strong> with interactive
            visualizations.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="stat-box">
                  <h2>{s.value}</h2>
                  <p>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SORTING */}
      <section className="untree_co-section" id="sorting">
        <div className="container">
          <div className="text-center mb-5">
            <div className="category-badge">📊 Sorting Algorithms</div>
            <h2 className="section-heading">Sorting Algorithms</h2>
            <p className="section-subheading">
              Visual step-by-step sorting breakdowns
            </p>
          </div>

          <div className="row">
            {sortingAlgorithms.map((algo, i) => (
              <div className="col-sm-6 col-lg-4" key={i}>
                <AlgorithmCard item={algo} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAPHS */}
      <section className="untree_co-section" id="graphs">
        <div className="container">
          <div className="text-center mb-5">
            <div className="category-badge">🌐 Graph Algorithms</div>
            <h2 className="section-heading">Graph Algorithms</h2>
            <p className="section-subheading">
              Traversal & pathfinding visualizations
            </p>
          </div>

          <div className="row justify-content-center">
            {graphAlgorithms.map((algo, i) => (
              <div className="col-sm-6 col-lg-4" key={i}>
                <AlgorithmCard item={algo} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer text-center">
        <p>DSA Navigator © 2026. Learn Algorithms Visually.</p>
      </footer>
    </>
  );
}
