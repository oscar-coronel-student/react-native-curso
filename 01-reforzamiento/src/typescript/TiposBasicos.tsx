


export const TiposBasicos = () => {

    const name: string = 'Daniel'
    const age: number = 35
    const isActive: boolean = true
    
    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua']

    return <>
        <h3>Tipos Básicos</h3>
        { name } - { age } - { isActive ? 'Activo' : 'Desactivo' } <br />
        { poderes.join(' - ') }
    </>
}
