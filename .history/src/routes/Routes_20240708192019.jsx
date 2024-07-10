import "./AppRoutes.css";

function AppRoutes() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="newVideo" element={<NewVideo />}></Route>
            </Routes>
          </div>
          <FooterBar />
          <Footer />
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}

export default AppRoutes;
