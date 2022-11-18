import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import RedButton from '../RedButton';
import './styles.css';

function SalesCard() {

    const minDate1 = new Date(new Date().setDate(new Date().getDate() - 365));
    const maxDate1 = new Date();

    const [minDate, setMinDate] = useState(minDate1);
    const [maxDate, setMaxDate] = useState(maxDate1);

    return (
        <div className="card">
            <h2 id="title-sales">Vendas</h2>
            <div>
                <div id="input-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="input-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="input-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table id="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">10</td>
                            <td className="show576">10/05/2022</td>
                            <td>Ana Flávia</td>
                            <td className="show992">190</td>
                            <td className="show992">6</td>
                            <td>R$ 6000.00</td>
                            <td>
                                <div className="red-button-container">
                                    <RedButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">5</td>
                            <td className="show576">10/05/2022</td>
                            <td>Ana Flávia</td>
                            <td className="show992">190</td>
                            <td className="show992">6</td>
                            <td>R$ 6000.00</td>
                            <td>
                                <div className="red-button-container">
                                    <RedButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">22</td>
                            <td className="show576">10/05/2022</td>
                            <td>Ana Flávia</td>
                            <td className="show992">190</td>
                            <td className="show992">6</td>
                            <td>R$ 6000.00</td>
                            <td>
                                <div className="red-button-container">
                                    <RedButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCard;
