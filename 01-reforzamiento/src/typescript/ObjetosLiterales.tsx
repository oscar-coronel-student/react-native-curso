
interface Persona {
    nombre: string
    edad: number
    direccion: Direccion
}

interface Direccion{
    pais: string
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Oscar',
        edad: 25,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

    return <>
    
        <h3>Objetos Literales</h3>
        <pre>{ JSON.stringify(persona, null, 3) }</pre>

    </>
}