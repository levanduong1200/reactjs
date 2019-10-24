import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SanPham from './components/SanPham/SanPham';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
        <h2>Trung Tâm Điện Thoại SamSung</h2>
          <SanPham masanpham="N01" tensanpham="SamSung A50" gia="650000d">
          Hàng chính hãng
          </SanPham>
          <SanPham masanpham="N02" tensanpham="SamSung A80" gia="980000d">
          Hàng chính hãng
          </SanPham>
          <SanPham masanpham="N03" tensanpham="SamSung A9" gia="100000d">
          Hàng chính hãng
          </SanPham>
          <SanPham masanpham="N04" tensanpham="SamSung note10" gia="250000d">
            Hàng chính hãng 
          </SanPham>
          <SanPham masanpham="N05" tensanpham="SamSung s10+" gia="170000d">
          Hàng chính hãng
          </SanPham>
        </header>
      </div>
    );
  }
}






export default App;
