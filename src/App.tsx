import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-text mb-4">
            Vite + React + TypeScript
          </h1>
          <p className="text-xl text-lightText">
            Projekt skonfigurowany z Tailwind CSS 3.4
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 mb-12">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={viteLogo}
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110"
              alt="React logo"
            />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-text mb-4">Licznik</h2>
            <div className="text-center">
              <div className="text-6xl font-bold text-green mb-4">{count}</div>
              <button
                onClick={() => setCount(count => count + 1)}
                className="btn-primary text-lg px-6 py-3"
              >
                Zwiększ licznik
              </button>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-text mb-4">
              Informacje
            </h2>
            <div className="space-y-3 text-lightText">
              <p>
                Edytuj{' '}
                <code className="bg-lightText/10 px-2 py-1 rounded text-sm font-mono">
                  src/App.tsx
                </code>{' '}
                i zapisz, aby przetestować HMR
              </p>
              <p>Kliknij na loga Vite i React, aby dowiedzieć się więcej</p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-text mb-4">
              Test kolorów Samsung
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green text-white p-4 rounded-lg text-center">
                <div className="text-sm font-medium">Green</div>
                <div className="text-xs opacity-80">#009949</div>
              </div>
              <div className="bg-darkBlue text-white p-4 rounded-lg text-center">
                <div className="text-sm font-medium">Dark Blue</div>
                <div className="text-xs opacity-80">#1428A0</div>
              </div>
              <div className="bg-lightBlue text-white p-4 rounded-lg text-center">
                <div className="text-sm font-medium">Light Blue</div>
                <div className="text-xs opacity-80">#007AFF</div>
              </div>
              <div className="bg-dark text-white p-4 rounded-lg text-center">
                <div className="text-sm font-medium">Dark</div>
                <div className="text-xs opacity-80">#1C1C1C</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-text mb-4">
              Test typografii i spacing
            </h3>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-text">Nagłówek H1</h1>
              <h2 className="text-3xl font-semibold text-darkBlue">
                Nagłówek H2
              </h2>
              <h3 className="text-2xl font-medium text-green">Nagłówek H3</h3>
              <p className="text-lg text-lightText leading-relaxed">
                To jest przykładowy tekst z customowym fontem SamsungOne i
                kolorami Samsung. Możesz zobaczyć różne rozmiary, wagi i kolory
                tekstu.
              </p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-text mb-4">
              Test komponentów
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="bg-darkBlue hover:bg-darkBlue/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Custom Button
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lightText">
            Projekt skonfigurowany przez doświadczonego developera React +
            TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
