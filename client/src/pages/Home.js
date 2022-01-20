import React from "react";
import Table from "../components/Table";
import Token from "../components/Token";
import "./style.css";

const Home = () => {
    const amount = 6;

    return (
        <div className="container">
            <div className="flexbox">
                <Table id='table-prime' className='tableHolder'>
                    <Token id='token-1' className='token' draggable='true'>
                        <p>T1</p>
                    </Token>
                    <Token id='token-2' className='token' draggable='true'>
                        <p>T2</p>
                    </Token>
                </Table>

                {[...Array(amount)].map((x, i) =>
                    <Table id={'table-' + i} className='table' ></Table>
                )}

            </div>
        </div >
    );
};

export default Home;

/* 
<Table id='table-1' className='table'>
    <Token id='token-1' className='token' draggable='true'>
        <p>Token1</p>
    </Token>
</Table>
 */