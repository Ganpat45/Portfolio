// "use client"; // ⚠️ Required for hooks
// import { useState, useEffect } from "react";

// export default function AirplaneGame() {
//   const [playerX, setPlayerX] = useState(45); // Player plane horizontal position %
//   const [enemies, setEnemies] = useState([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);

//   const planeWidth = 10; // width %
//   const gameWidth = 100;

//   // Handle keyboard movement
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (gameOver) return;
//       if (e.key === "ArrowLeft") setPlayerX((prev) => Math.max(prev - 5, 0));
//       if (e.key === "ArrowRight")
//         setPlayerX((prev) => Math.min(prev + 5, gameWidth - planeWidth));
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [gameOver]);

//   // Move enemies down
//   useEffect(() => {
//     if (gameOver) return;
//     const interval = setInterval(() => {
//       setEnemies((prev) => {
//         const newEnemies = prev
//           .map((e) => ({ ...e, y: e.y + 5 }))
//           .filter((e) => e.y <= 100);

//         // Collision detection
//         newEnemies.forEach((e) => {
//           if (
//             e.y >= 90 &&
//             e.x + planeWidth > playerX &&
//             e.x < playerX + planeWidth
//           ) {
//             setGameOver(true);
//           }
//         });

//         return newEnemies;
//       });
//       setScore((prev) => prev + 1);
//     }, 200);

//     return () => clearInterval(interval);
//   }, [playerX, gameOver]);

//   // Generate new enemies
//   useEffect(() => {
//     if (gameOver) return;
//     const interval = setInterval(() => {
//       setEnemies((prev) => [
//         ...prev,
//         { x: Math.floor(Math.random() * (gameWidth - planeWidth)), y: 0 },
//       ]);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [gameOver]);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "400px",
//         height: "600px",
//         margin: "50px auto",
//         border: "2px solid black",
//         background: "#87ceeb",
//         overflow: "hidden",
//       }}
//     >
//       {/* Player Plane */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "0",
//           left: `${playerX}%`,
//           width: `${planeWidth}%`,
//           height: "50px",
//           backgroundColor: "red",
//           clipPath:
//             "polygon(50% 0%, 100% 100%, 50% 75%, 0% 100%)", // simple plane shape
//         }}
//       ></div>

//       {/* Enemy Planes */}
//       {enemies.map((e, idx) => (
//         <div
//           key={idx}
//           style={{
//             position: "absolute",
//             top: `${e.y}%`,
//             left: `${e.x}%`,
//             width: `${planeWidth}%`,
//             height: "50px",
//             backgroundColor: "gray",
//             clipPath:
//               "polygon(50% 0%, 100% 100%, 50% 75%, 0% 100%)", // simple enemy plane
//           }}
//         ></div>
//       ))}

//       {/* Score */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10px",
//           left: "10px",
//           fontSize: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         Score: {score}
//       </div>

//       {/* Game Over */}
//       {gameOver && (
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             fontSize: "30px",
//             fontWeight: "bold",
//             color: "red",
//           }}
//         >
//           Game Over
//         </div>
//       )}
//     </div>
//   );
// }
