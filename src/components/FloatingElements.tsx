export default function FloatingElements() {
  const elements = [
    { id: 1, symbol: '💻', left: '10%', delay: 0, type: 'flowing-1' },
    { id: 2, symbol: '✨', left: '20%', delay: 1, type: 'flowing-2' },
    { id: 3, symbol: '🚀', left: '30%', delay: 0.5, type: 'flowing-3' },
    { id: 4, symbol: '⚡', left: '40%', delay: 1.5, type: 'flowing-1' },
    { id: 5, symbol: '🎨', left: '50%', delay: 0.2, type: 'flowing-2' },
    { id: 6, symbol: '📱', left: '60%', delay: 1.2, type: 'flowing-3' },
    { id: 7, symbol: '🔧', left: '70%', delay: 0.8, type: 'flowing-1' },
    { id: 8, symbol: '💡', left: '80%', delay: 1.8, type: 'flowing-2' },
    { id: 9, symbol: '🌟', left: '90%', delay: 0.3, type: 'flowing-3' },
  ];

  return (
    <div className="flowing-container">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`flowing-element ${element.type}`}
          style={{
            left: element.left,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
}
