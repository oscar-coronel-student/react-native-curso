import { useUsuarios } from '../hooks/useUsuarios';
import { User } from "../interfaces/reqres"


interface RenderItemParams{
    user: User
}

export const Usuarios = () => {

    const {users, nextPage, previousPage} = useUsuarios()

    const RenderItem = ( { user: { avatar, first_name, last_name, email } }: RenderItemParams ) => {
        return <>
            <tr>
                <td>
                    <img src={ avatar } alt="No avatar..." 
                        style={{ height: '35px', borderRadius: '999px' }} 
                    />
                </td>
                <td>{ first_name } { last_name }</td>
                <td>{ email }</td>
            </tr>
        </>
    }


    return <>
        <h3>Usuarios:</h3>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( user => <RenderItem key={ user.id.toString() } user={ user } /> )
                }
            </tbody>
        </table>

        <button 
            className='btn btn-primary btn-sm me-2'
            onClick={ previousPage }
        >
            Anteriores
        </button>

        <button 
            className='btn btn-primary btn-sm'
            onClick={ nextPage }
        >
            Siguientes
        </button>

    </>
}
