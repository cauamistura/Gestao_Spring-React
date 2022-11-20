import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import RedButton from '../RedButton';
import './styles.css';

function SalesCard() {

    const minDate1 = new Date(new Date().setDate(new Date().getDate() - 365));
    const maxDate1 = new Date();

    const [minDate, setMinDate] = useState(minDate1);
    const [maxDate, setMaxDate] = useState(maxDate1);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        
        const dmin = minDate.toISOString().slice(0, 10); 
        const dmax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(Response => {
                setSales(Response.data.content);
            });
    }, [minDate, maxDate]);

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
                        {
                            sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{sale.date}</td>
                                        <td>{sale.sallerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R${sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="red-button-container">
                                                <RedButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCard;
