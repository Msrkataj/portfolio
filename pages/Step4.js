import Link from 'next/link'

import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React, {useEffect, useState} from "react";


const Step4 = () => {

    const [Address, setAddress] = useState( {
        street: "",
        city: "",
        postalCode: "",
        telephone: ""
    });

    const handleChange = ({ target }) => {
        setAddress(prev => ({
            ...prev,
            street: target.value,
        }))
    }

    const handleChange2 = ({ target }) => {
        setAddress(prev => ({
            ...prev,
            city: target.value,
        }))
    }

    const handleChange3 = ({ target }) => {
        setAddress(prev => ({
            ...prev,
            postalCode: target.value,
        }))
    }

    const handleChange4 = ({ target }) => {
        setAddress(prev => ({
            ...prev,
            telephone: target.value,
        }))
    }



    // useEffect(() => {
    //     const saved = localStorage.getItem("address")
    //     const initialValue = JSON.parse(saved);
    //     setAddress(prev => ([
    //         ...prev,
    //         street: initialValue
    //     ]))
    //         , [setAddress]
    // })

    useEffect(() => {
        // storing input name
        localStorage.setItem("address", JSON.stringify(Address));
    }, [Address]);

    return (
        <>
            <HeaderStep/>
            <section className="step-content">
                <div className="step-content-alert">
                    <h2>Ważne!</h2>
                    <p>Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
                </div>
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <p>Krok 4/4</p>
                            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                            <form className="summary">
                                <div className="summary-address summary-center">
                                    <div className="summary-title">
                                        <h3>Adres odbioru:</h3>
                                    </div>
                                    <div className="summary-value">
                                        <form >
                                            <label>Ulica</label>
                                            <input type="text" value={Address.street} onChange={handleChange}/>
                                        </form>
                                        <form>
                                            <label>Miasto</label>
                                            <input type="text" value={Address.city} onChange={handleChange2}/>
                                        </form>
                                        <form>
                                            <label>Kod pocztowy</label>
                                            <input type="text" value={Address.postalCode} onChange={handleChange3}/>
                                        </form>
                                        <form>
                                            <label>Numer telefonu</label>
                                            <input type="text" value={Address.telephone} onChange={handleChange4}/>
                                        </form>
                                    </div>
                                </div>
                                <div className="summary-term summary-center">
                                    <div className="summary-title">
                                        <h3>Termin odbioru:</h3>
                                    </div>
                                    <div className="summary-value">
                                        <form>
                                            <label>Data</label>
                                            <input type="text" id="text" />
                                        </form>
                                        <form>
                                            <label>Godzina</label>
                                            <input type="text" id="text" />
                                        </form>
                                        <form>
                                            <label>Uwagi dla kuriera</label>
                                            <textarea id="message"></textarea>
                                        </form>
                                    </div>
                                </div>
                            </form>
                            <div className="button">
                                <Link class href="/Step3">
                                    <a className="btn" >Wstecz</a>
                                </Link>
                                <Link class href="/Step5">
                                    <a className="btn" >Dalej</a>
                                </Link>
                            </div>
                        </div>
                        <div className="steps-background"></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Step4