import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const renderResult = () => {
        const imcHeight = height * height;
        const imc = weight / imcHeight;

        return Math.round(imc);
    };

    const getImcCategory = (imc) => {
        if (imc < 16) return "Baixo peso (grau I)";
        if (imc >= 16 && imc < 17) return "Baixo peso (grau II)";
        if (imc >= 17 && imc < 18.5) return "Baixo peso (grau III)";
        if (imc >= 18.5 && imc < 25) return "Peso adequado";
        if (imc >= 25 && imc < 30) return "Sobrepeso";
        if (imc >= 30 && imc < 35) return "Obesidade (grau I)";
        if (imc >= 35 && imc < 40) return "Obesidade (grau II)";
        if (imc >= 40) return "Obesidade (grau III)";
    };

    const imc = renderResult();
    const category = getImcCategory(imc);

    return (
        <div>
            <header className={styles.header}>
                <h1>Calculadora de IMC</h1>
                <p>IMC significa indice de massa corporal,</p>
                <p>
                    aqui você pode colocar sua altura e seu peso, e te diremos o
                    seu IMC
                </p>
            </header>
            <form className={styles.form}>
                <h2>Peso:</h2>
                <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                />
                <h2>Altura:</h2>
                <input
                    type="number"
                    onChange={(e) => setHeight(e.target.value)}
                />
            </form>
            <div className={styles.result}>
                <h2>Seu resultado:</h2>
                {isNaN(imc) ? "Por favor, insira valores válidos." : imc}
            </div>
            <table className={styles.table}>
                <tr>
                    <th>IMC</th>
                    <th>Categoria</th>
                </tr>
                <tr
                    className={category === "Baixo peso (grau I)"
                        ? styles.bold
                        : ""}
                >
                    <td>Menos de 16</td>
                    <td>Baixo peso (grau I)</td>
                </tr>

                <tr
                    className={category === "Baixo peso (grau II)"
                        ? styles.bold
                        : ""}
                >
                    <td>Entre 16 e 16,99</td>
                    <td>Baixo peso (grau II)</td>
                </tr>
                <tr
                    className={category === "Baixo peso (grau III)"
                        ? styles.bold
                        : ""}
                >
                    <td>Entre 17 e 18,49</td>
                    <td>Baixo peso (grau III)</td>
                </tr>

                <tr
                    className={category === "Peso adequado" ? styles.bold : ""}
                >
                    <td>Entre 18,50 e 24,99</td>
                    <td>Peso adequeado</td>
                </tr>
                <tr
                    className={category === "Sobrepeso" ? styles.bold : ""}
                >
                    <td>Entre 25 e 29,99</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr
                    className={category === "Obesidade (grau I)"
                        ? styles.bold
                        : ""}
                >
                    <td>Entre 30 e 34,99</td>
                    <td>Obesidade (grau I)</td>
                </tr>
                <tr
                    className={category === "Obesidade (grau II)"
                        ? styles.bold
                        : ""}
                >
                    <td>Entre 35 e 39,99</td>
                    <td>Obesidade (grau II)</td>
                </tr>
                <tr
                    className={category === "Obesidade (grau III)"
                        ? styles.bold
                        : ""}
                >
                    <td>A partir de 40</td>
                    <td>Obesidade (grau III)</td>
                </tr>
            </table>
        </div>
    );
};

export default Form;
