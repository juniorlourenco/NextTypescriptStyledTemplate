import React from 'react';
import img1 from '../../../../public/images/1.jpg';
import Renting from './styles';

export default function Rent(){
    return (
        <div class="renting">
            <Card 
                image={img1}
                title="Britador Móvel para VSI - Com peneira"
                text='Equipamento de britagem que montado em paralelo com outros conjuntos proporcionam um aumento significativo da produção de materais "finos"'
            />
            <Card 
                image={img1}
                title="Conjunto de Britagem com Carretas Separadas"
                text="A Cavalca Construções possui um conjunto de britagem formada por um britador de mandíbulas C-100 e britadores cônicos HP 200 da marca Metso. Cone HP 200 + Peneira Vibratória montada sob um chassi."        
            />
            <Card 
                image={img1}
                title="Conjunto de Britagem Completo com 1 Chassi"
                text="Britadores modelo Metso NW 80 HP 200, peneira de 3 decks. Proporcionam excelentes produções atendendo à demanda de grandes Obras com sua montagem muito fácil e prática."
            />
            <Card 
                image={img1}
                title="Usinas de Micro Revestimento"
                text="Locação de Usinas de Micro Revestimento."
            />
            <Card 
                image={img1}
                title="Fresadoras"
                text="Locação de Fresadora de asfaltos."
            />
            <Card 
                img src={img1}
                title="Recicladoras de Asfalto"
                text="Locação de Recicladoras de Asfalto"
            />
        </div>
    );
}

export function Card(){
    return (
        <div class="card">
            <header>
                <img src={img1} />
            </header>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};