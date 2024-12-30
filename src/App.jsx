import './App.css'

const App = () => {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
