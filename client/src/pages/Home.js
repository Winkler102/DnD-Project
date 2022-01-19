import React from "react";
import Table from "../components/Table";
import Token from "../components/Token";
import "./style.css";

const Home = () => {
    return (
        <div className="container">
            <div className="flexbox">
                <Table id='table-1' className='table'>
                    <Token id='token-1' className='token' draggable='true'>
                        <p>Token1</p>
                    </Token>
                </Table>

                <Table id='table-2' className='table'>
                    <Token id='token-2' className='token' draggable='true'>
                        <p>Token 2</p>
                    </Token>
                </Table>
                
            </div>
        </div>
    );
};

export default Home;