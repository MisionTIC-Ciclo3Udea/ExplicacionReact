import CardRazasPerros from "components/CardRazasPerros";

import borderCollie from 'media/bordercollie.jpg';
import rhodesian from 'media/rhodesian.jpg';


function Index() {
    return (

            <section>
                <h1>Razas de Perros</h1>
                <ul className='breedCardContainer'>
                    <CardRazasPerros nombreRaza='BorderCollie' imagen={borderCollie}/>
                    <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian}/>
                </ul>
            </section>

    )
}

export default Index;