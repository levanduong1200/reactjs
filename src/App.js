import React, {Component} from 'react';

import './App.css';
import SinhVien from './components/SinhVien/SinhVien';


class App extends Component{

  state = {
    sinhVien : [
      { hoten: 'Nguyên Văn Tèo', tuoi: 35, sothich: 'Ăn nhậu' },
      { hoten: 'Nguyễn Văn Hóa', tuoi: 32, sothich: 'Code' },
      { hoten: 'Nguyễn Đào Tạo', tuoi: 30, sothich: 'Giả vờ ngã' }
    ],
    lop : '18CDTH11'
  };
  xulyCapNhat = () => {

     this.setState(
       {
        sinhVien : [
          { hoten: 'RacingPXL', tuoi: 5, sothich: 'Ăn nhậu' },
          { hoten: 'UmaRacing', tuoi: 3, sothich: 'Code' },
          { hoten: 'Red Leo', tuoi: 3, sothich: 'Giả vờ ngã' }
        ],
        lop : '18CDKT11'
       }
     );
     }
  

  render(){
    return(
      <div className="App">
        <header className="App-header">
        <h2>ReactJS - {this.state.lop}</h2>
        <button onClick= {this.xulyCapNhat}>Cập Nhật</button>
         <SinhVien
           hoten = {this.state.sinhVien[0].hoten}
           tuoi = {this.state.sinhVien[0].tuoi} >
           Sở thích : {this.state.sinhVien[0].sothich}
         </SinhVien>

         <SinhVien
           hoten = {this.state.sinhVien[1].hoten}
           tuoi = {this.state.sinhVien[1].tuoi} >
           Sở Thích : {this.state.sinhVien[1].sothich}
         </SinhVien>

         <SinhVien
           hoten = {this.state.sinhVien[2].hoten}
           tuoi = {this.state.sinhVien[2].tuoi} >
           Sở Thích : {this.state.sinhVien[2].sothich}
         </SinhVien>
        </header>
      </div>
    );
  }
}






export default App;
