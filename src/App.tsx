import { Title, Subtitle, Footer } from './components'

function App() {
  return (
    <div className="container">
      <main>
        <header>
          <Title />
          <Subtitle />
        </header>
      </main>
      <Footer />
    </div>
  )
}

export default App