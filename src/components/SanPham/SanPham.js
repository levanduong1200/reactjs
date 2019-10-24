import React from 'react';
const sanpham = (props) =>{
    return(
        <div>
            <p>Mã Sản Phẩm : {props.masanpham}</p>
            <p>Tên Sản Phẩm: {props.tensanpham}</p>
            <p>Giá: {props.gia}</p>
            <p>{props.children}</p>
        </div>
    );
}
export default sanpham;