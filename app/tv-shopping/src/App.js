import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ThinkingMoment from './components/ThinkingMoment';
import IngredientList from './components/IngredientList';
import { ref, onValue } from 'firebase/database';
import { database } from './firebaseConfig';
import useActiveStore from './store/activeStore';

function App() {

  const {status, setStatus} = useActiveStore()
  useEffect(() => {
    const ingredientsRef = ref(database, 'data'); // 'ingredients' 경로를 실시간으로 모니터링
    console.log(">>> connect RDB")
    const unsubscribe = onValue(ingredientsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log(">>> get data from RDB");
        console.log(data);  // 이곳에서 전체 JSON 데이터를 그대로 출력합니다.
        setStatus(data.status)
      }
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 리스너를 해제
  }, []);

  console.log("chagne >>> " + status)
  if(status === 'INACTIVE'){
    return  <Router>
    <Container maxWidth="lg">
      <Header />
      <Routes>
        <Route path="/" element={<ThinkingMoment />} />
      </Routes>
    </Container>
  </Router>
  }
  return (
    <Router>
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/think" element={<ThinkingMoment />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/ingre" element={<IngredientList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;